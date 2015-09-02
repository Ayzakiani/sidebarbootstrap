


var mylinkApp =  angular.module('mylinkApp', ['ui.router']);

 // configure our routes
mylinkApp.config(['$stateProvider', '$urlRouterProvider',
   
    function ($stateProvider, $urlRouterProvider) { 
     
      $urlRouterProvider.otherwise('/index.html');
    //home

  $stateProvider 
                .state('/home', { 
                         url:"/home", 
                        templateUrl: "views/home.html", 
                        controller: 'homeController' 
                      }) 
                 .state('/about',   { 
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
                  // create a message to display in our view 
                   $scope.message = 'Everyone come and see how good I look!'; 

                }); 
 mylinkApp.controller('mainController', function($scope,$state) { 
               // create a message to display in our view 
                 // $scope.message = 'Everyone come and see how good I look!'; 
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
