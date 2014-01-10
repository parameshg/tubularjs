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

System.control.Video = function (args) {

    var self = new System.control.Container(args);

    var _video = new System.control.html.Video({ id: "video" });

    _imgFullScreen = new System.control.ImageTile({
        id: "imgFS",
        class: "fullscreenvideo",
        source: "images/expand.png",
        events: {
            click: function (sender) {

                var _class = self.class();
                if (_class.match('video-fs')) {
                    self.removeClass('video-fs');
                }
                else {
                    self.addClass('video-fs');
                }
            } /*,
            down: function () {
                self.removeClass('video-active');
            }*/
        },
        navigation: { left: "menu", up: "" }
    });

    _label = new System.control.Label({
        id: "orNo",
        class: "overrelay"
    });

    _lblDisc = new System.control.Label({
        id: "lblDisc",
        class: "disclaimer"
    });

    //property: source
    (function () {

        self.source = function (value) {
            _video.source(value);
        };

    })();

    //Method: play
    self.play = function () {
        _video.play();
    };

    //Method: pause
    self.pause = function () {
        _video.pause();
    };

    //property: text
    (function () {

        self.text = function (value) {
            _label.text(value);
        };

    })();

    //property: text
    (function () {

        self.disclaimer = function (value) {
            _lblDisc.text(value);
        };

    })();

    // .ctor
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.source !== "undefined" && args.source !== null) {
                self.source(args.source);
            }

            if (typeof args.type !== "undefined" && args.type !== null) {
                //self.type(args.type);
            }

            if (typeof args.text !== "undefined" && args.text !== null) {
                self.text(args.text);
            }

            if (typeof args.disclaimer !== "undefined" && args.disclaimer !== null) {
                self.disclaimer(args.disclaimer);
            }
        }
        self.addItem(_video);
        self.addItem(_imgFullScreen);
        self.addItem(_label);
        self.addItem(_lblDisc);

    })(args);

    return self;
};