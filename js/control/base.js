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

System.control.Base = function (args) {

    var self = System.type.extend(System.control.Component, args);

    // property: type
    (function () {
        var _value = "control";

        self.type = function () {
            return _value;
        };
    })();

    // property: events
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

    // property: navigation
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

    //Constructor
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

    //Method: focus
    self.focus = function () {
        self.addClass("focused");
        return true;
    };

    //Method: unfocus
    self.unfocus = function () {
        self.removeClass("focused");
        return true;
    };

    return self;
};