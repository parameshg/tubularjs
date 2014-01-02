var System = System || {}; // #IGNORE
System.control = System.control || {};
System.control.Label = function (args) {
    var self =System.type.extend(System.control.Component, args);

    self.addClass("label");

    //Constructor
    (function (args) {

        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.id !== "undefined" && args.id !== null) {
                self.id(args.id);
            }

            if (typeof args.text !== "undefined" && args.text !== null) {
                self.text(args.text);
            }

            if (typeof args.class !== "undefined" && args.class !== null) {
                self.class(args.class);
            }
        }

    })(args);

    return self;
};