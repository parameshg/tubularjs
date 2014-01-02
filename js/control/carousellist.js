var System = System || {}; // #IGNORE

System.control = System.control || {};

System.control.Carousellist = function (args) {

    var self = System.type.extend(System.control.Base, args);

    //Contructor
    self.class("carousel_inner");
    (function (args) {

        if (typeof args !== "undefined" && args !== null) {

            //            var _list = new System.control.List({
            //                id: "carouselItems",
            //                orientation: "vertical",
            //                linear: true,
            //				visibleItemCount:3
            //            });

            var _crslitem;

            var _nowPlaying, _price, _name, _productDesc;

            if (args.productCount() !== "undefined" && args !== null) {

                self.addItem(new System.control.html.Image({ id: "imgUparrow", source: "images/arrow-up.png" }));
                var listcls;
                for (var i = 0; i < args.productCount(); i++) {


                    if (i == 0) {
                        listcls = "carouselLI prod-first";
                    }
                    else if (i == 1) {
                        listcls = "carouselLI prod-middle";
                    }
                    else if (i == 2) {
                        listcls = "carouselLI prod-last";
                    }
                    else {
                        listcls = "carouselLI invisible";
                    }
                    self.addItem(new System.control.Carousel({
                        id: "crslitem" + i,
                        class: listcls,
                        source: args.productItem(i).image().url(),
                        text: args.productItem(i).name(),
                        webPid: args.productItem(i).webPID(),
                        url: args.productItem(i).image().url(),
                        price: args.productItem(i).priceItem(0).value(),
                        name: args.productItem(i).name()

                    }));

                    /* events: {
                    click: function () {
                    // self.focus(_crslitem);
                    self.redirect(args.product(i).webPID(), args.product(i).name(), args.product(i).name(), args.product(i).name());
                    console.log("image Click Event!");
                    }
                    } */
                }
                self.addItem(_list);
                //self.focus(_list);
                self.addItem(new System.control.html.Image({ id: "imgDownarrow", source: "images/arrow-down.png" }));

            }
        }

    })(args);

    return self;
};