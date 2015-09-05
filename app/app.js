  var mylinkApp = angular.module('mylinkApp', ['ui.router']);


  mylinkApp.config(['$stateProvider', '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/index.html');


    $stateProvider.state('/home', {
      url: "/home",
      templateUrl: "views/home.html",
 
    })
      .state('/about', {
      url: "/about",
      templateUrl: "views/about.html",
      controller: 'aboutController'
    })
      .state('/siteMap', {
      url: "/siteMap",
      templateUrl: "views/siteMap.html",
    
    })

  }]);

  mylinkApp.controller('mainController', function($scope, $state) {
     
 
  });

  mylinkApp.controller('aboutController', ['$scope', 'userService', function($scope, userService) {
    $scope.userService = userService;
    $scope.user = $scope.userService.user;
    $scope.message = 'No data to show form not submitted!.';
  }]);

  
 