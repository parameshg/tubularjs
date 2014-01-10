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

System.control = System.control || {};

System.control.List = function (args) {

    var self = System.type.extend(System.control.Container, args);

    self.addClass("list");

    // property: type
    (function () {
        var _value = "list";

        self.type = function () {
            return _value;
        };
    })();

    // property: items
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

    // property: visibleItemCount
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

    // property: orientation
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

    // property: circular
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

    // property: currentIndex
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

    // property: orientation
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

    // property: updateLeftIndex
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

    // property: updateRightIndex
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

    // navigation
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


    // property: custom navigation
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

    // property: custom events
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

    // .ctor
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

    // method: focus
    self.focus = function () {
        var result = false;

        if (self.current() != null) {
            var control = self.current();
            result = control.focus();
        }

        return result;
    };

    // method: unfocus
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