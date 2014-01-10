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

System.control.ReviewStar = function (args) {

    var self = System.type.extend(System.control.Container, args);

    var _image = new System.control.html.Image();

    var _text = new System.control.Label();

    // property: rating
    (function () {

        self.rating = function (value) {            
            _image.source(self.ratingImage(value));
        };

    })();

    // property: text
    (function () {

        self.text = function (value) {
            _text.text("(" + value + ")");            
        };

    })();

    //Property: ratingImage
    self.ratingImage = function (value) {
        var _url = "";
        if ((value >= 0) && (value < 0.5)) {
            _url = "";
        }
        else if ((value >= 0.5) && (value < 1)) {
            _url = "images/star0.5.png";
        }
        else if ((value >= 1) && (value < 1.5)) {
            _url = "images/star1.png";
        }
        else if ((value >= 1.5) && (value < 2)) {
            _url = "images/star1.5.png";
        }
        else if ((value >= 2) && (value < 2.5)) {
            _url = "images/star2.0.png";
        }
        else if ((value >= 2.5) && (value < 3)) {
            _url = "images/star2.5.png";
        }
        else if ((value >= 3) && (value < 3.5)) {
            _url = "images/star3.0.png";
        }
        else if ((value >= 3.5) && (value < 4)) {
            _url = "images/star3.5.png";
        }
        else if ((value >= 4) && (value < 4.5)) {
            _url = "images/star4.png";
        }
        else if ((value >= 4.5) && (value < 5)) {
            _url = "images/star4.5.png";
        }
        else if ((value == 5)) {
            _url = "images/star5.png";
        }
        else {
            _url = "";
        }

        return _url;
    };

    // .ctor
    (function (args) {

        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.rating !== "undefined" && args.rating !== null) {
                self.rating(args.rating);
                self.addItem(_image);
            }
            if (typeof args.text !== "undefined" && args.text !== null) {
                self.text(parseFloat(args.text).toFixed(1));
                self.addItem(_text);
            }
        }        
    })(args);

    return self;
};