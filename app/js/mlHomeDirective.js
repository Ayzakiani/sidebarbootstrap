(function () {
    angular.module('mylinkApp')
        .directive('mlHome', function () {
            return {
                templateUrl: '../app/templates/mlHomeDirective.html',
                controller: ['$scope', function () {
                    
                }]
            };
        });
})();
