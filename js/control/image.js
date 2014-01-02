var System = System || {}; // #IGNORE
System.control = System.control || {};
System.control.Image = function (args) {
    var self =System.type.extend(System.control.Base, args);
    
    var _image = new System.control.html.Image();
    var _text = new System.control.Label();

    //property: source
    (function () {

        self.source = function (value) {
            _image.source(value);
        };

    })();

    //property: text
    (function () {

        self.text = function (value) {
            _text.text(value);
        };

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

    //Contructor
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.source !== "undefined" && args.source !== null) {
                self.source(args.source);
            }
            if (typeof args.text !== "undefined" && args.text !== null) {
                self.text(args.text);
                self.addItem(_text);
            }
            if (typeof args.webPID !== "undefined" && args.webPID !== null) {
                self.webPID(args.webPID);
            }           
        }
        self.addItem(_image);        
    })(args);

    return self;
};