

    (function(){
              var mylinkApp = angular.module('mylinkApp');
             mylinkApp.directive('mlHome', function() {
             return {
                scope: {

                     firstname: '=',

                     lastname: '=',

                      username: '=',

                        email: '=',

                      password: '='

                  },
               templateUrl: '../app/Templates/mlHomeDirective.html' 
              };
               
             });
             mylinkApp.controller('MyFormCtrl', ['$scope', 'userService', function($scope, userService) {
               $scope.userService = userService;
                $scope.user = {

                     Firstname: '',
                     Lastname:'' ,
                     Username: '' ,
                     Email : '' ,
                     Password : ''
                  };
   
                $scope.submit = function() {


                  $scope.$broadcast('show-errors-check-validity');

                    if ($scope.myForm.$invalid)
                      { 
                        return;
                        }
               
        $scope.userService.setUserFirstname($scope.user.Firstname);
       $scope.userService.setUserLastname($scope.user.Lastname);
      $scope.userService.setUserUsername($scope.user.Username);
      $scope.userService.setUserEmail($scope.user.Email);
      $scope.userService.setUserPassword($scope.user.Password);

      $scope.msg = 'Form Successfully submitted!';

    };
  }]);

  mylinkApp.service('userService', function() {
    var userService = {
      user: {
        'firstname': '',
        'lastname': '',
        'username': '',
        'email': '',
        'password': ''

      },
      getUser: function() {
        return userService.user;
      },
      getUserFirstname: function() {
        return userService.user.Firstname;
      },
      getUserLastname: function() {
        return userService.user.Lastname;
      },
      getUserUsername: function() {
        return userService.user.Username;
      },

      getUserEmail: function() {
        return userService.user.Email;
      },
      getUserPassword: function() {
        return userService.user.Password;
      },
      setUserFirstname: function(firstname) {
        userService.user.Firstname = firstname;
      },
      setUserLastname: function(lastname) {
        userService.user.Lastname = lastname;
      },
      setUserUsername: function(username) {
        userService.user.Username = username;
     },
      setUserEmail: function(email) {
        userService.user.Email = email;
      },
      setUserPassword: function(password) {
        userService.user.Password = password;
      },

    };
    return userService;

  });
      })();