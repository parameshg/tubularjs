// TODO: Remove unused constants

var System = System || {}; // #IGNORE

System.utility = System.utility || {};

var System = (function (base) {
    base.utility = base.utility || {};

    var self = {};
    self.page = {};

    //Property: constant
    (function () {
        var _container = "app-container";
        var _pageDefault = "Home";
        var _pageGridStoreFront = "GridStoreFront";
        var _pageListStoreFront = "ListStoreFront";
        var _pageVideoStoreFront = "VideoStoreFront";
        var _pageSearch = "Search";

        self.container = function () {
            return _container;
        };

        self.page.home = function () {
            return _pageDefault;
        };

        self.page.gridStoreFront = function () {
            return _pageGridStoreFront;
        };

        self.page.listStoreFront = function () {
            return _pageListStoreFront;
        };

        self.page.videoStoreFront = function () {
            return _pageVideoStoreFront;
        };

        self.page.search = function () {
            return _pageSearch;
        };

    })();

    base.utility.constant = self;
    return base;
})(System || {});