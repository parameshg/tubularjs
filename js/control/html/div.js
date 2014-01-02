var System = System || {}; // #IGNORE

System.control = System.control || {};

System.control.html = System.control.html || {};

System.control.html.Div = function (args) {

    var self =System.type.extend(System.control.html.Base, { element: "div" });

    //Property: text
    (function () {

        var setText = function (value) {
            self.element().innerHTML = value;
        };

        var getText = function () {
            return self.element().innerHTML;
        };

        self.text = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setText(value);
            }
            else {
                return getText();
            }
        };

    })();

    //Property: items
    (function () {

        self.addItem = function (item) {
            self.element().appendChild(item.html());
        };

        self.removeItem = function (item) {
            self.element().removeChild(item.html());
        };

        self.hasItems = function () {
            if (self.element().childNodes.length > 0) {
                return true;
            } else {
                return false;
            }
        };

        self.itemCount = function () {
            return self.element().childNodes.length;
        };

        self.item = function (index) {
            if (index >= 0 && index < self.element().childNodes.length) {
                return self.element().childNodes[index];
            }
        };

        self.clearItems = function () {
            for (var ii = self.element().childNodes.length; ii > 0; ii--) {
                self.removeItem(self.element().childNodes[ii]);
            }
        };

    })();

    //Contructor
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.id !== "undefined" && args.id !== null) {
                self.id(args.id);
            }

            if (typeof args.class !== "undefined" && args.class !== null) {
                self.class(args.class);
            }

            if (typeof args.caption !== "undefined" && args.caption !== null) {
                self.text(args.caption);
            }     
        }
    })(args);

    //Method: html
    self.html = function () {
        return self.element();
    };

    return self;
};