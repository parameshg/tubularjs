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

System.control.Grid = function (args) {

    var self = System.type.extend(System.control.Container, args);

    self.addClass("grid");

    // property: type
    (function () {
        var _value = "grid";

        self.type = function () {
            return _value;
        };
    })();

    // property: items
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

    // property: colums
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

    // navigation
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

    // .ctor
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