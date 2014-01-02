var System = System || {}; // #IGNORE

System.control = System.control || {};

System.control.Tile = function (args) {

    var self =System.type.extend(System.control.Base, args);

    self.addClass("tile");

    return self;
};