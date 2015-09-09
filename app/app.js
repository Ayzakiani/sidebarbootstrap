    (function(){
      angular.module('mylinkApp', ['ui.router'])

      .config(['$stateProvider', '$urlRouterProvider',

      function($stateProvider, $urlRouterProvider) {

      
        $stateProvider.state('home', {
          url: '/home',
          templateUrl: 'views/home.html',
     
        })
          .state('/about', {
          url: "/about",
          templateUrl: "views/about.html",
         
        })
          .state('/siteMap', {
          url: "/siteMap",
          templateUrl: "views/siteMap.html",
        
        })


      }]);

  

 })();
 