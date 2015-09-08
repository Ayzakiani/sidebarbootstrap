  (function() {
          angular.module('mylinkApp')
              .directive('mlHome', function() {

                  return {
                      scope: {},

                      templateUrl: '../app/Templates/mlHomeDirective.html',

                      controller: ['$scope', 'userService' ,function($scope ,userService ) {
                          $scope.userService = userService;
                          $scope.user = {
                              firstname: '',
                              lastname: '',
                              Username: '',
                              email: '',
                              password: ''

                               };
                          $scope.submit = function() {
                              $scope.userService.setUserFirstname($scope.user.Firstname);
                              $scope.userService.setUserLastname($scope.user.Lastname);
                              $scope.userService.setUserUsername($scope.user.Username);
                              $scope.userService.setUserEmail($scope.user.Email);
                              $scope.userService.setUserPassword($scope.user.Password);
                              console.log($scope.userService);  
                              $scope.msg = 'Form Successfully submitted!';
                          
                          };
                    }]
                  }
                });
              })();
                  
                 

