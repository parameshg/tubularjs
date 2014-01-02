var System = System || {}; // #IGNORE
System.control = System.control || {};
System.control.ImageTile = function (args) {
    var self = System.type.extend(System.control.Base, args);
    var _image = new System.control.html.Image();
    var _panel = new System.control.Panel();
    var _text = new System.control.Label();
    var _text1 = new System.control.Label();
    var _text2 = new System.control.Label();
    var tagText;


    //property: source
    (function () {

        self.source = function (value) {
            _image.source(value);
        };

    })();


    //property: text
    (function () {

        var setText = function (value) {
            _text.text(value);
        }
        var getText = function () {
            return _text.text();
        }


        self.text = function (value) {
            if (typeof value !== "undefined" && value !== null) {

                setText(value);
            }
            else {

                return getText();
            }
        }

    })();

    //property: webPID
    (function () {
        var _value;

        var setWebPID = function (value) {
            _value = value;
        };
        var getWebPID = function () {
            return _value;
        };
        self.webPID = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setWebPID(value);
            }
            else {
                return getWebPID();
            }
        };
    })();
    //property: tag    
    (function () {
        var _value;

        var setTag = function (value) {
            _value = value;
        };
        var getTag = function () {
            return _value;
        };
        self.tag = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setTag(value);
            }
            else {
                return getTag();
            }
        };
    })();

    //Contructor
    (function (args) {
        self.addClass("tile");
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.source !== "undefined" && args.source !== null) {
                self.source(args.source);
            }
            if (typeof args.text !== "undefined" && args.text !== null) {
                self.text(args.text);
                _panel.addItem(_text);
                self.addItem(_panel);
            }
            if (typeof args.webPID !== "undefined" && args.webPID !== null) {
                self.webPID(args.webPID);
            }
            if (typeof args.tag !== "undefined" && args.tag !== null) {
                self.tag(args.tag);
                tagText = args.tag.split(':');
                _text1.text(tagText[0] + "<br/>");
                 _text2.text(tagText[1]); 

              
            }

        }

        self.addItem(_image);
        if (typeof args.tag !== "undefined" && args.tag !== null) {
            self.addItem(_text1);
            self.addItem(_text2);
        }

              
    })(args);

    return self;
};