(function () {

    angular.module('mylinkApp')
        .directive('mlHome', function () {
            return {
                templateUrl: '../templates/mlHomeDirective.html',
                controller: ['$scope', function () {
                    alert('ja');
                }]
            };
        };
})();

// angular.module("mylinkApp", [])

// .directive('mlHome', function() {
    
//  var directive = {};
    
//     directive.templateUrl = "../Templates/mlHomeDirective.html"
   
//    directive.controller = function() {
//      alert("hbkjhb");
//    };
//     return directive;
// });
