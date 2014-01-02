var System = System || {}; // #IGNORE
System.page = System.page || {};

System.page.Home = function () {

    var divshowDesc = "";

    var self = new System.page.Base({
        id: System.utility.constant.page.home(),
        class: "page"
    });

    var init = function () {
        self.addControl(new System.control.Label({ id: "lblText", text: "Hello World!", class: "hello-world" }));
        var btn = new System.control.Button({
            id: "btnSubmit",
            text: "Submit",
            class: "btn",
            events: {
                click: function () {
                    alert('Hello World!');
                }
            }
        });

        self.addControl(btn);

        self.focus(btn);
    };

    self.load = function (args) {
        init();
    };

    return self;

};