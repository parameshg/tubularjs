var System = System || {}; // #IGNORE

System.control = System.control || {};

System.control.Button = function (args) {

    var self = System.type.extend(System.control.Base, args);
        
    var _text = new System.control.Label();

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



    //property: Tag
    (function () {
        var _value = "";

        var setTag = function (value) {
            _value = value;
        }
        var getTag = function () {
            return _value;
        }

        self.tag = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setTag(value);
            }
            else {
                return getTag();
            }
        }
    })();

    //Contructor
    (function (args) {
        self.addClass("button");
        if (typeof args !== "undefined" && args !== null) {

            if (typeof args.text !== "undefined" && args.text !== null) {
                self.text(args.text);
            }

            if (typeof args.tag !== "undefined" && args.tag !== null) {
                self.tag(args.tag);
            }
        }
        self.addItem(_text);
    })(args);

    return self;
};