/*
* The MIT License (MIT)
* 
* Copyright (c) 2014 Paramesh Gunasekaran, Charuvahan Adhivarahan, 
* Sharmila Durairaj, Muralidharan Pakkirisamy, Baseer Oli and other contributors
* 
* http://www.tubularjs.com/license
* 
* Permission is hereby granted, free of charge, to any person obtaining a copy of this software and 
* associated documentation files (the “Software”), to deal in the Software without restriction, 
* including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, 
* and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, 
* subject to the following conditions:
* 
* The above copyright notice and this permission notice shall be included in all copies or 
* substantial portions of the Software.
* 
* THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
* INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. 
* IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, 
* WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR 
* THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

/************************************************** main.js **************************************************/
var System = (function (self) {
    self.js = self.js || {};
    self.css = self.css || {};
    self.type = self.type || {};
    self.js.include = function (path) {
        var js = document.createElement("script");
        js.type = "text/javascript";
        js.src = path;
        document.body.appendChild(js);
    };
    self.css.include = function (path) {
        var head = document.getElementsByTagName("head")[0];
        var css = document.createElement("link");
        css.rel = "stylesheet";
        css.type = "text/css";
        css.href = path;
        head.appendChild(css);
    };
    self.type.extend = function (Type, args) {
        var base = (typeof args !== "undefined" && args !== null)
            ? new Type(args)
            : new Type();
        var derived = Object.create(base);
        derived.base = base;
        return derived;
    };
    self.load = function () {
        self.application = new System.Application();
        self.application.session("todo_generate_unique_id");
        System.utility.page.load(System.utility.constant.page.home());
    };
    self.test = function () {
    };
    return self;
})(System || {});
/************************************************** settings.js **************************************************/
var System = (function (base) {
    if (typeof base.configuration === "undefined" || base.configuration === null) {
        base.configuration = {};
    }
    if (typeof base.configuration.settings === "undefined" || base.configuration.settings === null) {
        base.configuration.settings = {};
    }
    var self = {};
    (function () {
        var _width = 1280;
        var _height = 1000;
        var _safeWidth = 0;
        var _safeHeight = 0;
        self.bodyWidth = function () {
            return _width + "px";
        };
        self.bodyHeight = function () {
            return _height + "px";
        };
        self.safeWidth = function () {
            return _width - _safeWidth + "px";
        };
        self.safeHeight = function () {
            return _height - _safeHeight + "px";
        };
    })();
    (function () {
        var _currentPage = "";
        var setCurrentPage = function (value) {
            _currentPage = value;
        }
        var getCurrentPage = function () {
            return _currentPage;
        }
        self.CurrentPage = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setCurrentPage(value);
            }
            else {
                return getCurrentPage();
            }
        }
    })();
    (function () {
        var _backButtonURL = [];
        self.pushBackURL = function (value) {
            _backButtonURL.push(value);
        }
        self.popBackURL = function () {
            return _backButtonURL.pop();
        }
        self.backURL = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                self.pushBackURL(value);
            }
            else {
                return self.popBackURL();
            }
        }
        self.backURLClear = function () {
            if (typeof _backButtonURL !== "undefined" && _backButtonURL !== null) {
                _backButtonURL = [];
            }
        }
    })();
    base.configuration.settings = self;
    return base;
})(System || {});
/************************************************** constant.js **************************************************/
System.utility = System.utility || {};
var System = (function (base) {
    base.utility = base.utility || {};
    var self = {};
    self.page = {};
    (function () {
        var _container = "app-container";
        var _pageDefault = "Home";
        var _pageGridStoreFront = "GridStoreFront";
        var _pageListStoreFront = "ListStoreFront";
        var _pageVideoStoreFront = "VideoStoreFront";
        var _pageSearch = "Search";
        self.container = function () {
            return _container;
        };
        self.page.home = function () {
            return _pageDefault;
        };
        self.page.gridStoreFront = function () {
            return _pageGridStoreFront;
        };
        self.page.listStoreFront = function () {
            return _pageListStoreFront;
        };
        self.page.videoStoreFront = function () {
            return _pageVideoStoreFront;
        };
        self.page.search = function () {
            return _pageSearch;
        };
    })();
    base.utility.constant = self;
    return base;
})(System || {});
/************************************************** handler.js **************************************************/
System.navigation = System.navigation || {};
System.navigation.handler = (function () {
    var self = {};
    (function () {
        _value = ["left", "right", "up", "down"];
        self.isNavigationEvent = function (event) {
            var result = false;
            if (_value.indexOf(event) != -1) {
                result = true;
            }
            return result;
        };
    })();
    (function () {
        var overlapsVertically = function (a, b) {
            var result = false;
            var c1 = {
                left: a.offsetLeft(),
                right: a.offsetLeft() + a.offsetWidth()
            };
            var c2 = {
                left: b.offsetLeft(),
                right: b.offsetLeft() + b.offsetWidth()
            };
            if ((c1.left >= c2.left && c1.right <= c2.right)
                || (c1.left <= c2.left && c1.right >= c2.right)
                || (c1.left >= c2.left && c1.left <= c2.right && c1.right >= c2.right)
                || (c1.left <= c2.left && c1.right >= c2.left && c1.right <= c2.right)) {
                result = true;
            }
            return result;
        };
        var overlapsHorizontally = function (a, b) {
            var result = false;
            var c1 = {
                top: a.offsetTop(),
                bottom: a.offsetTop() + a.offsetHeight()
            };
            var c2 = {
                top: b.offsetTop(),
                bottom: b.offsetTop() + b.offsetHeight()
            };
            if ((c1.top >= c2.top && c1.bottom <= c2.bottom)
                || (c1.top <= c2.top && c1.bottom >= c2.bottom)
                || (c1.top >= c2.top && c1.top <= c2.bottom && c1.bottom >= c2.bottom)
                || (c1.top <= c2.top && c1.bottom >= c2.top && c1.bottom <= c2.bottom)) {
                result = true;
            }
            return result;
        };
        var isLeftOf = function (a, b) {
            var result = false;
            var c1 = {
                left: a.offsetLeft(),
                right: a.offsetLeft() + a.offsetWidth()
            };
            var c2 = {
                left: b.offsetLeft(),
                right: b.offsetLeft() + b.offsetWidth()
            };
            if (c1.left < c2.left && c1.right < c2.left) {
                result = true;
            }
            return result;
        };
        var isRightOf = function (a, b) {
            var result = false;
            var c1 = {
                left: a.offsetLeft(),
                right: a.offsetLeft() + a.offsetWidth()
            };
            var c2 = {
                left: b.offsetLeft(),
                right: b.offsetLeft() + b.offsetWidth()
            };
            if (c1.left > c2.right && c1.right > c2.right) {
                result = true;
            }
            return result;
        };
        var isAbove = function (a, b) {
            var result = false;
            var c1 = {
                top: a.offsetTop(),
                bottom: a.offsetTop() + a.offsetHeight()
            };
            var c2 = {
                top: b.offsetTop(),
                bottom: b.offsetTop() + b.offsetHeight()
            };
            if (c1.top < c2.top && c1.bottom < c2.top) {
                result = true;
            }
            return result;
        };
        var isBelow = function (a, b) {
            var result = false;
            var c1 = {
                top: a.offsetTop(),
                bottom: a.offsetTop() + a.offsetHeight()
            };
            var c2 = {
                top: b.offsetTop(),
                bottom: b.offsetTop() + b.offsetHeight()
            };
            if (c1.top > c2.bottom && c1.bottom > c2.bottom) {
                result = true;
            }
            return result;
        };
        var asc = function (a, b) {
            return a.pos - b.pos;
        };
        var desc = function (a, b) {
            return b.pos - a.pos;
        };
        var optimalMatch = function (candidates, control, orientation) {
            var result = candidates[0].control;
            if (orientation === "vertical") {
                for (var ii = 0; ii < candidates.length; ii++) {
                    if (overlapsVertically(candidates[ii].control, control)) {
                        result = candidates[ii].control;
                        if (result.visible() === true) {
                            break;
                        }
                    }
                }
            } else {
                for (var ii = 0; ii < candidates.length; ii++) {
                    if (overlapsHorizontally(candidates[ii].control, control)) {
                        result = candidates[ii].control;
                        if (result.visible() === true) {
                            break;
                        }
                    }
                }
            }
            return result;
        };
        var up = function (control) {
            var controls = System.application.currentPage().navigationMap();
            var candidates = [];
            for (var key in controls) {
                if (controls[key].id() !== control.id()) {
                    if (isAbove(controls[key], control)) {
                        candidates.push({
                            pos: controls[key].offsetTop(),
                            control: controls[key]
                        });
                    }
                }
            }
            if (candidates.length > 0) {
                candidates.sort(desc);
                System.application.currentPage().focus(optimalMatch(candidates, control, "vertical"));
            }
        };
        var down = function (control) {
            var controls = System.application.currentPage().navigationMap();
            var candidates = [];
            for (var key in controls) {
                if (controls[key].id() !== control.id()) {
                    if (isBelow(controls[key], control)) {
                        candidates.push({
                            pos: controls[key].offsetTop(),
                            control: controls[key]
                        });
                    }
                }
            }
            if (candidates.length > 0) {
                candidates.sort(asc);
                System.application.currentPage().focus(optimalMatch(candidates, control, "vertical"));
            }
        };
        var left = function (control) {
            var controls = System.application.currentPage().navigationMap();
            var candidates = [];
            for (var key in controls) {
                if (controls[key].id() !== control.id()) {
                    if (isLeftOf(controls[key], control)) {
                        candidates.push({
                            pos: controls[key].offsetLeft(),
                            control: controls[key]
                        });
                    }
                }
            }
            if (candidates.length > 0) {
                candidates.sort(desc);
                System.application.currentPage().focus(optimalMatch(candidates, control, "horizontal"));
            }
        };
        var right = function (control) {
            var controls = System.application.currentPage().navigationMap();
            var candidates = [];
            for (var key in controls) {
                if (controls[key].id() !== control.id()) {
                    if (isRightOf(controls[key], control)) {
                        candidates.push({
                            pos: controls[key].offsetLeft(),
                            control: controls[key]
                        });
                    }
                }
            }
            if (candidates.length > 0) {
                candidates.sort(asc);
                System.application.currentPage().focus(optimalMatch(candidates, control, "horizontal"));
            }
        };
        var executeControlNavigation = function (control, event) {
            var result = false;
            var next = control.next(event);
            if (typeof next !== "undefined" && typeof next !== null && next.id()!=="") {
                System.application.currentPage().focus(next);
                result = true;
            }
            else {
                result = executeOverridedNavigation(control, event)
            }
            return result;
        };
        var executeOverridedNavigation = function (control, event) {
            var result = false;
            var _controlID = ""
            if (event === "up" && control.navigation().up !== "undefined" && control.navigation().up !== null) {
                _controlID = control.navigation().up;
            } else if (event === "down" && control.navigation().down !== "undefined" && control.navigation().down !== null) {
                _controlID = control.navigation().down;
            } else if (event === "left" && control.navigation().left !== "undefined" && control.navigation().left !== null) {
                _controlID = control.navigation().left;
            } else if (event === "right" && control.navigation().right !== "undefined" && control.navigation().right !== null) {
                _controlID = control.navigation().right;
            }
            if (_controlID !== "") {
                var controls = System.application.currentPage().navigationMap();
                var _itemIndex = 0;
                for (var key in controls) {
                    if (controls[key].id() == _controlID) {
                        if (controls[key].type() == "list" && (event === "right" || event === "down") && controls[key].updateRightIndex() === true){
                                controls[key].setCurrentIndex(_itemIndex);
                        }
                            else if (controls[key].type() == "list" && event === "left" && controls[key].updateLeftIndex() === true) {
                            _itemIndex = (controls[key].itemCount() === 1) ? 0 : controls[key].itemCount() - 1;
                            controls[key].setCurrentIndex(_itemIndex);
                        }
                      
                        System.application.currentPage().focus(controls[key]);
                        result = true;
                    }
                }
            }
            if (result === false) {
                if (event === "up" && control.navigation().up !== "undefined" && control.navigation().up === "") {
                    result = true;
                } else if (event === "down" && control.navigation().down !== "undefined" && control.navigation().down === "") {
                    result = true;
                } else if (event === "left" && control.navigation().left !== "undefined" && control.navigation().left === "") {
                    result = true;
                } else if (event === "right" && control.navigation().right !== "undefined" && control.navigation().right === "") {
                    result = true;
                }
            }
            return result;
        };
        var executeListNavigation = function (control, event) {
            var result = false;
            if (event === "up") {
                result = control.up();
            } else if (event === "down") {
                result = control.down();
            } else if (event === "left") {
                result = control.left();
            } else if (event === "right") {
                result = control.right();
            }
            return result;
        };
        var executeHeuristicNavigation = function (control, event) {
            if (event === "up") {
                up(control);
            } else if (event === "down") {
                down(control);
            } else if (event === "left") {
                left(control);
            } else if (event === "right") {
                right(control);
            }
        };
        var executeNavigation = function (event) {
            var control = System.application.currentPage().focusedControl();
            var success = false;
            if (control.type() === "list" || control.type() === "grid") {
                success = executeListNavigation(control, event);
            } else if (control.hasNavigationFor(event)) {
                success = executeControlNavigation(control, event);
            }
            if (!success && control.navigation() !== "undefined" && control.navigation() !== null) {
                success = executeOverridedNavigation(control, event);
            }
            if (!success) {
                executeHeuristicNavigation(control, event);
            }
        };
        self.execute = function (event) {            
            executeNavigation(event);
         };
    })();
    return self;
})();
/************************************************** handler.js **************************************************/
System.event = System.event || {};
System.event.handler = (function () {
    var self = {};
    (function () {
        var executeHandler = function (event) {
            var control = System.application.currentPage().focusedControl();
            if (control.type() === "list" || control.type() === "grid") {
                control = control.current();
            }
            if (control.hasHandlerFor(event)) {
                control.handler(event)(control);
            }
        };
        self.execute = function (event) {
                executeHandler(event);
                if (System.navigation.handler.isNavigationEvent(event)) {
                    System.navigation.handler.execute(event);
                }
            
        };
    })();
    return self;
})();
/************************************************** http.js **************************************************/
var System = (function (base) {
    var self = {};
    if (typeof base.utility === "undefined" || base.utility === null) {
        base.utility = {};
    }
    if (typeof base.utility.http === "undefined" || base.utility.http === null) {
        base.utility.http = {};
    }
    self.get = function (url, param, callback) {
        var xmlHttp = new XMLHttpRequest();
        var result = '';
        if (xmlHttp == null) {
            alert('Browser does not support Ajax');
        }
        else {
            try{
                xmlHttp.open("GET", url, true);
                xmlHttp.send(null);
                xmlHttp.onreadystatechange = function () {
                    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                        callback(xmlHttp.responseText);
                    }
                }
                xmlHttp.onerror = function (e) {
                    System.utility.page.load(System.utility.constant.page.error(), { GPEC: "" });
                };
            }
            catch(e) {
                System.utility.page.load(System.utility.constant.page.error(), { GPEC: ""});
            }
        }
    }
    self.post = function (url, params) {
    };
    base.utility.http = self;
    return base;
})(System || {});
/************************************************** page.js **************************************************/
var System = (function (base) {
    base.utility = base.utility || {};
    var self = {};
    var getPage = function (pageId) {
        var result;
        if (System.application.pageExists(pageId)) {
            result = System.application.page(pageId);
        } else {
            result = new System.page[pageId]();
            System.application.addPage(result);
        }
        return result;
    };
    self.load = function (pageId, args) {
        for (var key in System.page) {
            if (key === pageId) {
                System.configuration.settings.CurrentPage(pageId);
                var page = getPage(pageId);
                
                page.load(args);
                var container = document.getElementById(System.utility.constant.container());
                for (var ii = 0; ii < container.childNodes.length; ii++) {
                    container.removeChild(container.childNodes[ii]);
                }
                container.appendChild(page.html());
                System.application.currentPage(page);
                break;
            }
        }
    };
    base.utility.page = self;
    return base;
})(System || {});
/************************************************** constant.js **************************************************/
System.utility = System.utility || {};
var System = (function (base) {
    base.utility = base.utility || {};
    var self = {};
    self.page = {};
    (function () {
        var _container = "app-container";
        var _pageDefault = "Home";
        var _pageGridStoreFront = "GridStoreFront";
        var _pageListStoreFront = "ListStoreFront";
        var _pageVideoStoreFront = "VideoStoreFront";
        var _pageSearch = "Search";
        self.container = function () {
            return _container;
        };
        self.page.home = function () {
            return _pageDefault;
        };
        self.page.gridStoreFront = function () {
            return _pageGridStoreFront;
        };
        self.page.listStoreFront = function () {
            return _pageListStoreFront;
        };
        self.page.videoStoreFront = function () {
            return _pageVideoStoreFront;
        };
        self.page.search = function () {
            return _pageSearch;
        };
    })();
    base.utility.constant = self;
    return base;
})(System || {});
/************************************************** application.js **************************************************/
var System = System || {};
System.Application = function () {
    var self = {};
    (function () {
        var _value = {};
        var setCurrentPage = function (value) {
            _value = value;
        };
        var getCurrentPage = function () {
            return _value;
        };
        self.currentPage = function (value) {
            if (typeof value !== "undefined" && value != null) {
                setCurrentPage(value);
            } else {
                return getCurrentPage();
            }
        };
    })();
    (function () {
        var _value = {};
        self.addPage = function (page) {
            _value[page.id()] = page;
        };
        self.removePage = function () {
            delete _value[page.id()];
        };
        self.pageExists = function (pageId) {
            var result = false;
            for (var key in _value) {
                if (key === pageId) {
                    result = true;
                    break;
                }
            }
            return result;
        };
        self.page = function (pageId) {
            return _value[pageId];
        };
    })();
    (function () {
        var _value = "";
        var getSession = function () {
            return _value;
        };
        var setSession = function (value) {
            _value = value;
        };
        self.session = function (value) {
            if (typeof value !== "undefined" && value != null) {
                setSession(value);
            } else {
                return getSession();
            }
        };
    })();
    return self;
};
/************************************************** base.js **************************************************/
System.control = System.control || {};
System.control.html = System.control.html || {};
System.control.html.Base = function (args) {
    var self = {};
    var _element;
    (function () {
        self.element = function () {
            return _element;
        };
    })();
    (function () {
        var setId = function (value) {
            _element.id = value;
        };
        var getId = function () {
            return _element.id;
        };
        self.id = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setId(value);
            } else {
                return getId();
            }
        };
    })();
    (function () {
        var _value = true;
        var setVisible = function (value) {
            _value = value
        };
        var getVisible = function () {
            return _value;
        };
        self.visible = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setVisible(value);
            } else {
                return getVisible();
            }
        };
    })();
    (function () {
        var _value = [];
        var update = function () {
            for (var ii = _value.length - 1; ii >= 0; ii--) {
                if (_value[ii].trim() === "") {
                    _value.splice(ii, 1);
                }
            }
            _element.setAttribute("class", _value.join(" ").trim());
        };
        var setClass = function (value) {
            _value = value.trim().split(" ");
            update();
        };
        var getClass = function () {
            return _value.join(" ");
        };
        self.class = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setClass(value.trim());
            }
            else {
                return getClass();
            }
        };
        self.addClass = function (value) {
            if (_value.indexOf(value) === -1) {
                _value.push(value);
                update();
            }
        };
        self.removeClass = function (value) {
            if (_value.indexOf(value) !== -1) {
                _value.splice(_value.indexOf(value), 1);
                update();
            }
        };
        self.clearClass = function (value) {
            setClass("");
        };
    })();
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.element !== "undefined" && args.element !== null) {
                _element = document.createElement(args.element);
            }
        }
    })(args);
    self.html = function () {
        return _element;
    };
    self.offsetLeft = function () {
        return _element.offsetLeft;
    };
    self.offsetTop = function () {
        return _element.offsetTop;
    };
    self.offsetWidth = function () {
        return _element.offsetWidth;
    };
    self.offsetHeight = function () {
        return _element.offsetHeight;
    };
    return self;
};
/************************************************** div.js **************************************************/
System.control = System.control || {};
System.control.html = System.control.html || {};
System.control.html.Div = function (args) {
    var self =System.type.extend(System.control.html.Base, { element: "div" });
    (function () {
        var setText = function (value) {
            self.element().innerHTML = value;
        };
        var getText = function () {
            return self.element().innerHTML;
        };
        self.text = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setText(value);
            }
            else {
                return getText();
            }
        };
    })();
    (function () {
        self.addItem = function (item) {
            self.element().appendChild(item.html());
        };
        self.removeItem = function (item) {
            self.element().removeChild(item.html());
        };
        self.hasItems = function () {
            if (self.element().childNodes.length > 0) {
                return true;
            } else {
                return false;
            }
        };
        self.itemCount = function () {
            return self.element().childNodes.length;
        };
        self.item = function (index) {
            if (index >= 0 && index < self.element().childNodes.length) {
                return self.element().childNodes[index];
            }
        };
        self.clearItems = function () {
            for (var ii = self.element().childNodes.length; ii > 0; ii--) {
                self.removeItem(self.element().childNodes[ii]);
            }
        };
    })();
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.id !== "undefined" && args.id !== null) {
                self.id(args.id);
            }
            if (typeof args.class !== "undefined" && args.class !== null) {
                self.class(args.class);
            }
            if (typeof args.caption !== "undefined" && args.caption !== null) {
                self.text(args.caption);
            }     
        }
    })(args);
    self.html = function () {
        return self.element();
    };
    return self;
};
/************************************************** image.js **************************************************/
System.control = System.control || {};
System.control.html = System.control.html || {};
System.control.html.Image = function (args) {
    var self = System.type.extend(System.control.html.Base, { element: "img" });
    (function () {
        var _value = "component";
        self.type = function () {
            return _value;
        };
    })();
    (function () {
        var setSource = function (value) {
            self.element().src = value;
        };
        var getSource = function () {
            return self.element().src;
        };
        self.source = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setSource(value);
            }
            else {
                return getSource();
            }
        };
    })();
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.id !== "undefined" && args.id !== null) {
                self.id(args.id);
            }
            if (typeof args.class !== "undefined" && args.class !== null) {
                self.class(args.class);
            }
            if (typeof args.source !== "undefined" && args.source !== null) {
                self.source(args.source);
            }
        }
    })(args);
    self.html = function () {
        return self.element();
    };
    return self;
};
/************************************************** video.js **************************************************/
System.control = System.control || {};
System.control.html = System.control.html || {};
System.control.html.Video = function (args) {
    var self = System.type.extend(System.control.html.Base, { element: "video" });
    (function () {
        self.source = function (value) {
            var sources = self.element().getElementsByTagName("source");
            sources[0].src = value;
        };
    })();
    (function () {
        self.type = function (value) {
            var sources = self.element().getElementsByTagName("source");
        };
    })();
    (function (args) {
        var source = document.createElement("source");
        self.element().appendChild(source);
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.id !== "undefined" && args.id !== null) {
                self.id(args.id);
            }
            if (typeof args.class !== "undefined" && args.class !== null) {
                self.class(args.class);
            }
            if (typeof args.text !== "undefined" && args.text !== null) {
                self.text(args.text);
            }
        }
        self.element().autoplay = true;
    })(args);
    self.html = function () {
        return self.element();
    };
    self.load = function () {
        self.element().load();
    };
    self.play = function () {
        self.element().play();
    };
    self.pause = function () {
        self.element().pause();
    };
    return self;
};
/************************************************** input.js **************************************************/
System.control = System.control || {};
System.control.html = System.control.html || {};
System.control.html.Input = function (args) {
    var self =System.type.extend(System.control.html.Base, { element: "input" });    
    (function () {
        var setValue = function (value) {
            self.element().value = value;
        };
        var getValue = function () {
            return self.element().value;
        };
        self.value = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setValue(value);
            }
            else {
                return getValue();
            }
        };
    })();
    (function () {
        var setType = function (value) {
            self.element().type = value;
        };
        var getType = function () {
            return self.element().type;
        };
        self.type = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setType(value);
            }
            else {
                return getType();
            }
        };
    })();
    (function () {
        var setMaxLength = function (value) {
            self.element().maxLength = value;
        };
        var getMaxLength = function () {
            return self.element().maxLength;
        };
        self.maxlength = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setMaxLength(value);
            }
            else {
                return getMaxLength();
            }
        };
    })();
    (function () {
        var setReadOnly = function (value) {            
            self.element().readOnly = value;
        };
        var getReadOnly = function () {
            return self.element().readOnly;
        };
        self.readOnly = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setReadOnly(value);
            }
            else {
                return getReadOnly();
            }
        };
    })();
    (function () {
        var setAutoComplete = function (value) {
            self.element().autocomplete = value;
        };
        var getAutoComplete = function () {
            return self.element().autocomplete;
        };
        self.autoComplete = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setAutoComplete(value);
            }
            else {
                return getAutoComplete();
            }
        };
    })();
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.id !== "undefined" && args.id !== null) {
                self.id(args.id);
            }
            if (typeof args.class !== "undefined" && args.class !== null) {
                self.class(args.class);
            }
            if (typeof args.value !== "undefined" && args.value !== null) {
                self.value(args.value);
            }
            if (typeof args.type !== "undefined" && args.type !== null) {
                self.type(args.type);
            }
            if (typeof args.maxlength !== "undefined" && args.maxlength !== null) {
                self.maxlength(args.maxlength);
            }
            if (typeof args.readOnly !== "undefined" && args.readOnly !== null) {
                self.readOnly(args.readOnly);
            }
            if (typeof args.autoComplete !== "undefined" && args.autoComplete !== null) {
                self.autoComplete(args.autoComplete);
            }
        }
    })(args);
    self.html = function () {
        return self.element();
    };
    return self;
};
/************************************************** base.js **************************************************/
System.control = System.control || {};
System.control.Base = function (args) {
    var self = System.type.extend(System.control.Component, args);
    (function () {
        var _value = "control";
        self.type = function () {
            return _value;
        };
    })();
    (function () {
        var _value = {};
        self.addEventHandler = function (event, handler) {
            _value[event] = handler;
        };
        self.removeEventHandler = function (event) {
            delete _value[event];
        };
        self.hasHandlerFor = function (event) {
            var result = false;
            for (var key in _value) {
                if (key === event) {
                    result = true;
                    break;
                }
            }
            return result;
        };
        self.events = function () {
            return _value;
        };
        self.handler = function (event) {
            return _value[event];
        };
    })();
    (function () {
        var _value = {};
        self.addNavigation = function (event, controlId) {
            _value[event] = controlId;
        };
        self.removeNavigation = function (event) {
            delete _value[event];
        };
        self.hasNavigationFor = function (event) {
            var result = false;
            for (var key in _value) {
                if (key === event) {
                    result = true;
                    break;
                }
            }
            return result;
        };
        self.navigation = function () {
            return _value;
        };
        self.next = function (event) {
            var page = System.application.currentPage();
            var controlId = _value[event];
            if (page.hasControls() && page.hasControl(controlId)) {
                return page.control(controlId);
            }
        };
    })();
    (function (args) {
        self.addClass("control");
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.events !== "undefined" && args.events !== null) {
                for (var event in args.events) {
                    self.addEventHandler(event, args.events[event]);
                }
            }
            if (typeof args.navigation !== "undefined" && args.navigation !== null) {
                for (var key in args.navigation) {
                    self.addNavigation(key, args.navigation[key]);
                }
            }
        }
    })(args);
    self.focus = function () {
        self.addClass("focused");
        return true;
    };
    self.unfocus = function () {
        self.removeClass("focused");
        return true;
    };
    return self;
};
/************************************************** container.js **************************************************/
System.control = System.control || {};
System.control.Container = function (args) {
    var self = System.type.extend(System.control.html.Div, args);
    (function () {
        var _value = "container";
        self.type = function () {
            return _value;
        };
    })();
    (function () {
        var _value = [];
        self.addItem = function (value) {
            _value.push(value);
            self.base.addItem(value);
        };
        self.removeItem = function (value) {
            _value.splice(_value.indexOf(value), 1);
            self.base.removeItem(value);
        };
        self.hasItems = function () {
            return (_value.length > 0);
        };
        self.itemCount = function () {
            return _value.length;
        };
        self.item = function (index) {
            return _value[index];
        };
        self.clearItems = function () {
            for (var ii = _value.length; ii > 0; ii--) {
                self.removeItem(_value[ii - 1]);
            }
        };
    })();
    (function (args) {
        self.addClass("container");
    })(args);
    self.current = function () {
        return null;
    };
    self.focus = function () {
    };
    return self;
};
/************************************************** tile.js **************************************************/
System.control = System.control || {};
System.control.Tile = function (args) {
    var self =System.type.extend(System.control.Base, args);
    self.addClass("tile");
    return self;
};
/************************************************** imagetile.js **************************************************/
System.control = System.control || {};
System.control.ImageTile = function (args) {
    var self = System.type.extend(System.control.Base, args);
    var _image = new System.control.html.Image();
    var _panel = new System.control.Panel();
    var _text = new System.control.Label();
    var _text1 = new System.control.Label();
    var _text2 = new System.control.Label();
    var tagText;
    (function () {
        self.source = function (value) {
            _image.source(value);
        };
    })();
    (function () {
        var setText = function (value) {
            _text.text(value);
        }
        var getText = function () {
            return _text.text();
        }
        self.text = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setText(value);
            }
            else {
                return getText();
            }
        }
    })();
    (function () {
        var _value;
        var setTag = function (value) {
            _value = value;
        };
        var getTag = function () {
            return _value;
        };
        self.tag = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setTag(value);
            }
            else {
                return getTag();
            }
        };
    })();
    (function (args) {
        self.addClass("tile");
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.source !== "undefined" && args.source !== null) {
                self.source(args.source);
            }
            if (typeof args.text !== "undefined" && args.text !== null) {
                self.text(args.text);
                _panel.addItem(_text);
                self.addItem(_panel);
            }
            if (typeof args.webPID !== "undefined" && args.webPID !== null) {
                self.webPID(args.webPID);
            }
            if (typeof args.tag !== "undefined" && args.tag !== null) {
                self.tag(args.tag);
                tagText = args.tag.split(':');
                _text1.text(tagText[0] + "<br/>");
                 _text2.text(tagText[1]); 
              
            }
        }
        self.addItem(_image);
        if (typeof args.tag !== "undefined" && args.tag !== null) {
            self.addItem(_text1);
            self.addItem(_text2);
        }
              
    })(args);
    return self;
};
/************************************************** logo.js **************************************************/
System.control = System.control || {};
System.control.Logo = function (args) {
    var self = System.type.extend(System.control.html.Image, args);
        (function () {
            var _value = "component";
            self.type = function () {
                return _value;
            };
        })();
    (function (args) {
        self.source( "images/logo-new.png" );
        
    })(args);
    return self;
};
/************************************************** list.js **************************************************/
System.control = System.control || {};
System.control.List = function (args) {
    var self = System.type.extend(System.control.Container, args);
    self.addClass("list");
    (function () {
        var _value = "list";
        self.type = function () {
            return _value;
        };
    })();
    (function () {
        var _value = [];
        self.addItem = function (value) {
            _value.push(value);
            if (self.base.itemCount() < self.visibleItemCount()) {
                value.addClass("visible");
                value.addClass("item-" + self.base.itemCount());
            } else {
                value.addClass("invisible");
            }
            self.base.addItem(value);
        };
        self.removeItem = function (value) {
            _value.splice(_value.indexOf(value), 1);
            self.base.removeItem(value);
        };
        self.clearItems = function () {
            for (var ii = _value.length; ii > 0; ii--) {
                self.removeItem(_value[ii - 1]);
            }
        };
        self.hasItems = function () {
            return (_value.length > 0);
        };
        self.itemCount = function () {
            return _value.length;
        };
        self.item = function (index) {
            return _value[index];
        };
    })();
    (function () {
        var _value = 3;
        var setVisibleItemCount = function (value) {
            _value = value;
        };
        var getVisibleItemCount = function () {
            return _value;
        };
        self.visibleItemCount = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setVisibleItemCount(value);
            } else {
                return getVisibleItemCount();
            }
        };
    })();
    (function () {
        var _value = "vertical";
        var setOrientation = function (value) {
            _value = value;
            self.addClass(value);
        };
        var getOrientation = function () {
            return _value;
        };
        self.orientation = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setOrientation(value);
            } else {
                return getOrientation();
            }
        };
    })();
    (function () {
        var _value = false;
        var setCircular = function (value) {
            _value = value;
            if (value == true) {
                self.addClass("circular");
            } else {
                self.removeClass("circular");
            }
        };
        var getCircular = function () {
            return _value;
        };
        self.circular = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setCircular(value);
            } else {
                return getCircular();
            }
        };
    })();
    (function () {
        var _value = 0;
        var setCurrentIndex = function (value) {
            _value = value;
        };
        var getCurrentIndex = function () {
            return _value;
        };
        self.currentIndex = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setCurrentIndex(value);
            } else {
                return getCurrentIndex();
            }
        };
    })();
    (function () {
        var _value = "vertical";
        var setOrientation = function (value) {
            _value = value;
            self.addClass(value);
        };
        var getOrientation = function () {
            return _value;
        };
        self.orientation = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setOrientation(value);
            } else {
                return getOrientation();
            }
        };
    })();
    (function () {
        var _value = true;
        var setUpdateLeftIndex = function (value) {
            _value = value;
        };
        var getUpdateLeftIndex = function () {
            return _value;
        };
        self.updateLeftIndex = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setUpdateLeftIndex(value);
            } else {
                return getUpdateLeftIndex();
            }
        };
    })();
    (function () {
        var _value = true;
        var setUpdateRightIndex = function (value) {
            _value = value;
        };
        var getUpdateRightIndex = function () {
            return _value;
        };
        self.updateRightIndex = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setUpdateRightIndex(value);
            } else {
                return getUpdateRightIndex();
            }
        };
    })();
    (function () {
        var _currentIndex = 0;
        var hasIndexChanged = function (index) {
            return (_currentIndex !== index);
        };
        var clearVisibility = function () {
            for (var ii = 0; ii < self.itemCount(); ii++) {
                var item = self.item(ii);
                item.removeClass("visible");
                item.addClass("invisible");
                item.class(item.class().replace(/item-[0-9]+/g, ""));
            }
        };
        var setVisibility = function (indices) {
            for (var ii = 0; ii < indices.length; ii++) {
                self.item(indices[ii]).removeClass("invisible");
                self.item(indices[ii]).addClass("visible");
                self.item(indices[ii]).addClass("item-" + ii);
            }
        };
        var updateUICircular = function () {
            var max = self.itemCount();
            var visible = self.visibleItemCount();
            var halfMeasure = parseInt(visible / 2);
            var indices = [];
            clearVisibility();
            var start = ((_currentIndex - halfMeasure) < 0)
                ? (max - (halfMeasure - _currentIndex))
                : (_currentIndex - halfMeasure);
            for (var ii = 0; ii < visible; ii++) {
                indices.push((start + ii) % max);
            }
            setVisibility(indices);
        };
        var updateUILinear = function () {
            var max = self.itemCount();
            var visible = self.visibleItemCount();
            var halfMeasure = parseInt(visible / 2);
            var indices = [];
            clearVisibility();
            var start = 0;
            if (((_currentIndex - halfMeasure) < 0) || max === visible) {
                start = 0;
            } else if ((_currentIndex + halfMeasure) < max) {
                start = _currentIndex - halfMeasure;
            }
            else {
                start = _currentIndex - halfMeasure - (halfMeasure - (max - _currentIndex));
            }
            for (var ii = 0; ii < visible; ii++) {
                var value = start + ii;
                if (value < max) {
                    indices.push(value);
                }
            }
            setVisibility(indices);
        };
        var updateUI = function () {
            if (self.circular()) {
                updateUICircular();
            } else {
                updateUILinear();
            }
        };
        self.up = function () {
            var result = false;
            if (self.orientation() === "vertical") {
                var index = _currentIndex;
                self.previous();
                if (hasIndexChanged(index)) {
                    result = true;
                }
            }
            if (self.id() === "review-list") {
                if (_currentIndex !== 0) {
                    self.item(_currentIndex - 1).removeClass('visible item-0');
                    self.item(_currentIndex - 1).addClass('invisible');
                    self.item(_currentIndex).removeClass('item-1');
                    self.item(_currentIndex).addClass('item-0');
                    self.item(_currentIndex + 1).removeClass('invisible');
                    self.item(_currentIndex + 1).addClass('visible item-1');
                }
                result = true;
            }
            return result;
        };
        self.down = function () {
            var result = false;
            if (self.orientation() === "vertical") {
                var index = _currentIndex;
                self.next();
                if (hasIndexChanged(index)) {
                    result = true;
                }
            }
            return result;
        };
        self.left = function () {
            var result = false;
            if (self.orientation() === "horizontal") {
                var index = _currentIndex;
                self.previous();
                if (hasIndexChanged(index)) {
                    result = true;
                }
            }
            return result;
        };
        self.right = function () {
            var result = false;
            if (self.orientation() === "horizontal") {
                var index = _currentIndex;
                self.next();
                if (hasIndexChanged(index)) {
                    result = true;
                }
            }
            return result;
        };
        self.current = function () {
            var result = null;
            if (self.itemCount() > 0) {
                result = self.item(_currentIndex);
            }
            return result;
        };
        self.setCurrentIndex = function (index) {
            _currentIndex = index;
        };
        self.previous = function () {
            var count = self.itemCount();
            if (count > 0) {
                self.item(_currentIndex).removeClass("focused");
                if (self.circular()) {
                    _currentIndex = (_currentIndex > 0) ? (_currentIndex - 1) : (count - 1);
                } else {
                    var _index = _currentIndex, _flag = false;
                    for (var ii = _currentIndex; ii > 0; ii--) {
                        _index = (_index > 0) ? (_index - 1) : _index;
                        if (self.item(_index).class().indexOf("unselectable") == -1) {
                            _flag = true;
                            break;
                        }
                    }
                    if (_flag) {
                        _currentIndex = _index;
                    }
                }
                updateUI();
                self.currentIndex(_currentIndex);
                self.item(_currentIndex).addClass("focused");
                if (self.id() == "suggestpnl_2") {
                    var max = self.itemCount();
                    for (var ii = _currentIndex; ii < max; ii++) {
                        if (document.getElementById('imgDownarrow') != null && self.item(ii).class().match('invisible'))
                            document.getElementById('imgDownarrow').className = '';
                    }
                }
            }
        };
        self.next = function () {
            if (self.itemCount() > 0) {
                self.item(_currentIndex).removeClass("focused");
                if (self.circular()) {
                    _currentIndex = (_currentIndex + 1) % self.itemCount();
                } else {
                    var _index = _currentIndex, _flag = false;
                    for (var ii = _currentIndex; ii < self.itemCount(); ii++) {
                        _index = (_index < self.itemCount() - 1) ? (_index + 1) : _index;
                        if (self.item(_index).class().indexOf("unselectable") == -1) {
                            _flag = true;
                            break;
                        }
                    }
                    if (_flag) {
                        _currentIndex = _index;
                    }
                }
                updateUI();
                self.currentIndex(_currentIndex);
                self.item(_currentIndex).addClass("focused");
                if (self.id() == "suggestpnl_2") {
                    var max = self.itemCount();
                    for (var ii = _currentIndex; ii >= 0; ii--) {
                        if (document.getElementById('imgUparrow') != null && self.item(ii).class().match('invisible'))
                            document.getElementById('imgUparrow').className='';
                    }
                }
            }
        };
        self.refresh = function () {
            if (self.itemCount() > 0) {
                updateUI();
            }
        };
    })();
    (function () {
        var _value = {};
        self.addNavigation = function (event, controlId) {
            _value[event] = controlId;
        };
        self.removeNavigation = function (event) {
            delete _value[event];
        };
        self.hasNavigationFor = function (event) {
            var result = false;
            for (var key in _value) {
                if (key === event) {
                    result = true;
                    break;
                }
            }
            return result;
        };
        self.navigation = function () {
            return _value;
        };
    })();
    (function () {
        var _value = {};
        self.addEventHandler = function (event, handler) {
            _value[event] = handler;
        };
        self.hasHandlerFor = function (event) {
            var result = false;
            for (var key in _value) {
                if (key === event) {
                    result = true;
                    break;
                }
            }
            return result;
        };
        self.events = function () {
            return _value;
        };
        self.handler = function (event) {
            return _value[event];
        };
    })();
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.visibleItemCount !== "undefined" && args.visibleItemCount !== null) {
                self.visibleItemCount(args.visibleItemCount);
            }
            if (typeof args.orientation !== "undefined" && args.orientation !== null) {
                self.orientation(args.orientation);
            }
            if (typeof args.circular !== "undefined" && args.circular !== null) {
                self.circular(args.circular);
            }
            if (typeof args.navigation !== "undefined" && args.navigation !== null) {
                for (var key in args.navigation) {
                    self.addNavigation(key, args.navigation[key]);
                }
            }
            if (typeof args.updateLeftIndex !== "undefined" && args.updateLeftIndex !== null) {
                self.updateLeftIndex(args.updateLeftIndex);
            }
            if (typeof args.updateRightIndex !== "undefined" && args.updateRightIndex !== null) {
                self.updateRightIndex(args.updateRightIndex);
            }
        }
    })(args);
    self.focus = function () {
        var result = false;
        if (self.current() != null) {
            var control = self.current();
            result = control.focus();
        }
        return result;
    };
    self.unfocus = function () {
        var result = false;
        if (self.current() != null) {
            var control = self.current();
            result = control.unfocus();
        }
        return result;
    };
    return self;
};
/************************************************** video.js **************************************************/
System.control = System.control || {};
System.control.Video = function (args) {
    var self = new System.control.Container(args);
    var _video = new System.control.html.Video({ id: "video" });
    _imgFullScreen = new System.control.ImageTile({
        id: "imgFS",
        class: "fullscreenvideo",
        source: "images/expand.png",
        events: {
            click: function (sender) {
                var _class = self.class();
                if (_class.match('video-fs')) {
                    self.removeClass('video-fs');
                }
                else {
                    self.addClass('video-fs');
                }
            } /*,
            down: function () {
                self.removeClass('video-active');
            }*/
        },
        navigation: { left: "menu", up: "" }
    });
    _label = new System.control.Label({
        id: "orNo",
        class: "overrelay"
    });
    _lblDisc = new System.control.Label({
        id: "lblDisc",
        class: "disclaimer"
    });
    (function () {
        self.source = function (value) {
            _video.source(value);
        };
    })();
    self.play = function () {
        _video.play();
    };
    self.pause = function () {
        _video.pause();
    };
    (function () {
        self.text = function (value) {
            _label.text(value);
        };
    })();
    (function () {
        self.disclaimer = function (value) {
            _lblDisc.text(value);
        };
    })();
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.source !== "undefined" && args.source !== null) {
                self.source(args.source);
            }
            if (typeof args.type !== "undefined" && args.type !== null) {
            }
            if (typeof args.text !== "undefined" && args.text !== null) {
                self.text(args.text);
            }
            if (typeof args.disclaimer !== "undefined" && args.disclaimer !== null) {
                self.disclaimer(args.disclaimer);
            }
        }
        self.addItem(_video);
        self.addItem(_imgFullScreen);
        self.addItem(_label);
        self.addItem(_lblDisc);
    })(args);
    return self;
};
/************************************************** button.js **************************************************/
System.control = System.control || {};
System.control.Button = function (args) {
    var self = System.type.extend(System.control.Base, args);
        
    var _text = new System.control.Label();
    (function () {
        var setText = function (value) {
            _text.text(value);
        }
        var getText = function () {
            return _text.text();
        }
        self.text = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setText(value);
            }
            else {
                return getText();
            }
        }
    })();
    (function () {
        var _value = "";
        var setTag = function (value) {
            _value = value;
        }
        var getTag = function () {
            return _value;
        }
        self.tag = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setTag(value);
            }
            else {
                return getTag();
            }
        }
    })();
    (function (args) {
        self.addClass("button");
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.text !== "undefined" && args.text !== null) {
                self.text(args.text);
            }
            if (typeof args.tag !== "undefined" && args.tag !== null) {
                self.tag(args.tag);
            }
        }
        self.addItem(_text);
    })(args);
    return self;
};
/************************************************** panel.js **************************************************/
System.control = System.control || {};
System.control.Panel = function (args) {
    var self =System.type.extend(System.control.Container, args);
    self.addClass("panel");
    self.focus = function () {
        var result = false;
        if (self.current() != null) {
            var control = self.current();
            result = control.focus();
        }
        return result;
    };
    self.unfocus = function () {
        var result = false;
        if (self.current() != null) {
            var control = self.current();
            result = control.unfocus();
        }
        return result;
    };
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.id !== "undefined" && args.id !== null) {
                self.id(args.id);
            }
            if (typeof args.text !== "undefined" && args.text !== null) {
                self.text(args.text);
            }
            if (typeof args.class !== "undefined" && args.class !== null) {
                self.class(args.class);
            }
        }
    })(args);
    return self;
};
/************************************************** label.js **************************************************/
System.control = System.control || {};
System.control.Label = function (args) {
    var self = System.type.extend(System.control.Component, args);
    self.addClass("label");
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.id !== "undefined" && args.id !== null) {
                self.id(args.id);
            }
            if (typeof args.text !== "undefined" && args.text !== null) {
                self.text(args.text);
            }
            if (typeof args.class !== "undefined" && args.class !== null) {
                self.class(args.class);
            }
        }
    })(args);
    return self;
};
/************************************************** dropdown.js **************************************************/
System.control = System.control || {};
System.control.Dropdown = function (args) {
    var self = System.type.extend(System.control.Base, args);
    self.defaultdiv = new System.control.Button({ class: "selected-item" });
    self.defaultdiv.removeClass("button");
    self.displayText = new System.control.Label({ class: "selected-text" });
    self.list_div = new System.control.Panel({ id: "dropdown-div", class: "invisible" });
    self.list_div.visible(false);
    (function () {
        var _value = "";
        var setSelectedValue = function (value) {
            _value = value;
        }
        var getSelectedValue = function () {
            return _value;
        }
        self.selectedValue = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setSelectedValue(value);
            }
            else {
                return getSelectedValue();
            }
        }
    })();
    self.selectedText = function (value) {
        self.displayText.text(value);
        self.defaultdiv.addItem(self.displayText);
        self.defaultdiv.addItem(new System.control.Label({ class: "dropdown-arrow" }));
    };
    self.list = new System.control.List({
        id: "dropdown-list",
        orientation: "vertical",
        linear: true,
        visibleItemCount: 5,
        navigation: { down: "", up: "", left: "", right: "" }
    });
    self.items = function (value) {
        for (var ii = 0; ii < value.length; ii++) {
            if (typeof value[ii].name != "undefined" && value[ii].name != null) {
                var _class, _name = value[ii].name();
                self.list.addItem(new System.control.Dropdownitem({
                    id: "item-" + (ii + 1),
                    class: _class,
                    label: _name,
                    value: value[ii].code(),
                    type: value[ii].type(),
                    events: {
                        click: function () {
                            self.page = new System.application.currentPage();
                            self.defaultdiv.removeClass('invisible');
                            self.defaultdiv.visible(true);
                            self.list_div.addClass('invisible');
                            self.list_div.visible(false);
                        }
                    }
                }));
            }
        }
    };
    (function (args) {
        self.addClass("dropdown");
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.selected !== "undefined" && args.selected !== null) {
                self.selectedText(args.selected);
            }
            if (typeof args.items !== "undefined" && args.items !== null) {
                self.items(args.items);
            }
            else if (typeof args.quantity !== "undefined" && args.quantity !== null) {
                self.quantity(args.quantity);
            }
            self.addItem(self.defaultdiv);
            self.list_div.addItem(self.list);
            self.addItem(self.list_div);
        }
    })(args);
    return self;
};
/************************************************** dropdownitem.js **************************************************/
System.control = System.control || {};
System.control.Dropdownitem = function (args) {
    var self = System.type.extend(System.control.Base, args);
    var _text = new System.control.Label();
    (function () {
        var _value = "";
        var setLabel = function (value) {
            _value = value;
            _text.text(value);
        }
        var getLabel = function () {
            return _value;
        }
        self.label = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setLabel(value);
            }
            else {
                return getLabel();
            }
        }
    })();
    (function () {
        var _value = "";
        var setValue = function (value) {
            _value = value;
        }
        var getValue = function () {
            return _value;
        }
        self.value = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setValue(value);
            }
            else {
                return getValue();
            }
        }
    })();
    (function () {
        var _value = "";
        var setType = function (value) {
            _value = value;
        }
        var getType = function () {
            return _value;
        }
        self.type = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setType(value);
            }
            else {
                return getType();
            }
        }
    })();
    (function (args) {
        self.addClass("product");
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.label !== "undefined" && args.label !== null) {
                self.label(args.label);
                self.addItem(_text);
            }
            if (typeof args.value !== "undefined" && args.value !== null) {
                self.value(args.value);
            }
            if (typeof args.type !== "undefined" && args.type !== null) {
                self.type(args.type);
            }
            if (typeof args.so !== "undefined" && args.so !== null) {
                self.so(args.so);
            }
            if (typeof args.webID !== "undefined" && args.webID !== null) {
                self.webID(args.webID);
            }
            if (typeof args.sku !== "undefined" && args.sku !== null) {
                self.sku(args.sku);
            }
        }
    })(args);
    return self;
};
/************************************************** panel.js **************************************************/
System.control = System.control || {};
System.control.Panel = function (args) {
    var self =System.type.extend(System.control.Container, args);
    self.addClass("panel");
    self.focus = function () {
        var result = false;
        if (self.current() != null) {
            var control = self.current();
            result = control.focus();
        }
        return result;
    };
    self.unfocus = function () {
        var result = false;
        if (self.current() != null) {
            var control = self.current();
            result = control.unfocus();
        }
        return result;
    };
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.id !== "undefined" && args.id !== null) {
                self.id(args.id);
            }
            if (typeof args.text !== "undefined" && args.text !== null) {
                self.text(args.text);
            }
            if (typeof args.class !== "undefined" && args.class !== null) {
                self.class(args.class);
            }
        }
    })(args);
    return self;
};
/************************************************** grid.js **************************************************/
System.control = System.control || {};
System.control.Grid = function (args) {
    var self = System.type.extend(System.control.Container, args);
    self.addClass("grid");
    (function () {
        var _value = "grid";
        self.type = function () {
            return _value;
        };
    })();
    (function () {
        self.addItem = function (value) {
            value.addClass("visible");
            value.addClass("item-" + self.base.itemCount() % self.columns());
            self.base.addItem(value);
        };
        self.removeItem = function (value) {
            self.base.removeItem(value);
        };
        self.hasItems = function () {
            self.base.hasItems();
        };
        self.itemCount = function () {
            return self.base.itemCount();
        };
        self.item = function (index) {
            return self.base.item(index);
        };
    })();
    (function () {
        var _value = 4;
        var setColumn = function (value) {
            _value = value;
        };
        var getColumn = function () {
            return _value;
        };
        self.columns = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setColumn(value);
            } else {
                return getColumn();
            }
        };
    })();
    (function () {
        var _value = 0;
        var setCurrentIndex = function (value) {
            _value = value;
        };
        var getCurrentIndex = function () {
            return _value;
        };
        self.currentIndex = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setCurrentIndex(value);
            } else {
                return getCurrentIndex();
            }
        };
    })();
    (function () {
        var _currentIndex = 0;
        var hasIndexChanged = function (index) {
            return (_currentIndex !== index);
        };
        self.up = function () {
            var result = false;
            if (self.id() === "num" && _currentIndex === 11) {
                column = 2;
                var index = _currentIndex;
                self.previous(column);
                if (hasIndexChanged(index)) {
                    result = true;
                }
            }
            else if (self.id() === "searchNum" && (_currentIndex === 38 || _currentIndex === 39 || _currentIndex === 40)) {
                if (_currentIndex === 38)
                    column = 9;
                else if (_currentIndex === 39)
                    column = 5;
                else if (_currentIndex === 40)
                    column = 2;
                var index = _currentIndex;
                self.previous(column);
                if (hasIndexChanged(index)) {
                    result = true;
                }
            }
            else if (parseInt(_currentIndex / self.columns()) !== 0) {
                var index = _currentIndex;
                self.previous(self.columns());
                if (hasIndexChanged(index)) {
                    result = true;
                }
            }
            return result;
        };
        self.down = function () {
            var result = false;
            var max = self.itemCount();
            var column = self.columns();
            if (self.id() === "num" && (_currentIndex === 6 || _currentIndex === 7 || _currentIndex === 8 || _currentIndex === 9)) {
                if (_currentIndex === 6)
                    column = 4;
                else if (_currentIndex === 7)
                    column = 3;
                if (_currentIndex === 8)
                    column = 3;
                else if (_currentIndex === 9)
                    column = 2;
                var index = _currentIndex;
                self.next(column);
                if (hasIndexChanged(index)) {
                    result = true;
                }
            }
            else if (self.id() === "searchNum" && ((_currentIndex >= 30 && _currentIndex <= 38) || _currentIndex == 29)) {
                if (_currentIndex === 29)
                    column = 9;
                else if (_currentIndex === 30)
                    column = 9;
                else if (_currentIndex === 31)
                    column = 8;
                else if (_currentIndex === 32)
                    column = 7;
                else if (_currentIndex === 33)
                    column = 6;
                else if (_currentIndex === 34)
                    column = 5;
                else if (_currentIndex === 35)
                    column = 4;
                else if (_currentIndex === 36)
                    column = 3;
                else if (_currentIndex === 37)
                    column = 2;
                else if (_currentIndex === 38)
                    column = 2;
                var index = _currentIndex;
                self.next(column);
                if (hasIndexChanged(index)) {
                    result = true;
                }
            }
            else if (self.id() === "grdSF") {
                for (var i = 1; i < 5; i++) {
                    if (_currentIndex == self.itemCount() - i) {
                        column = i - 1;
                    }
                }
                var index = _currentIndex;
                self.next(column);
                if (hasIndexChanged(index)) {
                    result = true;
                }
            }
            else if (parseInt(((max - 1) - _currentIndex) / column) !== 0) {
                var index = _currentIndex;
                self.next(column);
                if (hasIndexChanged(index)) {
                    result = true;
                }
            }
            return result;
        };
        self.left = function () {
            var result = false;
            if (self.id() === "searchNum" && (_currentIndex === 39 || _currentIndex === 40)) {
                if (_currentIndex !== 39) {
                    var index = _currentIndex;
                    self.previous(1);
                    if (hasIndexChanged(index)) {
                        result = true;
                    }
                }
            }
            else if ((self.id() === "num" && _currentIndex - 1 > -1) || ((_currentIndex % self.columns()) !== 0)) {
                var index = _currentIndex;
                self.previous(1);
                if (hasIndexChanged(index)) {
                    result = true;
                }
            }
            return result;
        };
        self.right = function () {
            var result = false;
            var max = self.itemCount();
            if (self.id() === "num" && _currentIndex + 1 < max) {
                var index = _currentIndex;
                self.next(1);
                if (hasIndexChanged(index)) {
                    result = true;
                }
            }
            else if (self.id() === "searchNum" && _currentIndex === 39) {
                var index = _currentIndex;
                self.next(1);
                if (hasIndexChanged(index)) {
                    result = true;
                }
            }
            else if (self.id() === "imgTS") {
                _currentIndex = 0;
                var index = _currentIndex;
                self.next(0);
                if (hasIndexChanged(index)) {
                    result = true;
                }
            }
            else if ((self.id() === "grdSF" || self.id() === "product-matrixlist") && _currentIndex == self.itemCount() - 1) {
                var index = _currentIndex;
                self.next(0);
                if (hasIndexChanged(index)) {
                    result = true;
                }
            }
            else if (self.id() !== "num" && ((_currentIndex + 1) % self.columns()) !== 0) {
                var index = _currentIndex;
                if (self.id() === "searchNum" && (_currentIndex === 38 || _currentIndex === 40)) {
                }
                else {
                    if (_currentIndex + 1 < max) {
                        self.next(1);
                    }
                }
                if (hasIndexChanged(index)) {
                    result = true;
                }
            }
            return result;
        };
        self.current = function () {
            var result = null;
            if (self.itemCount() > 0) {
                result = self.item(_currentIndex);
            }
            return result;
        };
        self.setCurrentIndex = function (index) {
            _currentIndex = index;
        };
        self.previous = function (value) {
            if (self.itemCount() > 0) {
                self.item(_currentIndex).removeClass("focused");
                _currentIndex = _currentIndex - value;
                self.currentIndex(_currentIndex);
                self.item(_currentIndex).addClass("focused");
            }
        };
        self.next = function (value) {
            if (self.itemCount() > 0) {
                self.item(_currentIndex).removeClass("focused");
                _currentIndex = _currentIndex + value;
                self.currentIndex(_currentIndex);
                self.item(_currentIndex).addClass("focused");
            }
        };
        self.focus = function () {
            var result = false;
            if (self.current() != null) {
                result = self.current().focus();
            }
            return result;
        };
    })();
    (function () {
        var _value = {};
        self.addNavigation = function (event, controlId) {
            _value[event] = controlId;
        };
        self.removeNavigation = function (event) {
            delete _value[event];
        };
        self.hasNavigationFor = function (event) {
            var result = false;
            for (var key in _value) {
                if (key === event) {
                    result = true;
                    break;
                }
            }
            return result;
        };
        self.navigation = function () {
            return _value;
        };
    })();
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.columns !== "undefined" && args.columns !== null) {
                self.columns(args.columns);
            }
            if (typeof args.navigation !== "undefined" && args.navigation !== null) {
                for (var key in args.navigation) {
                    self.addNavigation(key, args.navigation[key]);
                }
            }
        }
    })(args);
    self.focus = function () {
        var result = false;
        if (self.current() != null) {
            var control = self.current();
            result = control.focus();
        }
        return result;
    };
    self.unfocus = function () {
        var result = false;
        if (self.current() != null) {
            var control = self.current();
            result = control.unfocus();
        }
        return result;
    };
    return self;
};
/************************************************** review.js **************************************************/
System.control = System.control || {};
System.control.Reviewtile = function (args) {
    var self =System.type.extend(System.control.Tile, args);
    var _title = new System.control.Label({ class: "rvwTitle" });
    var _address = new System.control.Label({ class: "rvwAddress" });
    var _image = new System.control.ReviewStar({ class: "rvwRating" });
    var _comment = new System.control.Label({ id: "rvwComment", class: "rvwComment" });
    var _state = new System.control.Label({ class: "rvwAddress" });
    (function () {
        var _value = "";
        var setReviewId = function (value) {
            _value = value;
        }
        var getReviewId = function () {
            return _value;
        }
        self.reviewid = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setReviewId(value);
            }
            else {
                return getReviewId();
            }
        }
    })();
    (function () {
        self.title = function (value) {
            _title.text(value);
        };
    })();
    (function () {
        self.address = function (value) {
            _address.text(value);
        };
    })();
    (function () {
        self.rating = function (value) {
            _image.rating(value);
        };
    })();
    (function () {
        self.comment = function (value) {
            _comment.text(value);
        };
    })();
    (function () {
        self.state = function (value) {
            _state.text(value);
        };
    })();
    (function (args) {
        self.addClass("tile");
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.reviewid !== "undefined" && args.reviewid !== null) {
                self.reviewid(args.reviewid);
            }
            if (typeof args.title !== "undefined" && args.title !== null) {
                self.title(args.title);
            }
            if (typeof args.address !== "undefined" && args.address !== null) {
                self.address(args.address);
            }
            if (typeof args.rating !== "undefined" && args.rating !== null) {
                self.rating(args.rating);
            }
            if (typeof args.comment !== "undefined" && args.comment !== null) {
                self.comment(args.comment);
            }
            if (typeof args.state !== "undefined" && args.state !== null) {
                self.state(args.state);
            }
        }
        self.addItem(_title);
        self.addItem(_address);
        _image.removeClass("control");
        self.addItem(_image);
        self.addItem(_comment);
        self.addItem(_state);
    })(args);
    return self;
};
/************************************************** reviewstar.js **************************************************/
System.control = System.control || {};
System.control.ReviewStar = function (args) {
    var self = System.type.extend(System.control.Container, args);
    var _image = new System.control.html.Image();
    var _text = new System.control.Label();
    (function () {
        self.rating = function (value) {            
            _image.source(self.ratingImage(value));
        };
    })();
    (function () {
        self.text = function (value) {
            _text.text("(" + value + ")");            
        };
    })();
    self.ratingImage = function (value) {
        var _url = "";
        if ((value >= 0) && (value < 0.5)) {
            _url = "";
        }
        else if ((value >= 0.5) && (value < 1)) {
            _url = "images/star0.5.png";
        }
        else if ((value >= 1) && (value < 1.5)) {
            _url = "images/star1.png";
        }
        else if ((value >= 1.5) && (value < 2)) {
            _url = "images/star1.5.png";
        }
        else if ((value >= 2) && (value < 2.5)) {
            _url = "images/star2.0.png";
        }
        else if ((value >= 2.5) && (value < 3)) {
            _url = "images/star2.5.png";
        }
        else if ((value >= 3) && (value < 3.5)) {
            _url = "images/star3.0.png";
        }
        else if ((value >= 3.5) && (value < 4)) {
            _url = "images/star3.5.png";
        }
        else if ((value >= 4) && (value < 4.5)) {
            _url = "images/star4.png";
        }
        else if ((value >= 4.5) && (value < 5)) {
            _url = "images/star4.5.png";
        }
        else if ((value == 5)) {
            _url = "images/star5.png";
        }
        else {
            _url = "";
        }
        return _url;
    };
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.rating !== "undefined" && args.rating !== null) {
                self.rating(args.rating);
                self.addItem(_image);
            }
            if (typeof args.text !== "undefined" && args.text !== null) {
                self.text(parseFloat(args.text).toFixed(1));
                self.addItem(_text);
            }
        }        
    })(args);
    return self;
};
/************************************************** carousel.js **************************************************/
System.control = System.control || {};
System.control.Carousel = function (args) {
    var self = System.type.extend(System.control.Base, args);
    var imageContainer = System.type.extend(System.control.Tile, args);
    self.url = function (value) {
        return value;
    };
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            imageContainer.id("imagePanel");
            imageContainer.class("crsl-live");
            if (typeof args.source !== "undefined" && args.source !== null) {
                imageContainer.addItem(new System.control.html.Image({ id: "crslimg", source: args.source }));
            }
            self.addItem(imageContainer);
            if (typeof args.text !== "undefined" && args.text !== null) {
            }
            if (typeof args.title !== "undefined" && args.title !== null) {
                self.addItem(new System.control.Label({ id: "prodtitle", class: "item-desc", text: "$" + args.title }));
            }
            if (typeof args.description !== "undefined" && args.description !== null) {
                self.addItem(new System.control.Label({ id: "prodname", class: "item-desc", text: args.description }));
            }
            if (typeof args.webPid !== "undefined" && args.webPid !== null) {
                self.webPid(args.webPid);
            }
    }
})(args);
    return self;
};
/************************************************** carousellist.js **************************************************/
System.control = System.control || {};
System.control.Carousellist = function (args) {
    var self = System.type.extend(System.control.Base, args);
    self.class("carousel_inner");
    
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            var _crslitem;
            var _nowPlaying, _price, _name, _productDesc;
            if (args.productCount() !== "undefined" && args !== null) {
                self.addItem(new System.control.html.Image({ id: "imgUparrow", source: "images/arrow-up.png" }));
                var listcls;
                for (var i = 0; i < args.productCount(); i++) {
                    if (i == 0) {
                        listcls = "carouselLI prod-first";
                    }
                    else if (i == 1) {
                        listcls = "carouselLI prod-middle";
                    }
                    else if (i == 2) {
                        listcls = "carouselLI prod-last";
                    }
                    else {
                        listcls = "carouselLI invisible";
                    }
                    self.addItem(new System.control.Carousel({
                        id: "crslitem" + i,
                        class: listcls,
                        source: args.productItem(i).image().url(),
                        text: args.productItem(i).name(),
                        webPid: args.productItem(i).webPID(),
                        url: args.productItem(i).image().url(),
                        price: args.productItem(i).priceItem(0).value(),
                        name: args.productItem(i).name()
                    }));
                }
                self.addItem(_list);
                self.addItem(new System.control.html.Image({ id: "imgDownarrow", source: "images/arrow-down.png" }));
            }
        }
    })(args);
    return self;
};
/************************************************** loading.js **************************************************/
System.control = System.control || {};
System.control.Loading = function (args) {
    var self = System.type.extend(System.control.Component, args);
    self.addClass("loading");
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.id !== "undefined" && args.id !== null) {
                self.id(args.id);
            }
            if (typeof args.class !== "undefined" && args.class !== null) {
                self.class(args.class);
            }
            self.addItem(new System.control.Label({
                id: "lblLoading",
                class: "loadingMsg"//,
            }));
            self.addItem(new System.control.html.Image({ source: "images/loading-category-dark.gif" }));
        }
    })(args);
    return self;
};
/************************************************** popup.js **************************************************/
System.control = System.control || {};
System.control.Popup = function (args) {
    var self = System.type.extend(System.control.Container, args);
    self.addClass("popup");
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.id !== "undefined" && args.id !== null) {
                self.id(args.id);
            }
            if (typeof args.class !== "undefined" && args.class !== null) {
                self.class(args.class);
            }
            self.addItem(new System.control.Label({
                id: "txtmsg",
                class: "",
                text: "Please select 'OK' to contine..."
            }));
            self.btnOk = new System.control.Button({
                id: "btnPopup",
                class: "popup-button",
                text: "OK",
                events: {
                    click: function () {
                        console.log("Click Event!");
                    }
                }
            });
            self.addItem(self.btnOk);
            self.focus(self.btnOk);
        }
    })(args);
    return self;
};
/************************************************** input.js **************************************************/
System.control = System.control || {};
System.control.TextBox = function (args) {
    var self = System.type.extend(System.control.Base, args);
    var _input = new System.control.html.Input();
    (function () {
        var setValue = function (value) {
            _input.value(value);
        };
        var getValue = function () {
            return _input.value();
        };
        self.value = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setValue(value);
            } else {
                return getValue();
            }
        };
    })();
    self.textLength = function () {
        return _input.value.length;
    };
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.type !== "undefined" && args.type !== null) {
                _input.type(args.type);
            }
            if (typeof args.id !== "undefined" && args.id !== null) {
                _input.id(args.id);
            }
            if (typeof args.value !== "undefined" && args.value !== null) {
                _input.value(args.value);
            }
            if (typeof args.maxlength !== "undefined" && args.maxlength !== null) {
                _input.maxlength(args.maxlength);
            }
            if (typeof args.readOnly !== "undefined" && args.readOnly !== null) {
                _input.readOnly(args.readOnly);
            }
            if (typeof args.autoComplete !== "undefined" && args.autoComplete !== null) {
                _input.autoComplete(args.autoComplete);
            }
        }
        self.addItem(_input);
    })(args);
    return self;
};
/************************************************** component.js **************************************************/
System.control = System.control || {};
System.control.Component = function (args) {
    var self =System.type.extend(System.control.html.Div, args);
    (function () {
        var _value = "component";
        self.type = function () {
            return _value;
        };
    })();
    (function () {
        var _value = true;
        var setVisible = function (value) {
            _value = value;
            if (_value === false) {
                self.addClass("invisible");
                self.removeClass("visible");
            } else {
                self.addClass("visible");
                self.removeClass("invisible");
            }
        };
        var getVisible = function () {
            return _value;
        };
        self.visible = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setVisible(value);
            } else {
                return getVisible();
            }
        };
    })();
    (function (args) {
        self.visible(true);
        
    })(args);
    return self;
};
/************************************************** image.js **************************************************/
System.control = System.control || {};
System.control.Image = function (args) {
    var self =System.type.extend(System.control.Base, args);
    var _image = new System.control.html.Image();
    var _text = new System.control.Label();
    (function () {
        self.source = function (value) {
            _image.source(value);
        };
    })();
    (function () {
        self.text = function (value) {
            _text.text(value);
        };
    })();
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.source !== "undefined" && args.source !== null) {
                self.source(args.source);
            }
            if (typeof args.text !== "undefined" && args.text !== null) {
                self.text(args.text);
                self.addItem(_text);
            }
            if (typeof args.webPID !== "undefined" && args.webPID !== null) {
                self.webPID(args.webPID);
            }           
        }
        self.addItem(_image);        
    })(args);
    return self;
};
/************************************************** base.js **************************************************/
System.page = System.page || {};
System.page.Base = function (args) {
    var self = System.type.extend(System.control.html.Div, args);
    (function () {
        var _value;
        var setFocusedControl = function (value) {
            _value = value;
        };
        var getFocusedControl = function () {
            return _value;
        };
        self.focusedControl = function (value) {
            if (typeof value !== "undefined" && value != null) {
                setFocusedControl(value);
            } else {
                return getFocusedControl();
            }
        };
    })();
    (function () {
        var _value = {};
        var getControls = function () {
            return _value;
        };
        var setControls = function (args) {
            _value = {};
            for (var ii = 0; ii < args.length; ii++) {
                _value[args[ii].id()] = args[ii];
            }
        };
        self.controls = function () {
            return getControls();
        };
        self.control = function (controlId) {
            return _value[controlId];
        };
        self.addControl = function (value) {
            _value[value.id()] = value;
            self.addItem(value);
            self.addNavigationPoint(value);
        };
        self.removeControl = function (value) {
            self.removeItem(_value[value.id()]);
            delete _value[value.id()];
            self.removeNavigationPoint(value);
        };
        self.clearControls = function () {
            for (var key in _value) {
                self.removeControl(_value[key]);
            }
            self.clearNavigationMap();
        };
        self.hasControls = function () {
            var result = false;
            if (typeof _value !== "undefined" && _value != null) {
                result = true;
            }
            return result;
        };
        self.hasControl = function (controlId) {
            var result = false;
            for (var key in _value) {
                if (key === controlId) {
                    result = true;
                }
            }
            return result;
        };
    })();
    (function () {
        var _value = {};
        var getNavigationMap = function () {
            return _value;
        };
        var setNavigationMap = function (args) {
            _value = {};
            for (var ii = 0; ii < args.length; ii++) {
                _value[args[ii].id()] = args[ii];
            }
        };
        var addNavigationPoint = function (component) {
            if (component.type() === "container") {
                if (component.hasItems()) {
                    for (var ii = 0; ii < component.itemCount(); ii++) {
                        addNavigationPoint(component.item(ii));
                    }
                }
            } else {
                if (component.type() === "control" || component.type() === "list" || component.type() === "grid") {
                    _value[component.id()] = component;
                }
            }
        };
        self.navigationMap = function () {
            return getNavigationMap();
        };
        self.navigationPoint = function (controlId) {
            return _value[controlId];
        };
        self.addNavigationPoint = function (value) {
            addNavigationPoint(value);
        };
        self.removeNavigationPoint = function (value) {
            delete _value[value.id()];
        };
        self.clearNavigationMap = function () {
            for (var key in _value) {
                self.removeNavigationPoint(_value[key]);
            }
        };
        self.hasNavigationMap = function (value) {
            var result = false;
            if (typeof _value !== "undefined" && _value != null) {
                result = true;
            }
            return result;
        };
        self.hasNavigationPoint = function (controlId) {
            var result = false;
            for (var key in _value) {
                if (key === controlId) {
                    result = true;
                }
            }
            return result;
        };
    })();
    (function (args) {
        self.addClass("page");
    })(args);
    self.focus = function (control) {
        var focusedControl = self.focusedControl();
        if (control.focus()) {
            if (typeof focusedControl !== "undefined" && focusedControl !== null) {
                focusedControl.unfocus();
            }
            self.focusedControl(control);
        }
    };
    return self;
};
