(function (angular) {
	angular.module('mylinkApp')
 	
 	.controller('aboutController', function($scope) {
        $scope.message = 'Look! I am an about page.';
    });	
})(window.angular);
