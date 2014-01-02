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

System.control.html = System.control.html || {};

System.control.html.Div = function (args) {

    var self =System.type.extend(System.control.html.Base, { element: "div" });

    //Property: text
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

    //Property: items
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

    //Contructor
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

    //Method: html
    self.html = function () {
        return self.element();
    };

    return self;
};