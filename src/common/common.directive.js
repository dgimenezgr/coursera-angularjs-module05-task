(function() {
    "use strict";
    
    angular.module('common')
    .directive('shortnames', function (){ 
        return {
        require: 'ngModel',
        link: function(scope, elem, attr, ngModel) {
            var shortnames = attr.shortnames.replace('[','').replace(/"/g,'').replace(']','').split(",");
            var shortname = attr.shortname;
      
            ngModel.$parsers.unshift(function(shortname) {
                var valid = shortnames.indexOf(shortname) !== -1;

                ngModel.$setValidity('shortnames', valid);

                return valid ? shortname : undefined;
            });
            }
        };
    });
})();

