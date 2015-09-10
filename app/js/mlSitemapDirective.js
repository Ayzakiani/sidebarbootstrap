 (function() {
      angular.module('mylinkApp')
          .directive('mlSitemap', function() {

              return {
                  scope: {},

                  templateUrl: '../app/Templates/mlSitemapDirective.html' ,

                  controller: ['$scope' , function($scope) {
                  {
                  	$scope.user.input = "value"
                  	$scope.minimum_winning_streak_length = 3;
					$scope.minimum_row_length = 3;
					$scope.minimum_col_length = 3;
					$scope.array = [];


				}

			
				    
                  }]

                }
             });

               
      })();

      
