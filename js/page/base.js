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

System.page = System.page || {};

System.page.Base = function (args) {
    var self =System.type.extend(System.control.html.Div, args);

    //Property: focusedControl
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

    //Property: controls
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

            //Solely for navigation
            self.addNavigationPoint(value);
        };

        self.removeControl = function (value) {
            self.removeItem(_value[value.id()]);
            delete _value[value.id()];

            //Solely for navigation
            self.removeNavigationPoint(value);
        };

        self.clearControls = function () {
            for (var key in _value) {
                self.removeControl(_value[key]);
            }

            //Solely for navigation
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

    //property: navigationMap
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

    //Constructor
    (function (args) {

        self.addClass("page");

    })(args);

    //Method: focus
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