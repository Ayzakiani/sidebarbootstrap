  (function() {
      angular.module('mylinkApp')
          .directive('mlHome', function() {

              return {
                  scope: {},

                  templateUrl: '../app/Templates/mlHomeDirective.html',

                  controller: ['$scope', 'userService', function($scope, userService) {
                      $scope.userService = userService;
                      $scope.user = {
                          firstname: '',
                          lastname: '',
                          Username: '',
                          email: '',
                          password: ''

                      };
                      $scope.submit = function() {

                          var firstnameregEx = /^[a-zA-Z0-9]+$/;
                          var lastnameregEx = /^[a-zA-Z0-9]+$/;
                          var UsernameregEx = /^([a-zA-Z0-9]|@|_)+$/;
                         

                          if (!firstnameregEx.test($scope.user.Firstname) || !lastnameregEx.test($scope.user.Lastname) || !UsernameregEx.test($scope.user.Username))
                          {
                              return false;
                          } else {
                              $scope.userService.setUserFirstname($scope.user.Firstname);
                              $scope.userService.setUserLastname($scope.user.Lastname);
                              $scope.userService.setUserUsername($scope.user.Username);
                              $scope.userService.setUserEmail($scope.user.Email);
                              $scope.userService.setUserPassword($scope.user.Password);
                              $scope.msg = 'Form Successfully submitted!';
                          }
                      };
                  }]
              }
          });
  })();