var System = System || {}; // #IGNORE

System.control = System.control || {};

System.control.Video = function (args) {

    var self = new System.control.Container(args);

    var _video = new System.control.html.Video({ id: "video" });

    _imgFullScreen = new System.control.ImageTile({
        id: "imgFS",
        class: "fullscreenvideo",
        source: "images/expand.png",
        events: {
            click: function (sender) {

                var _class = self.class();
                if (_class.match('video-fs')) {
                    self.removeClass('video-fs');
                }
                else {
                    self.addClass('video-fs');
                }
            } /*,
            down: function () {
                self.removeClass('video-active');
            }*/
        },
        navigation: { left: "menu", up: "" }
    });

    //    _imgCC = new System.control.ImageTile({
    //        id: "imgCC",
    //        class: "videocc",
    //        source: "images/cc.png",
    //        events: {
    //            click: function (sender) {
    //                //loginkeyDown(sender.id().replace("btn", ""));
    //                console.log("buy button Click Event!");
    //            }
    //        }
    //    });

    _label = new System.control.Label({
        id: "orNo",
        class: "overrelay"
    });

    _lblDisc = new System.control.Label({
        id: "lblDisc",
        class: "disclaimer"
    });

    //property: source
    (function () {

        self.source = function (value) {
            _video.source(value);
        };

    })();

    //Method: play
    self.play = function () {
        _video.play();
    };

    //Method: pause
    self.pause = function () {
        _video.pause();
    };

    //property: text
    (function () {

        self.text = function (value) {
            _label.text(value);
        };

    })();

    //property: text
    (function () {

        self.disclaimer = function (value) {
            _lblDisc.text(value);
        };

    })();

    //Constructor
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.source !== "undefined" && args.source !== null) {
                self.source(args.source);
            }

            if (typeof args.type !== "undefined" && args.type !== null) {
                //self.type(args.type);
            }

            if (typeof args.text !== "undefined" && args.text !== null) {
                self.text(args.text);
            }

            if (typeof args.disclaimer !== "undefined" && args.disclaimer !== null) {
                self.disclaimer(args.disclaimer);
            }
        }
        self.addItem(_video);
        // self.addItem(_imgCC);
        self.addItem(_imgFullScreen);
        self.addItem(_label);
        self.addItem(_lblDisc);

    })(args);

    return self;
};