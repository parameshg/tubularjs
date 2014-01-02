var System = System || {}; // #IGNORE
System.control = System.control || {};
System.control.Dropdownitem = function (args) {

    var self =System.type.extend(System.control.Base, args);   
    var _text = new System.control.Label();

    //property: label
    (function () {
        var _value = "";

        var setLabel = function (value) {
            _value = value;
            _text.text(value);
        }
        var getLabel = function () {
            return _value;
        }

        self.label = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setLabel(value);
            }
            else {
                return getLabel();
            }
        }
    })();

    //property: value
    (function () {
        var _value = "";

        var setValue = function (value) {
            _value = value;
        }
        var getValue = function () {
            return _value;
        }

        self.value = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setValue(value);
            }
            else {
                return getValue();
            }
        }
    })();

    //property: type
    (function () {
        var _value = "";

        var setType = function (value) {
            _value = value;
        }
        var getType = function () {
            return _value;
        }

        self.type = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setType(value);
            }
            else {
                return getType();
            }
        }
    })();

    //property: so
    (function () {
        var _value = "";

        var setSO = function (value) {
            _value = value;
        }
        var getSO = function () {
            return _value;
        }

        self.so = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setSO(value);
            }
            else {
                return getSO();
            }
        }
    })();

    //property: webID
    (function () {
        var _value = "";

        var setWebID = function (value) {
            _value = value;
        }
        var getWebID = function () {
            return _value;
        }

        self.webID = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setWebID(value);
            }
            else {
                return getWebID();
            }
        }
    })();

    //property: sku
    (function () {
        var _value = "";

        var setSKU = function (value) {
            _value = value;
        }
        var getSKU = function () {
            return _value;
        }

        self.sku = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setSKU(value);
            }
            else {
                return getSKU();
            }
        }
    })();

    //Contructor
    (function (args) {
        self.addClass("product");
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.label !== "undefined" && args.label !== null) {
                self.label(args.label);
                self.addItem(_text);
            }
            if (typeof args.value !== "undefined" && args.value !== null) {
                self.value(args.value);
            }
            if (typeof args.type !== "undefined" && args.type !== null) {
                self.type(args.type);
            }
            if (typeof args.so !== "undefined" && args.so !== null) {
                self.so(args.so);
            }
            if (typeof args.webID !== "undefined" && args.webID !== null) {
                self.webID(args.webID);
            }
            if (typeof args.sku !== "undefined" && args.sku !== null) {
                self.sku(args.sku);
            }
        }
    })(args);

    return self;
};