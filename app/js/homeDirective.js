angular.module("mylinkApp", [])

.directive('homeDirective', function() {
	

  var directive = {};
  	
     directive.templateUrl = "../Templates/homeDirective.html"
   
     directive.controller = function()
     {
alert("hbkjhb");
     };
    return directive;
 
     
});