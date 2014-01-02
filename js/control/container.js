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

System.control.Container = function (args) {

    var self =System.type.extend(System.control.html.Div, args);

    //Property: type
    (function () {
        var _value = "container";

        self.type = function () {
            return _value;
        };
    })();

    //Property: items
    (function () {

        var _value = [];

        self.addItem = function (value) {
            _value.push(value);
            //self.super.addItem(value);
            self.base.addItem(value);
        };

        self.removeItem = function (value) {
            _value.splice(_value.indexOf(value), 1);
            //self.super.removeItem(value);
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

    //Constructor
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