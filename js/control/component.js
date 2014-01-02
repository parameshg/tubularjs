var System = System || {}; // #IGNORE

System.control = System.control || {};

System.control.Component = function (args) {

    var self =System.type.extend(System.control.html.Div, args);

    //Property: type
    (function () {
        var _value = "component";

        self.type = function () {
            return _value;
        };
    })();

    //Property: visible
    (function () {

        var _value = true;

        var setVisible = function (value) {
            _value = value;
            if (_value === false) {
                self.addClass("invisible");
                self.removeClass("visible");
            } else {
                self.addClass("visible");
                self.removeClass("invisible");
            }
        };

        var getVisible = function () {
            return _value;
        };

        self.visible = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setVisible(value);
            } else {
                return getVisible();
            }
        };

    })();

    //Constructor
    (function (args) {

        self.visible(true);
        
    })(args);

    return self;
};