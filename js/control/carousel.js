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

System.control.Carousel = function (args) {

    var self = System.type.extend(System.control.Base, args);

    var imageContainer = System.type.extend(System.control.Tile, args);

    // property: url
    self.url = function (value) {
        return value;
    };

    // .ctor
    (function (args) {

        if (typeof args !== "undefined" && args !== null) {
            imageContainer.id("imagePanel");
            imageContainer.class("crsl-live");
            if (typeof args.source !== "undefined" && args.source !== null) {
                imageContainer.addItem(new System.control.html.Image({ id: "crslimg", source: args.source }));
            }
            self.addItem(imageContainer);

            if (typeof args.text !== "undefined" && args.text !== null) {
            }
            if (typeof args.title !== "undefined" && args.title !== null) {
                self.addItem(new System.control.Label({ id: "prodtitle", class: "item-desc", text: "$" + args.title }));
            }
            if (typeof args.description !== "undefined" && args.description !== null) {
                self.addItem(new System.control.Label({ id: "prodname", class: "item-desc", text: args.description }));
            }
            if (typeof args.webPid !== "undefined" && args.webPid !== null) {
                self.webPid(args.webPid);
            }
    }

})(args);

    return self;
};