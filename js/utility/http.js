var System = (function (base) {

    var self = {};

    if (typeof base.utility === "undefined" || base.utility === null) {
        base.utility = {};
    }

    if (typeof base.utility.http === "undefined" || base.utility.http === null) {
        base.utility.http = {};
    }

    self.get = function (url, param, callback) {
        var xmlHttp = new XMLHttpRequest();
        var result = '';


        if (xmlHttp == null) {
            alert('Browser does not support Ajax');
        }
        else {
            try{
                xmlHttp.open("GET", url, true);
                xmlHttp.send(null);
                xmlHttp.onreadystatechange = function () {
                    if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
                        callback(xmlHttp.responseText);
                    }
                }
                xmlHttp.onerror = function (e) {
                    System.utility.page.load(System.utility.constant.page.error(), { GPEC: "" });
                };
            }
            catch(e) {
                System.utility.page.load(System.utility.constant.page.error(), { GPEC: ""});
            }
        }
    }

    self.post = function (url, params) {
    };

    base.utility.http = self;
    return base;

})(System || {});