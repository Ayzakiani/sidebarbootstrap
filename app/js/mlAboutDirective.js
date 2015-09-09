(function() {
	       angular.module('mylinkApp')
	      .directive('mlAbout', function() {

		    return {
			   scope: {
				
			},

			templateUrl: '../app/Templates/mlAboutDirective.html' ,

	        controller: ['$scope', 'userService' , function($scope, userService) {
            $scope.userService = userService;
            $scope.user = $scope.userService.user;
            $scope.message = 'No data to show form not submitted!';
	  	     
                        }]

	  	         }
	        
             });

               
       })();


