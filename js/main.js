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

var System = (function (self) {

    self.js = self.js || {};
    self.css = self.css || {};
    self.type = self.type || {};

    self.js.include = function (path) {
        var js = document.createElement("script");
        js.type = "text/javascript";
        js.src = path;

        document.body.appendChild(js);
    };

    self.css.include = function (path) {
        var head = document.getElementsByTagName("head")[0];

        var css = document.createElement("link");
        css.rel = "stylesheet";
        css.type = "text/css";
        css.href = path;

        head.appendChild(css);
    };

    self.type.extend = function (Type, args) {
        var base = (typeof args !== "undefined" && args !== null)
            ? new Type(args)
            : new Type();

        var derived = Object.create(base);

        derived.base = base;

        return derived;
    };

    self.load = function () {

        self.application = new System.Application();

        //TODO: Generate unique session ID
        self.application.session("todo_generate_unique_id");

        System.utility.page.load(System.utility.constant.page.home());
    };

    self.test = function () {

    };

    return self;

})(System || {});

