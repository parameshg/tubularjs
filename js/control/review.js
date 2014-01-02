var System = System || {}; // #IGNORE

System.control = System.control || {};

System.control.Reviewtile = function (args) {

    var self =System.type.extend(System.control.Tile, args);

    var _title = new System.control.Label({ class: "rvwTitle" });
    var _address = new System.control.Label({ class: "rvwAddress" });
    var _image = new System.control.ReviewStar({ class: "rvwRating" });
    var _comment = new System.control.Label({id:"rvwComment", class: "rvwComment" });
    var _state = new System.control.Label({ class: "rvwAddress" });

    //property: reviewId
    (function () {
        var _value = "";

        var setReviewId = function (value) {
            _value = value;
        }
        var getReviewId = function () {
            return _value;
        }

        self.reviewid = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setReviewId(value);
            }
            else {
                return getReviewId();
            }
        }
    })();

    //property: title
    (function () {

        self.title = function (value) {
            _title.text(value);
        };

    })();

    //property: address
    (function () {

        self.address = function (value) {
            _address.text(value);
        };

    })();

    //property: rating
    (function () {

        self.rating = function (value) {
            _image.rating(value);
        };

    })();

    //property: comment
    (function () {

        self.comment = function (value) {
            _comment.text(value);
        };

    })();

    //property: comment
    (function () {

        self.state = function (value) {
            _state.text(value);
        };

    })();

    //Contructor
    (function (args) {

        self.addClass("tile");

        if (typeof args !== "undefined" && args !== null) {
            if (typeof args.reviewid !== "undefined" && args.reviewid !== null) {
                self.reviewid(args.reviewid);
            }
            if (typeof args.title !== "undefined" && args.title !== null) {
                self.title(args.title);
            }
            if (typeof args.address !== "undefined" && args.address !== null) {
                self.address(args.address);
            }
            if (typeof args.rating !== "undefined" && args.rating !== null) {
                self.rating(args.rating);
            }
            if (typeof args.comment !== "undefined" && args.comment !== null) {
                self.comment(args.comment);
            }
            if (typeof args.state !== "undefined" && args.state !== null) {
                self.state(args.state);
            }
        }

        self.addItem(_title);
        self.addItem(_address);
        _image.removeClass("control");
        self.addItem(_image);
        self.addItem(_comment);
        self.addItem(_state);


    })(args);

    return self;
};