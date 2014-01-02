var System = System || {}; // #IGNORE

System.event = System.event || {};

System.event.handler = (function () {
    var self = {};

    //Property: handlers
    (function () {

        var executeHandler = function (event) {

            var control = System.application.currentPage().focusedControl();

            if (control.type() === "list" || control.type() === "grid") {
                control = control.current();
            }

            if (control.hasHandlerFor(event)) {
                control.handler(event)(control);
            }

        };

        self.execute = function (event) {
                executeHandler(event);

                if (System.navigation.handler.isNavigationEvent(event)) {
                    System.navigation.handler.execute(event);
                }
            
        };

    })();

    return self;
})();
