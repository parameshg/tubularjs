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

System.control.Panel = function (args) {

    var self =System.type.extend(System.control.Container, args);

    self.addClass("panel");

//    //Property: type
//    (function () {
//        var _value = "panel";

//        self.type = function () {
//            return _value;
//        };
//    })();

//    self.current = function () {
//        var result = null;

//        if (self.itemCount() > 0) {
//            result = self.item(_currentIndex);
//        }

//        return result;
//    };

    //Method: focus
    self.focus = function () {
        var result = false;

        if (self.current() != null) {
            var control = self.current();
            result = control.focus();
        }

        return result;
    };

    //Method: unfocus
    self.unfocus = function () {
        var result = false;

        if (self.current() != null) {
            var control = self.current();
            result = control.unfocus();
        }

        return result;
    };

    //Constructor
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