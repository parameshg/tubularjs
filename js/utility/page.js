var System = (function (base) {
    base.utility = base.utility || {};
    var self = {};

    var getPage = function (pageId) {
        var result;

        if (System.application.pageExists(pageId)) {
            result = System.application.page(pageId);
        } else {
            result = new System.page[pageId]();
            System.application.addPage(result);
        }

        return result;
    };

    self.load = function (pageId, args) {
        for (var key in System.page) {
            if (key === pageId) {

                System.configuration.settings.CurrentPage(pageId);

                var page = getPage(pageId);
                
                page.load(args);

                var container = document.getElementById(System.utility.constant.container());

                for (var ii = 0; ii < container.childNodes.length; ii++) {
                    container.removeChild(container.childNodes[ii]);
                }

                container.appendChild(page.html());

                System.application.currentPage(page);

                break;

            }
        }
    };

    base.utility.page = self;
    return base;
})(System || {});