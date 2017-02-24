(function () {
    //index module
    angular.module("AppModule", ["ngRoute","ui.bootstrap"]);
    
    //constants
    angular.module("AppModule")
            .constant("systemConfig", {
                apiUrl:
                        location.hostname === 'localhost'
                        ? "http://localhost:8080"
                        : location.protocol + "//" + location.hostname
            });
}());
