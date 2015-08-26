angular.module("mylinkApp", [])

.directive('homeDirective', function() {
	

  var directive = {};
  	
     directive.templateUrl = "../Template/homeDirective.html";
     directive.controller = function()
     {
alert("hbkjhb");
     };
    return directive;
 
     
});