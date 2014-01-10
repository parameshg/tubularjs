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

System.control.Popup = function (args) {

    var self = System.type.extend(System.control.Container, args);

    self.addClass("popup");

    // .ctor
    (function (args) {

        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.id !== "undefined" && args.id !== null) {
                self.id(args.id);
            }

            if (typeof args.class !== "undefined" && args.class !== null) {
                self.class(args.class);
            }

            self.addItem(new System.control.Label({
                id: "txtmsg",
                class: "",
                text: "Please select 'OK' to contine..."
            }));

            self.btnOk = new System.control.Button({
                id: "btnPopup",
                class: "popup-button",
                text: "OK",
                events: {
                    click: function () {
                        console.log("Click Event!");
                    }
                }
            });

            self.addItem(self.btnOk);
            self.focus(self.btnOk);
        }

    })(args);

    return self;
};