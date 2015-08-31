
   //  angular.module('mylinkApp')
   //      .directive('mlHome', function () {
   //          return {

    
   //                templateUrl: '../app/templates/mlHomeDirective.html' ,
              
                     

			// Controller : ['$scope' , '$http' , function ($scope , $location)
   //          {

   //         $scope.submit = function () 
   //         {

   //         this.Firstname = $scope.Firstname,
   //         this.Lastname = $scope.lastname,
   //         this.Username = $scope.Username,
   //         this.Email   = $scope.Email,
   //         this.Password  = $scope.Password,
   //           $location = 'views/about.html'

   //         };
      
   //        }]

   //    }();

   (function () {
  'use strict';

 var app = angular.module('mylinkApp')
    app.directive('mlHome', function () {
      return {
      	 scope:{
                  forminfo:'=info'
                },
        templateUrl: '../app/templates/mlHomeDirective.html' 
    };
});

        

app.controller('FormController', ['$scope', 'userService', function($scope, userService) {
             $scope.userService = userService;
              $scope.user = {

               
                  Firstname: '$scope.Firstname',
                  Lastname:'$scope.Lastname' ,
                  Username: '$scope.Username' ,
                  Email : '$scope.Email' ,
                  Password : '$scope.Password'
                };


 $scope.submit = function() {
                 
                  $scope.userService.setUserFirstName($scope.userinfo.Firstname);
                  $scope.userService.setUserLastname($scope.userinfo.Lastname);
                  $scope.userService.setUserName($scope.userinfo.Username);
                  $scope.userService.setUserEmail($scope.userinfo.Email);
                  $scope.userService.setUserPassword($scope.userinfo.Password);
                  alert($scope.userService.getUserFirstName() + "-- " + $scope.userService.getUserLastName() + "---" + $scope.userService.getUserName() 
                  	+  "-- " + 	$scope.userService.getUserEmail()   + "-- " +    $scope.userService.getUserPassword());
                  //$scope.name=this.user.name;
              };
              }]);


	 app.service('userService', function(){
                var userService = {
                  user: {
                  Firstname: '',
                  Lastname:'' ,
                  Username: '' ,
                  Email : '' ,
                  Password : ''
                  },
                  getUser: function(){
                    return userService.user;
                  },
                  getUserFirstName: function(){
                    return userService.userinfo.Firstname;
                  },
                   getUserLastName: function(){
                    return userService.userinfo.Lastname;
                  },
                   getUserName: function(){
                    return userService.userinfo.Username;
                  },
                  getUserEmail: function(){
                    return userService.userinfo.Email;
                  },
                  getUserPassword: function(){
                    return userService.userinfo.Password;
                  },


                  setFirstname: function(Firstname){
                    userService.userinfo.Firstname = Firstname;
                  },
                  setLastname: function(Lastname){
                   userService.userinfo.Lastname = Lastname;
                  },
                  setUserName: function(Username){
                    userService.userinfo.Username = Username;
                  },

                  setUserEmail: function(Email){
                    userService.userinfo.Email = Email;
                  },
                  setUserPassword: function(Password){
                    userService.userinfo.Password = Password;
                  },
                };
                return userService;
              });

  })();

















//          ['$scope', '$http', function ($scope, $http) {
//           $scope.submit = function () {
// 		   this.Firstname = $scope.Firstname,
// 		   console.log (this.Firstname);
//            this.Lastname = $scope.lastname,
//            this.Username = $scope.Username,
//            this.Email   = $scope.Email,
//            this.Password  = $scope.Password,
           
//             $http.post('/user', {
              
             
//             }).success(function () {
//               $scope.responseMessage = 'You have successfully registered; you can now log in';
//             }).error(function (data, status) {
//               if (status === 400) {ss
//                 $scope.responseMessage = data;
//               } else {
//                 $scope.responseMessage = 'An unknown error has occurred; please try again';
//               }
//             });
//           };
//         }]
//       };
//     });
// })();


