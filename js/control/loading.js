var System = System || {}; // #IGNORE
System.control = System.control || {};
System.control.Loading = function (args) {
    var self =System.type.extend(System.control.Component, args);

    self.addClass("loading");

    //Constructor
    (function (args) {

        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.id !== "undefined" && args.id !== null) {
                self.id(args.id);
            }

            if (typeof args.class !== "undefined" && args.class !== null) {
                self.class(args.class);
            }

            self.addItem(new System.control.Label({
                id: "lblLoading",
                class: "loadingMsg"//,
               // text:"Processing your order, please wait"
            }));

            self.addItem(new System.control.html.Image({ source: "images/loading-category-dark.gif" }));

        }

    })(args);

    return self;
};