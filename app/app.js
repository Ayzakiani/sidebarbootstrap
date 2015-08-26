
  // create the module and name it mylinkApp
var app =  angular.module('mylinkApp',['ngRoute']);


 // configure our routes
app.config(['$routeProvider',
    function($routeProvider){
      $routeProvider

      // route for the home page
         .when('/', {
                templateUrl : '../app/HtmlFiles/home.html'
               
            })

            // route for the about page
            .when('/about', {
                templateUrl : '../app/HtmlFiles/about.html'
                // controller  : 'aboutController'
            })

            // route for sitemap page
            .when('/siteMap', {
                templateUrl :   '../app/HtmlFiles/siteMap.html'
                // controller  : 'sitemapController'
            });
    }]);