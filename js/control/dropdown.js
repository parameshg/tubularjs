var System = System || {}; // #IGNORE
System.control = System.control || {};
System.control.Dropdown = function (args) {

    var self = System.type.extend(System.control.Base, args);

    self.defaultdiv = new System.control.Button({ class: "selected-item" });

    self.defaultdiv.removeClass("button");

    self.displayText = new System.control.Label({ class: "selected-text" });

    self.list_div = new System.control.Panel({ id: "dropdown-div", class: "invisible" });
    self.list_div.visible(false);

    //property: selectedValue
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

        if (value.length < 6) {
            self.list.visibleItemCount(value.length);
        }
        if (self.id() == "flexpay-items") {
            self.list.visibleItemCount(2);
        }

        for (var ii = 0; ii < value.length; ii++) {

            if (typeof value[ii].name != "undefined" && value[ii].name != null) {

                var _class, _name = value[ii].name();
                if (typeof value[ii].so != "undefined" && value[ii].so != null) {
                    if (value[ii].so() == true) {
                        _class = "unselectable invisible";
                        _name = "(Sold-Out) " + value[ii].name();
                    }
                    else {
                        _class = "invisible";
                    }
                }
                self.list.addItem(new System.control.Dropdownitem({
                    id: "item-" + (ii + 1),
                    class: _class,
                    label: _name,
                    value: value[ii].code(),
                    type: value[ii].type(),
                    so: value[ii].so(),
                    webID: value[ii].webID(),
                    sku: value[ii].sku(),
                    events: {
                        click: function () {
                            self.page = new System.application.currentPage();
                            self.defaultdiv.removeClass('invisible');
                            self.defaultdiv.visible(true);
                            self.list_div.addClass('invisible');
                            self.list_div.visible(false);
                            self.toggleDiv(false, "");
                            var _panel = self.getPanelID(self.id());
                            self.selectedValue(_panel.list.currentIndex());
                            self.displayText.text(_panel.list.current().label());
                            self.page.focus(_panel);
                            if (self.id() != "quantity-items") {
                                _panel.removeNavigation("down");
                                _panel.addNavigation("down", self.page.options[self.page.options.indexOf(self.id()) + 1]);
                            }
                            if ((self.page.detail.variants().levels() == 1 && self.id() == "variant1-items")
                            || (self.page.detail.variants().levels() == 2 && self.id() == "variant2-items")
                            || (self.page.detail.variants().levels() == 3 && self.id() == "variant3-items")) {
                                self.page.PreviousOption.removeNavigation("up");
                                self.page.PreviousOption.addNavigation("up", "btnContinue");
                            } else {
                                self.page.PreviousOption.removeNavigation("up");
                                self.page.PreviousOption.addNavigation("up", self.page.options[self.page.options.indexOf(self.id()) + 1]);
                            }
                        }
                    }
                }));
            }
            else if (typeof value[ii].label != "undefined" && value[ii].label != null) {

                var _label = value[ii].label(), _value = value[ii].value(), _flag = false;

                if (self.id() == "flexpay-items") {
                    if (ii === 0 || ii === (value.length - 1)) {
                        _flag = true;
                    }
                    _label = value[ii].label() + " of " + value[ii].value();
                    _value = value[ii].label() + " of " + value[ii].value();
                } else if (self.id() == "warranty-items") {
                    _flag = true;
                    if (ii != 0) {
                        _label = "Add a " + value[ii].label() + " for $" + value[ii].value();
                        _value = "Add a " + value[ii].label() + " for $" + value[ii].value();                        
                    }
                }

                if (ii == 0) {
                    if (typeof self.displayText.text !== "undefined" && self.displayText.text !== null) {
                        self.selectedText(_label);
                    }
                }

                if (_flag) {
                    self.list.addItem(new System.control.Dropdownitem({
                        id: "item-" + ii,
                        label: _label,
                        value: _value,
                        events: {
                            click: function () {
                                self.defaultdiv.removeClass('invisible');
                                self.defaultdiv.visible(true);
                                self.list_div.addClass('invisible');
                                self.list_div.visible(false);
                                self.toggleDiv(false, "");
                                var _panel = self.getPanelID(self.id());
                                self.selectedValue(_panel.list.currentIndex());
                                self.displayText.text(_panel.list.current().label());
                                self.page.focus(_panel);
                                if (self.id() != "quantity-items") {
                                    _panel.removeNavigation("down");
                                    _panel.addNavigation("down", self.page.options[self.page.options.indexOf(self.id()) + 1]);
                                }
                            }
                        }
                    }));
                }
            }
        }

    };

    self.quantity = function (value) {

        self.selectedText("Quantity: " + 1);

        for (var ii = 1; ii <= value; ii++) {

            self.list.addItem(new System.control.Dropdownitem({
                id: "item-" + ii,
                label: "Quantity: " + ii,
                value: ii,
                events: {
                    click: function () {
                        self.defaultdiv.removeClass('invisible');
                        self.defaultdiv.visible(true);
                        self.list_div.addClass('invisible');
                        self.list_div.visible(false);
                        self.toggleDiv(false, "");
                        var _panel = self.getPanelID(self.id());
                        self.selectedValue(_panel.list.currentIndex());
                        self.displayText.text(_panel.list.current().label());
                        self.page.focus(_panel);
                    }
                }
            }));

        }
    };

    self.getPanelID = function (id) {
        var _panel;
        switch (id) {
            case "variant1-items":
                _panel = self.page.panelItem1;
                break;
            case "variant2-items":
                _panel = self.page.panelItem2;
                break;
            case "variant3-items":
                _panel = self.page.panelItem3;
                break;
            case "flexpay-items":
                _panel = self.page.panelItem4;
                break;
            case "warranty-items":
                _panel = self.page.panelItem5;
                break;
            case "quantity-items":
                _panel = self.page.panelItem6;
                break;
        }
        return _panel;
    };

    self.toggleDiv = function (flag, id) {
        self.page = new System.application.currentPage();
        var _panell = self.page.options;
        for (var ii = 0; ii < _panell.length; ii++) {
            if (flag) {
                if (self.getPanelID(_panell[ii]).defaultdiv.visible()) {
                    self.getPanelID(_panell[ii]).defaultdiv.addClass("invisible");
                    if (id != _panell[ii]) {
                        self.getPanelID(_panell[ii]).addClass("invisible");
                    }
                }
            }
            else {
                if (self.getPanelID(_panell[ii]).defaultdiv.visible()) {
                    self.getPanelID(_panell[ii]).removeClass("invisible");
                    self.getPanelID(_panell[ii]).defaultdiv.removeClass("invisible");
                }
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