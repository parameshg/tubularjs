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

System.control.Dropdownitem = function (args) {

    var self = System.type.extend(System.control.Base, args);

    var _text = new System.control.Label();

    // property: label
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

    // property: value
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

    // property: type
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

    // .ctor
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