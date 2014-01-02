var System = (function (self) {

    self.js = self.js || {};
    self.css = self.css || {};
    self.type = self.type || {};

    self.js.include = function (path) {
        var js = document.createElement("script");
        js.type = "text/javascript";
        js.src = path;

        document.body.appendChild(js);
    };

    self.css.include = function (path) {
        var head = document.getElementsByTagName("head")[0];

        var css = document.createElement("link");
        css.rel = "stylesheet";
        css.type = "text/css";
        css.href = path;

        head.appendChild(css);
    };

    self.type.extend = function (Type, args) {
        var base = (typeof args !== "undefined" && args !== null)
            ? new Type(args)
            : new Type();

        var derived = Object.create(base);

        derived.base = base;

        return derived;
    };

    self.load = function () {

        self.application = new System.Application();

        //TODO: Generate unique session ID
        self.application.session("todo_generate_unique_id");

        System.utility.page.load(System.utility.constant.page.home());
    };

    self.test = function () {

    };

    return self;

})(System || {});

