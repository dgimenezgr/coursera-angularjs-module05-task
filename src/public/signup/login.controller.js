(function () {
    "use strict";
    
    angular.module('public')
    .controller('LoginController', LoginController);
    
    LoginController.$inject = ['myInfo','LoginService'];
    function LoginController(myInfo,LoginService) {
      var loginCtrl = this;

      loginCtrl.myInfo = myInfo;

      console.log('Login Controler My Info: ' + myInfo);
      

    }
    
    })();
    