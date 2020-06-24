(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['menuItems','LoginService'];
    function SignUpController(menuItems,LoginService) {
      var signUpCtrl = this;

      signUpCtrl.menuItems = menuItems;

      signUpCtrl.signUp = function() {

        if (Object.keys(signUpCtrl.loginInfo).length === 0 && signUpCtrl.loginInfo.constructor === Object) {
          signUpCtrl.loginInfo = {};
        }

        LoginService.setLoginInfo(signUpCtrl.loginInfo);

      }
    }
    
    })();
    