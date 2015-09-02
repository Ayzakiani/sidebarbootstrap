  var mylinkApp = angular.module('mylinkApp', ['ui.router']);


  mylinkApp.config(['$stateProvider', '$urlRouterProvider',

  function($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/index.html');


    $stateProvider.state('/home', {
      url: "/home",
      templateUrl: "views/home.html",
      controller: 'homeController'
    })
      .state('/about', {
      url: "/about",
      templateUrl: "views/about.html",
      controller: 'aboutController'
    })
      .state('/siteMap', {
      url: "/siteMap",
      templateUrl: "views/siteMap.html",
      controller: 'siteMapController'
    })

  }]);



  mylinkApp.controller('homeController', function($scope) {

    $scope.message = 'Everyone come and see how good I look!';

  });
  mylinkApp.controller('mainController', function($scope, $state) {

    $state.go('/home');
  });

  mylinkApp.controller('aboutController', ['$scope', 'userService', function($scope, userService) {
    $scope.userService = userService;
    $scope.user = $scope.userService.user;
    $scope.message = 'No data to show form not submitted!.';
  }]);

  
  mylinkApp.controller('siteMapController', function($scope) {
    $scope.message = 'Contact us! JK. This is just a demo.';
  });