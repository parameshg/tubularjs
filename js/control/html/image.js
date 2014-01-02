var System = System || {}; // #IGNORE

System.control = System.control || {};

System.control.html = System.control.html || {};

System.control.html.Image = function (args) {
    
    var self =System.type.extend(System.control.html.Base, { element: "img" });
    //Property: type
    (function () {
        var _value = "component";

        self.type = function () {
            return _value;
        };
    })();

    //property: source
    (function () {

        var setSource = function (value) {
            self.element().src = value;
        };

        var getSource = function () {
            return self.element().src;
        };

        self.source = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setSource(value);
            }
            else {
                return getSource();
            }
        };

    })();

    //Constructor
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {

            if (typeof args.id !== "undefined" && args.id !== null) {
                self.id(args.id);
            }

            if (typeof args.class !== "undefined" && args.class !== null) {
                self.class(args.class);
            }

            if (typeof args.source !== "undefined" && args.source !== null) {
                self.source(args.source);
            }
        }
    })(args);

    //html
    self.html = function () {
        return self.element();
    };

    return self;
};