(function() {
    'use strict';
    angular.module('common')
        .service('LoginService', LoginService);
    LoginService.$inject = ['$http', 'ApiPath'];

    function LoginService($http, ApiPath) {
        var service = this;
        var loginInfo = [];
        service.getLoginFavoriteDish = function(favoriteDishShortName) {
            return $http.get(ApiPath + '/menu_items/' + favoriteDishShortName + '.json')
                .then(function success(response) {
                    return response.data;
                }, function error(response) {
                    throw new Error("No such menu number exists. Check our menu to find other great dishes!");
                });
        };

        service.setLoginInfo = function(loginContent) {
            loginInfo = [];
            loginInfo.push(loginContent);
        };
        
        service.getLoginInfo = function() {
            return loginInfo;
        };

        service.isInfoEmpty = function() {
            for(var key in loginInfo) {
                if (loginInfo.hasOwnProperty(key)) {
                    return false;
                }
            }
            return true;
        };

    }
})();