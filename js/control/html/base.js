var System = System || {}; // #IGNORE

System.control = System.control || {};

System.control.html = System.control.html || {};

System.control.html.Base = function (args) {

    var self = {};

    var _element;

    //Property: element
    (function () {
        self.element = function () {
            return _element;
        };
    })();

    //Property: id
    (function () {

        var setId = function (value) {
            _element.id = value;
        };

        var getId = function () {
            return _element.id;
        };

        self.id = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setId(value);
            } else {
                return getId();
            }
        };

    })();

    //Property: visible
    (function () {
        var _value = true;

        var setVisible = function (value) {
            _value = value
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

    //Property: class
    (function () {

        var _value = [];

        var update = function () {

            for (var ii = _value.length - 1; ii >= 0; ii--) {
                if (_value[ii].trim() === "") {
                    _value.splice(ii, 1);
                }
            }

            _element.setAttribute("class", _value.join(" ").trim());
        };

        var setClass = function (value) {
            _value = value.trim().split(" ");
            update();
        };

        var getClass = function () {
            return _value.join(" ");
        };

        self.class = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setClass(value.trim());
            }
            else {
                return getClass();
            }
        };

        self.addClass = function (value) {
            if (_value.indexOf(value) === -1) {
                _value.push(value);
                update();
            }
        };

        self.removeClass = function (value) {
            if (_value.indexOf(value) !== -1) {
                _value.splice(_value.indexOf(value), 1);
                update();
            }
        };

        self.clearClass = function (value) {
            setClass("");
        };

    })();

    //Contructor
    (function (args) {
        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.element !== "undefined" && args.element !== null) {
                _element = document.createElement(args.element);
            }
        }
    })(args);

    //Method: html
    self.html = function () {
        return _element;
    };

    self.offsetLeft = function () {
        return _element.offsetLeft;
    };

    self.offsetTop = function () {
        return _element.offsetTop;
    };

    self.offsetWidth = function () {
        return _element.offsetWidth;
    };

    self.offsetHeight = function () {
        return _element.offsetHeight;
    };

    return self;

};