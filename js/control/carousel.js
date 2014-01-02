var System = System || {}; // #IGNORE

System.control = System.control || {};

System.control.Carousel = function (args) {

    var self = System.type.extend(System.control.Base, args);

    var imageContainer = System.type.extend(System.control.Tile, args);

    //property: webPID
    (function () {
        var _value = "";

        var setWebPID = function (value) {
            _value = value;
        }
        var getWebPID = function () {
            return _value;
        }

        self.webPid = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setWebPID(value);
            }
            else {
                return getWebPID();
            }
        }
    })();

    //property: url
    self.url = function (value) {
        return value;
    };

    //Contructor
    (function (args) {

        if (typeof args !== "undefined" && args !== null) {
            imageContainer.id("imagePanel");
            imageContainer.class("crsl-live");
            if (typeof args.source !== "undefined" && args.source !== null) {
                imageContainer.addItem(new System.control.html.Image({ id: "crslimg", source: args.source }));
            }
            self.addItem(imageContainer);

            if (typeof args.text !== "undefined" && args.text !== null) {
                //self.text(args.text);
                //self.addItem(new System.control.html.Div({id:"prodprice",class :"item-desc", text :args.text  }));
            }
            if (typeof args.title !== "undefined" && args.title !== null) {
                self.addItem(new System.control.Label({ id: "prodtitle", class: "item-desc", text: "$" + args.title }));
            }
            if (typeof args.description !== "undefined" && args.description !== null) {
                self.addItem(new System.control.Label({ id: "prodname", class: "item-desc", text: args.description }));
            }
            if (typeof args.webPid !== "undefined" && args.webPid !== null) {
                self.webPid(args.webPid);
            }
    }

})(args);

return self;
};