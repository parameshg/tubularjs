var System = System || {}; // #IGNORE

System.control = System.control || {};

System.control.Popup = function (args) {

    var self =System.type.extend(System.control.Container, args);

    self.addClass("popup");

    //Constructor
    (function (args) {

        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.id !== "undefined" && args.id !== null) {
                self.id(args.id);
            }

            if (typeof args.class !== "undefined" && args.class !== null) {
                self.class(args.class);
            }

//            self.popUp = new System.control.Base({
//                id: "popUp",
//                class: "pstyle"
//            });

             self.addItem(new System.control.Label({
                id: "txtmsg",
                class: "",
                text: "For security purposes, you will be automatically logged out of tubular Shop by Remote due to inactivity. Please select “OK” if you want to prevent this and continue shopping."
            }));

//            self.divOk = new System.control.Base({
//                id: "divOk",
//                class: "sessionbutton-container"
//            });

            //Login Button Submit
//            self.btnOk = new System.control.html.Input({
//                id: "btnOK",
//                class: "",
//                value: "OK",
//                type: "button"
            //            });

            self.btnOk=new System.control.Button({
                id: "btnPopup",
                class: "popup-button",
                text: "OK",
                events: {
                    click: function () {
                        //                self.buy(_detail.webPID());
                        console.log("buy button Click Event!");
                    }
                }
            });

            //self.divOk.addItem(self.btnOk);
            //self.addItem(self.label);
            self.addItem(self.btnOk);
            self.focus(self.btnOk);
            //self.addItem(self.popUp);

//            self.divOk.addItem(self.btnOk);
//            self.popUp.addItem(self.label);
//            self.popUp.addItem(self.divOk);
//            self.addItem(self.popUp);
        }

    })(args);

    return self;
};