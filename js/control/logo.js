var System = System || {}; // #IGNORE
System.control = System.control || {};
System.control.Logo = function (args) {
    var self =System.type.extend(System.control.html.Image, args);

    //    //Property: type
        (function () {
            var _value = "component";

            self.type = function () {
                return _value;
            };
        })();

    //Contructor
    (function (args) {

        self.source( "images/logo-new.png" );
        
    })(args);

    return self;
};