﻿/*
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

System.entity = System.entity || {};

System.entity.Base = function () {

    var self = {};

    (function () {
        var _value;

        var setMso = function (value) {
            _value = value;
        }
        var getMso = function () {
            return _value;
        }

        self.mso = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setMso(value);
            }
            else {
                return getMso();
            }
        }
    })();

    (function () {
        var _value;

        var setVersion = function (value) {
            _value = value;
        }
        var getVersion = function () {
            return _value;
        }

        self.version = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setVersion(value);
            }
            else {
                return getVersion();
            }
        }
    })();

    return self;
};