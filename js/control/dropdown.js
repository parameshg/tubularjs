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

System.control.Dropdown = function (args) {

    var self = System.type.extend(System.control.Base, args);

    self.defaultdiv = new System.control.Button({ class: "selected-item" });

    self.defaultdiv.removeClass("button");

    self.displayText = new System.control.Label({ class: "selected-text" });

    self.list_div = new System.control.Panel({ id: "dropdown-div", class: "invisible" });

    self.list_div.visible(false);

    // property: selectedValue
    (function () {
        var _value = "";

        var setSelectedValue = function (value) {
            _value = value;
        }
        var getSelectedValue = function () {
            return _value;
        }

        self.selectedValue = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setSelectedValue(value);
            }
            else {
                return getSelectedValue();
            }
        }
    })();

    self.selectedText = function (value) {
        self.displayText.text(value);
        self.defaultdiv.addItem(self.displayText);
        self.defaultdiv.addItem(new System.control.Label({ class: "dropdown-arrow" }));
    };

    self.list = new System.control.List({
        id: "dropdown-list",
        orientation: "vertical",
        linear: true,
        visibleItemCount: 5,
        navigation: { down: "", up: "", left: "", right: "" }
    });

    self.items = function (value) {

        for (var ii = 0; ii < value.length; ii++) {

            if (typeof value[ii].name != "undefined" && value[ii].name != null) {

                var _class, _name = value[ii].name();

                self.list.addItem(new System.control.Dropdownitem({
                    id: "item-" + (ii + 1),
                    class: _class,
                    label: _name,
                    value: value[ii].code(),
                    type: value[ii].type(),
                    events: {
                        click: function () {
                            self.page = new System.application.currentPage();
                            self.defaultdiv.removeClass('invisible');
                            self.defaultdiv.visible(true);
                            self.list_div.addClass('invisible');
                            self.list_div.visible(false);
                        }
                    }
                }));
            }
        }
    };

    (function (args) {
        self.addClass("dropdown");
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.selected !== "undefined" && args.selected !== null) {
                self.selectedText(args.selected);
            }
            if (typeof args.items !== "undefined" && args.items !== null) {
                self.items(args.items);
            }
            else if (typeof args.quantity !== "undefined" && args.quantity !== null) {
                self.quantity(args.quantity);
            }
            self.addItem(self.defaultdiv);
            //self.addItem(_list);
            self.list_div.addItem(self.list);
            self.addItem(self.list_div);
        }
    })(args);

    return self;
};