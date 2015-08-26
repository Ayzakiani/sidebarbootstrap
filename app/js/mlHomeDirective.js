angular.module("mylinkApp", [])

.directive('mlHome', function() {
	
	var directive = {};
  	
    directive.templateUrl = "../Templates/mlHomeDirective.html"
   
	//   directive.controller = function() {
		// alert("hbkjhb");
	//   };
    return directive;
});