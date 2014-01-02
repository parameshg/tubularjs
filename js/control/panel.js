var System = System || {}; // #IGNORE

System.control = System.control || {};

System.control.Panel = function (args) {

    var self =System.type.extend(System.control.Container, args);

    self.addClass("panel");

//    //Property: type
//    (function () {
//        var _value = "panel";

//        self.type = function () {
//            return _value;
//        };
//    })();

//    self.current = function () {
//        var result = null;

//        if (self.itemCount() > 0) {
//            result = self.item(_currentIndex);
//        }

//        return result;
//    };

    //Method: focus
    self.focus = function () {
        var result = false;

        if (self.current() != null) {
            var control = self.current();
            result = control.focus();
        }

        return result;
    };

    //Method: unfocus
    self.unfocus = function () {
        var result = false;

        if (self.current() != null) {
            var control = self.current();
            result = control.unfocus();
        }

        return result;
    };

    //Constructor
    (function (args) {

        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.id !== "undefined" && args.id !== null) {
                self.id(args.id);
            }

            if (typeof args.text !== "undefined" && args.text !== null) {
                self.text(args.text);
            }

            if (typeof args.class !== "undefined" && args.class !== null) {
                self.class(args.class);
            }
        }

    })(args);

    return self;
};