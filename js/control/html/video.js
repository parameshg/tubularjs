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

System.control.html.Video = function (args) {

    var self = System.type.extend(System.control.html.Base, { element: "video" });

    // property: source
    (function () {

        self.source = function (value) {
            var sources = self.element().getElementsByTagName("source");
            sources[0].src = value;
        };

    })();

    // property: type
    (function () {

        self.type = function (value) {
            var sources = self.element().getElementsByTagName("source");
            // sources[0].type = value;
        };

    })();

    // .ctor
    (function (args) {
        var source = document.createElement("source");
        // source.nodeType = "video/mp4";
        self.element().appendChild(source);

        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.id !== "undefined" && args.id !== null) {
                self.id(args.id);
            }

            if (typeof args.class !== "undefined" && args.class !== null) {
                self.class(args.class);
            }

            if (typeof args.text !== "undefined" && args.text !== null) {
                self.text(args.text);
            }
        }

        self.element().autoplay = true;
    })(args);

    // method: html
    self.html = function () {
        return self.element();
    };

    // method: load
    self.load = function () {
        self.element().load();
    };

    // method: play
    self.play = function () {
        self.element().play();
    };

    // method: pause
    self.pause = function () {
        self.element().pause();
    };

    return self;
};