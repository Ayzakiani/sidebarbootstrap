angular.module('mylinkApp.controllers', [])
  .controller("FormController", function ($scope, $http, $datas)
   
      $scope.FormController = {
      $scope.Firstname = Data.Firstname,
      $scope.Lastname = Data.Lastname,
      $scope.Username = Data.Username,
      $scope.Email = Data.Email,
      $scope.Password = Data.Password
    };
    $scope.submitForm = function() {
      $http.post('views/about.html')
        
  }]);


 