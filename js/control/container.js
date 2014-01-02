var System = System || {}; // #IGNORE

System.control = System.control || {};

System.control.Container = function (args) {

    var self =System.type.extend(System.control.html.Div, args);

    //Property: type
    (function () {
        var _value = "container";

        self.type = function () {
            return _value;
        };
    })();

    //Property: items
    (function () {

        var _value = [];

        self.addItem = function (value) {
            _value.push(value);
            //self.super.addItem(value);
            self.base.addItem(value);
        };

        self.removeItem = function (value) {
            _value.splice(_value.indexOf(value), 1);
            //self.super.removeItem(value);
            self.base.removeItem(value);
        };

        self.hasItems = function () {
            return (_value.length > 0);
        };

        self.itemCount = function () {
            return _value.length;
        };

        self.item = function (index) {
            return _value[index];
        };

        self.clearItems = function () {
            for (var ii = _value.length; ii > 0; ii--) {
                self.removeItem(_value[ii - 1]);
            }
        };

    })();

    //Constructor
    (function (args) {

        self.addClass("container");

    })(args);

    self.current = function () {
        return null;
    };

    self.focus = function () {
    };

    return self;
};