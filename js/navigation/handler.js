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

var System = System || {}; // #IGNORE

System.navigation = System.navigation || {};

System.navigation.handler = (function () {
    var self = {};

    //Property: navigation events
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

    //Property: handlers
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
//                        if (controls[key].type() == "list" && (event === "right" || event === "down") && _controlID !== "carouselItems" && _controlID !== "helpMain" && _controlID !== "channelMain" && _controlID !== "carouselChoice") {
//							controls[key].setCurrentIndex(_itemIndex);
//                        }
//			             else if (controls[key].type() == "list" && event === "left" && _controlID !== "review-list" && _controlID !== "helpMain" && _controlID !== "channelMain" && _controlID !== "carouselChoice") {
//                            _itemIndex = (controls[key].itemCount() === 1) ? 0 : controls[key].itemCount() - 1;
//                            controls[key].setCurrentIndex(_itemIndex);
                        //                        }
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
