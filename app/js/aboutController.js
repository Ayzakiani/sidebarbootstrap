(function (angular)

 {
var app =	angular.module('mylinkApp')
 	
app.controller('aboutController', ['$scope', 'userService', function($scope, userService)
 { 
                   $scope.userService = userService;
                   $scope.user = $scope.userService.user; 
                   $scope.message = '‘No data to show, user has not submitted form yet’'; 
              

  }]); 
 }); 
  
