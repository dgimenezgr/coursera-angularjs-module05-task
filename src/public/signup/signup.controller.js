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

      signUpCtrl.signUp = function() {

        if (Object.keys(signUpCtrl.loginInfo).length === 0 && signUpCtrl.loginInfo.constructor === Object) {
          signUpCtrl.loginInfo = {};
        }

        signUpCtrl.isSaved = false;

         
        LoginService.getLoginFavoriteDish(signUpCtrl.loginInfo.favorite_dish)
        .then(function (result) {
            signUpCtrl.loginInfo.favorite_dish_info = result;
        })
        .then(function (result) {
          LoginService.setLoginInfo(signUpCtrl.loginInfo);

        }).then(function (result) {
          signUpCtrl.isSaved = true;
        })
        .catch(function (error){
          console.log(error.message);
        });
      };

      signUpCtrl.checkDish = function(short_name) {
        if (signUpCtrl.menuItemShortnames.includes(short_name)) {
          return true;
        }
        return false;
      };
    }
    
    })();
    