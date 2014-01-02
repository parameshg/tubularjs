var System = System || {}; // #IGNORE

System.control = System.control || {};

System.control.Base = function (args) {

    var self = System.type.extend(System.control.Component, args);

    //Property: type
    (function () {
        var _value = "control";

        self.type = function () {
            return _value;
        };
    })();

    //Property: events
    (function () {
        var _value = {};

        self.addEventHandler = function (event, handler) {
            _value[event] = handler;
        };


        self.removeEventHandler = function (event) {
            delete _value[event];
        };


        self.hasHandlerFor = function (event) {
            var result = false;

            for (var key in _value) {
                if (key === event) {
                    result = true;
                    break;
                }
            }

            return result;
        };

        self.events = function () {
            return _value;
        };

        self.handler = function (event) {
            return _value[event];
        };

    })();

    //Property: navigation
    (function () {
        var _value = {};

        self.addNavigation = function (event, controlId) {
            _value[event] = controlId;
        };

        self.removeNavigation = function (event) {
            delete _value[event];
        };

        self.hasNavigationFor = function (event) {
            var result = false;

            for (var key in _value) {
                if (key === event) {
                    result = true;
                    break;
                }
            }

            return result;
        };

        self.navigation = function () {
            return _value;
        };

        self.next = function (event) {
            var page = System.application.currentPage();
            var controlId = _value[event];
            if (page.hasControls() && page.hasControl(controlId)) {
                return page.control(controlId);
            }
        };

    })();

    //Constructor
    (function (args) {
        self.addClass("control");

        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.events !== "undefined" && args.events !== null) {
                for (var event in args.events) {
                    self.addEventHandler(event, args.events[event]);
                }
            }

            if (typeof args.navigation !== "undefined" && args.navigation !== null) {
                for (var key in args.navigation) {
                    self.addNavigation(key, args.navigation[key]);
                }
            }
        }
    })(args);

    //Method: focus
    self.focus = function () {
        self.addClass("focused");
        return true;
    };

    //Method: unfocus
    self.unfocus = function () {
        self.removeClass("focused");
        return true;
    };

    return self;
};