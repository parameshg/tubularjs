var System = System || {}; // #IGNORE

System.control = System.control || {};

System.control.html = System.control.html || {};

System.control.html.Input = function (args) {

    var self =System.type.extend(System.control.html.Base, { element: "input" });    

    //Property: value
    (function () {

        var setValue = function (value) {
            self.element().value = value;
        };

        var getValue = function () {
            return self.element().value;
        };

        self.value = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setValue(value);
            }
            else {
                return getValue();
            }
        };

    })();


    //Property: type
    (function () {

        var setType = function (value) {
            self.element().type = value;
        };

        var getType = function () {
            return self.element().type;
        };

        self.type = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setType(value);
            }
            else {
                return getType();
            }
        };

    })();


    //Property: maxlength
    (function () {

        var setMaxLength = function (value) {
            self.element().maxLength = value;
        };

        var getMaxLength = function () {
            return self.element().maxLength;
        };

        self.maxlength = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setMaxLength(value);
            }
            else {
                return getMaxLength();
            }
        };

    })();

    //Property: readonly
    (function () {

        var setReadOnly = function (value) {            
            self.element().readOnly = value;
        };

        var getReadOnly = function () {
            return self.element().readOnly;
        };

        self.readOnly = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setReadOnly(value);
            }
            else {
                return getReadOnly();
            }
        };

    })();

    //Property: autocomplete
    (function () {

        var setAutoComplete = function (value) {
            self.element().autocomplete = value;
        };

        var getAutoComplete = function () {
            return self.element().autocomplete;
        };

        self.autoComplete = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setAutoComplete(value);
            }
            else {
                return getAutoComplete();
            }
        };

    })();

    //    (function () {
    //        self.maxLengthPaste = function(field, maxChars) {
    //            event.returnValue = false;
    //            var clipText = window.clipboardData.getData("Text");

    //            if (cliptext.length == maxChars) {
    //                return false;
    //            }

    //            event.returnValue = true;
    //        };
    //    })();

    //Contructor
    (function (args) {

        if (typeof args !== "undefined" && args !== null) {

            if (typeof args.id !== "undefined" && args.id !== null) {
                self.id(args.id);
            }

            if (typeof args.class !== "undefined" && args.class !== null) {
                self.class(args.class);
            }

            if (typeof args.value !== "undefined" && args.value !== null) {
                self.value(args.value);
            }

            if (typeof args.type !== "undefined" && args.type !== null) {
                self.type(args.type);
            }

            if (typeof args.maxlength !== "undefined" && args.maxlength !== null) {
                self.maxlength(args.maxlength);
            }

            if (typeof args.readOnly !== "undefined" && args.readOnly !== null) {
                self.readOnly(args.readOnly);
            }

            if (typeof args.autoComplete !== "undefined" && args.autoComplete !== null) {
                self.autoComplete(args.autoComplete);
            }
        }
    })(args);

    //Method: html
    self.html = function () {
        return self.element();
    };

    return self;
};