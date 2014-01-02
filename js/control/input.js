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
System.control.TextBox = function (args) {
    var self =System.type.extend(System.control.Base, args);

    var _input = new System.control.html.Input();

    //Property: value
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

    //    //property: value
    //    (function () {

    //        self.maxlength = function (value) {
    //            _input.maxlength(value);
    //        };

    //    })();

    //Constructor
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