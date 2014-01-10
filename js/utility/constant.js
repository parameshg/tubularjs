// TODO: Remove unused constants

var System = System || {}; // #IGNORE

System.utility = System.utility || {};

var System = (function (base) {
    base.utility = base.utility || {};

    var self = {};
    self.page = {};

    // property: constant
    (function () {
        var _container = "app-container";
        var _pageDefault = "Home";

        self.container = function () {
            return _container;
        };

        self.page.home = function () {
            return _pageDefault;
        };
    })();

    base.utility.constant = self;
    return base;
})(System || {});