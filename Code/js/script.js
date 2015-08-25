
  // create the module and name it mylinkApp
var app =  angular.module('mylinkApp',['ngRoute']);


 // configure our routes
app.config(['$routeProvider',
    function($routeProvider){
      $routeProvider

      // route for the home page
         .when('/', {
                templateUrl : '../Code/HtmlFiles/home.html',
                controller  : 'myController'
            })

            // route for the about page
            .when('/about', {
                templateUrl : '../Code/HtmlFiles/about.html',
                controller  : 'aboutController'
            })

            // route for sitemap page
            .when('/siteMap', {
                templateUrl :   '../Code/HtmlFiles/siteMap.html',
                controller  : 'sitemapController'
            });
    }]);




    

   
