(function () {
    "use strict";
    
    angular.module('public')
    .controller('LoginController', LoginController);
    
    LoginController.$inject = ['myInfo','LoginService','ApiPath'];
    function LoginController(myInfo,LoginService,ApiPath) {
      var loginCtrl = this;

      loginCtrl.myInfo = myInfo;
      loginCtrl.imgPath = ApiPath;

      loginCtrl.isInfoEmpty = LoginService.isInfoEmpty();

    }
    
    })();
    