var System = System || {};

System.Application = function () {
    var self = {};

    //Property: currentPage
    (function () {
        var _value = {};

        var setCurrentPage = function (value) {
            _value = value;
        };

        var getCurrentPage = function () {
            return _value;
        };

        self.currentPage = function (value) {
            if (typeof value !== "undefined" && value != null) {
                setCurrentPage(value);
            } else {
                return getCurrentPage();
            }
        };

    })();

    //Property: pages
    (function () {

        var _value = {};

        self.addPage = function (page) {
            _value[page.id()] = page;
        };

        self.removePage = function () {
            delete _value[page.id()];
        };

        self.pageExists = function (pageId) {
            var result = false;

            for (var key in _value) {
                if (key === pageId) {
                    result = true;
                    break;
                }
            }

            return result;
        };

        self.page = function (pageId) {
            return _value[pageId];
        };

    })();

    //property: session
    (function () {
        var _value = "";

        var getSession = function () {
            return _value;
        };

        var setSession = function (value) {
            _value = value;
        };

        self.session = function (value) {
            if (typeof value !== "undefined" && value != null) {
                setSession(value);
            } else {
                return getSession();
            }
        };

    })();

    return self;
};