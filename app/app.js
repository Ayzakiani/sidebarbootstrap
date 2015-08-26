// (function (angular) {
//   // create the module and name it mylinkApp
//   angular.module('mylinkApp',['ngRoute','aboutController'])

//   // configure our routes
//   .config(['$routeProvider', function ($routeProvider) {
      
//       $routeProvider.when('/home', {
//         // route for the home page
//         templateUrl : 'views/home.html'    
      
//       }).when('/about', {
//         // route for the about page
//         templateUrl : 'views/about.html'
//         // controller  : 'aboutController'
      
//       }).when('/siteMap', {
//         // route for sitemap page
//         templateUrl :  'views/siteMap.html'
//         // controller  : 'sitemapController'
      
//       })
//       .otherwise({ redirectTo: '/home'});
//   }])
// })(window.angular);
var app =  angular.module('mylinkApp',['ngRoute']);


 // configure our routes
app.config(['$routeProvider',
    function($routeProvider){
      $routeProvider

      // route for the home page
         .when('/home', {
                templateUrl : 'views/home.html'               
            })

            // route for the about page
            .when('/about', {
                templateUrl : 'views/about.html'
                // controller  : 'aboutController'
            })

            // route for sitemap page
            .when('/siteMap', {
                templateUrl :   'views/siteMap.html'
                // controller  : 'sitemapController'
            })
            .otherwise({ redirectTo: '/home'});
    }]);
