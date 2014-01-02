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

var System = (function (base) {

    if (typeof base.configuration === "undefined" || base.configuration === null) {
        base.configuration = {};
    }

    if (typeof base.configuration.settings === "undefined" || base.configuration.settings === null) {
        base.configuration.settings = {};
    }

    var self = {};

    (function () {

        var _width = 1280;
        var _height = 1000;

        var _safeWidth = 0;
        var _safeHeight = 0;

        self.bodyWidth = function () {
            return _width + "px";
        };

        self.bodyHeight = function () {
            return _height + "px";
        };

        self.safeWidth = function () {
            return _width - _safeWidth + "px";
        };

        self.safeHeight = function () {
            return _height - _safeHeight + "px";
        };

    })();

    //property: currentPage
    (function () {
        var _currentPage = "";

        var setCurrentPage = function (value) {
            _currentPage = value;
        }
        var getCurrentPage = function () {
            return _currentPage;
        }

        self.CurrentPage = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setCurrentPage(value);
            }
            else {
                return getCurrentPage();
            }
        }
    })();


    (function () {
        var _backButtonURL = [];

        self.pushBackURL = function (value) {
            _backButtonURL.push(value);
        }
        self.popBackURL = function () {
            return _backButtonURL.pop();
        }

        self.backURL = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                self.pushBackURL(value);
            }
            else {
                return self.popBackURL();
            }
        }

        self.backURLClear = function () {
            if (typeof _backButtonURL !== "undefined" && _backButtonURL !== null) {
                _backButtonURL = [];
            }
        }

    })();

    base.configuration.settings = self;
    return base;

})(System || {});