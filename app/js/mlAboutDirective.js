(function() {
	var mylinkApp = angular.module('mylinkApp')
	mylinkApp.directive('mlAbout', function() {
		return {

			templateUrl: '../app/Templates/mlAboutDirective.html'
		};

	});
})();