angular.module('mylinkApp.controllers', [])
  .controller('MyFormControl', ['$scope', function($scope) {
    $scope.formInfo = {};
    $scope.saveData = function() {
      // $scope.firstnameRequired = '';
      //  $scope.lastnameRequired = '';
      // $scope.emailRequired = '';
      //  $scope.usernameRequired = '';
      // $scope.passwordRequired = '';

      // if (!$scope.formInfo.FirstName) {
      //   $scope.nameRequired = 'First Name Required';
      // }
      // if (!$scope.formInfo.Name) {
      //   $scope.lastnameRequired = 'Last Name Required';
      // }
      // if (!$scope.formInfo.Name) {
      //   $scope.emailRequired = 'Email Required';
      // }

      // if (!$scope.formInfo.Email) {
      //   $scope.usernameRequired = 'User Name Required';
      // }

      // if (!$scope.formInfo.Password) {
      //   $scope.passwordRequired = 'Password Required';
      // }
    };
  }])