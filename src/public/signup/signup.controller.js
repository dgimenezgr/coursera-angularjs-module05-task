(function () {
    "use strict";
    
    angular.module('public')
    .controller('SignUpController', SignUpController);
    
    SignUpController.$inject = ['menuItems','LoginService'];
    function SignUpController(menuItems,LoginService) {
      var signUpCtrl = this;

      signUpCtrl.menuItems = menuItems;

      signUpCtrl.menuItemShortnames = [];

      var menuItem = "";

      for (menuItem in signUpCtrl.menuItems.menu_items) {
        var menuItemShortname = signUpCtrl.menuItems.menu_items[menuItem].short_name;
        signUpCtrl.menuItemShortnames.push(menuItemShortname);
      }

      console.log(signUpCtrl.menuItemShortnames);
      
      signUpCtrl.signUp = function() {

        if (Object.keys(signUpCtrl.loginInfo).length === 0 && signUpCtrl.loginInfo.constructor === Object) {
          signUpCtrl.loginInfo = {};
        }

        LoginService.setLoginInfo(signUpCtrl.loginInfo);

      }

      signUpCtrl.checkDish = function(short_name) {
        if (signUpCtrl.menuItemShortnames.includes(short_name)) {
          return true;
        }
        return false;
      }
    }
    
    })();
    