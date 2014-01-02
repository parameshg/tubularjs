var System = System || {}; // #IGNORE

System.entity = System.entity || {};

System.entity.Base = function () {

    var self = {};

    (function () {
        var _value;

        var setMso = function (value) {
            _value = value;
        }
        var getMso = function () {
            return _value;
        }

        self.mso = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setMso(value);
            }
            else {
                return getMso();
            }
        }
    })();

    (function () {
        var _value;

        var setVersion = function (value) {
            _value = value;
        }
        var getVersion = function () {
            return _value;
        }

        self.version = function (value) {
            if (typeof value !== "undefined" && value !== null) {
                setVersion(value);
            }
            else {
                return getVersion();
            }
        }
    })();

    return self;
};