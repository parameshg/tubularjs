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

System.control.Carousellist = function (args) {

    var self = System.type.extend(System.control.Base, args);

    //Contructor
    self.class("carousel_inner");
    (function (args) {

        if (typeof args !== "undefined" && args !== null) {

            var _crslitem;

            var _nowPlaying, _price, _name, _productDesc;

            if (args.productCount() !== "undefined" && args !== null) {

                self.addItem(new System.control.html.Image({ id: "imgUparrow", source: "images/arrow-up.png" }));
                var listcls;
                for (var i = 0; i < args.productCount(); i++) {


                    if (i == 0) {
                        listcls = "carouselLI prod-first";
                    }
                    else if (i == 1) {
                        listcls = "carouselLI prod-middle";
                    }
                    else if (i == 2) {
                        listcls = "carouselLI prod-last";
                    }
                    else {
                        listcls = "carouselLI invisible";
                    }
                    self.addItem(new System.control.Carousel({
                        id: "crslitem" + i,
                        class: listcls,
                        source: args.productItem(i).image().url(),
                        text: args.productItem(i).name(),
                        webPid: args.productItem(i).webPID(),
                        url: args.productItem(i).image().url(),
                        price: args.productItem(i).priceItem(0).value(),
                        name: args.productItem(i).name()

                    }));
                }
                self.addItem(_list);
                self.addItem(new System.control.html.Image({ id: "imgDownarrow", source: "images/arrow-down.png" }));
            }
        }

    })(args);

    return self;
};