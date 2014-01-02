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

var System = System || {};

System.Application = function () {
    var self = {};

    //Property: currentPage
    (function () {
        var _value = {};

        var setCurrentPage = function (value) {
            _value = value;
        };

        var getCurrentPage = function () {
            return _value;
        };

        self.currentPage = function (value) {
            if (typeof value !== "undefined" && value != null) {
                setCurrentPage(value);
            } else {
                return getCurrentPage();
            }
        };

    })();

    //Property: pages
    (function () {

        var _value = {};

        self.addPage = function (page) {
            _value[page.id()] = page;
        };

        self.removePage = function () {
            delete _value[page.id()];
        };

        self.pageExists = function (pageId) {
            var result = false;

            for (var key in _value) {
                if (key === pageId) {
                    result = true;
                    break;
                }
            }

            return result;
        };

        self.page = function (pageId) {
            return _value[pageId];
        };

    })();

    //property: session
    (function () {
        var _value = "";

        var getSession = function () {
            return _value;
        };

        var setSession = function (value) {
            _value = value;
        };

        self.session = function (value) {
            if (typeof value !== "undefined" && value != null) {
                setSession(value);
            } else {
                return getSession();
            }
        };

    })();

    return self;
};