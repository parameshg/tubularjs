var System = System || {}; // #IGNORE

System.control = System.control || {};

System.control.html = System.control.html || {};

System.control.html.Video = function (args) {

    var self = System.type.extend(System.control.html.Base, { element: "video" });

    //Property: source
    (function () {

        self.source = function (value) {
            var sources = self.element().getElementsByTagName("source");
            sources[0].src = value;
        };

    })();

    //Property: type
    (function () {

        self.type = function (value) {
            var sources = self.element().getElementsByTagName("source");
            // sources[0].type = value;
        };

    })();

    //Contructor
    (function (args) {
        var source = document.createElement("source");
        // source.nodeType = "video/mp4";
        self.element().appendChild(source);

        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.id !== "undefined" && args.id !== null) {
                self.id(args.id);
            }

            if (typeof args.class !== "undefined" && args.class !== null) {
                self.class(args.class);
            }

            if (typeof args.text !== "undefined" && args.text !== null) {
                self.text(args.text);
            }
        }

        self.element().autoplay = true;
    })(args);

    //Method: html
    self.html = function () {
        return self.element();
    };

    //Method: load
    self.load = function () {
        self.element().load();
    };

    //Method: play
    self.play = function () {
        self.element().play();
    };

    //Method: pause
    self.pause = function () {
        self.element().pause();
    };

    return self;
};