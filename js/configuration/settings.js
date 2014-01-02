var System = (function (base) {

    if (typeof base.configuration === "undefined" || base.configuration === null) {
        base.configuration = {};
    }

    if (typeof base.configuration.settings === "undefined" || base.configuration.settings === null) {
        base.configuration.settings = {};
    }

    var self = {};

    (function () {

        var _width = 1280;
        var _height = 1000;

        var _safeWidth = 0;
        var _safeHeight = 0;

        self.bodyWidth = function () {
            return _width + "px";
        };

        self.bodyHeight = function () {
            return _height + "px";
        };

        self.safeWidth = function () {
            return _width - _safeWidth + "px";
        };

        self.safeHeight = function () {
            return _height - _safeHeight + "px";
        };

    })();

    //property: currentPage
    (function () {
        var _currentPage = "";

        var setCurrentPage = function (value) {
            _currentPage = value;
        }
        var getCurrentPage = function () {
            return _currentPage;
        }

        self.CurrentPage = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setCurrentPage(value);
            }
            else {
                return getCurrentPage();
            }
        }
    })();


    (function () {
        var _backButtonURL = [];

        self.pushBackURL = function (value) {
            _backButtonURL.push(value);
        }
        self.popBackURL = function () {
            return _backButtonURL.pop();
        }

        self.backURL = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                self.pushBackURL(value);
            }
            else {
                return self.popBackURL();
            }
        }

        self.backURLClear = function () {
            if (typeof _backButtonURL !== "undefined" && _backButtonURL !== null) {
                _backButtonURL = [];
            }
        }

    })();

    base.configuration.settings = self;
    return base;

})(System || {});