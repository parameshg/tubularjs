var System = System || {}; // #IGNORE
System.control = System.control || {};
System.control.TextBox = function (args) {
    var self =System.type.extend(System.control.Base, args);

    var _input = new System.control.html.Input();

    //Property: value
    (function () {

        var setValue = function (value) {
            _input.value(value);
        };

        var getValue = function () {
            return _input.value();
        };

        self.value = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setValue(value);
            } else {
                return getValue();
            }
        };

    })();

    self.textLength = function () {

        return _input.value.length;
    };

    //    //property: value
    //    (function () {

    //        self.maxlength = function (value) {
    //            _input.maxlength(value);
    //        };

    //    })();

    //Constructor
    (function (args) {

        if (typeof args !== "undefined" && args !== null) {

            if (typeof args.type !== "undefined" && args.type !== null) {
                _input.type(args.type);
            }

            if (typeof args.id !== "undefined" && args.id !== null) {
                _input.id(args.id);
            }
            if (typeof args.value !== "undefined" && args.value !== null) {
                _input.value(args.value);
            }
            if (typeof args.maxlength !== "undefined" && args.maxlength !== null) {
                _input.maxlength(args.maxlength);
            }

            if (typeof args.readOnly !== "undefined" && args.readOnly !== null) {
                _input.readOnly(args.readOnly);
            }

            if (typeof args.autoComplete !== "undefined" && args.autoComplete !== null) {
                _input.autoComplete(args.autoComplete);
            }
        }


        self.addItem(_input);

    })(args);

    return self;
};