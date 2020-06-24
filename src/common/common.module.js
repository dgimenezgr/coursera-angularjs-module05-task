(function() {
"use strict";

angular.module('common', [])
.constant('ApiPath', 'https://intense-woodland-78200.herokuapp.com/')
.config(config);

config.$inject = ['$httpProvider'];
function config($httpProvider) {
  $httpProvider.interceptors.push('loadingHttpInterceptor');
}

})();
