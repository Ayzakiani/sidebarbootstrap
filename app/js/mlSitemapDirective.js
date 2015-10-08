(function() {
  angular.module('mylinkApp')
    .directive('mlSitemap', function() {
      return {
        scope: {

        },
        templateUrl: '../app/Templates/mlSitemapDirective.html',
        controller: ['$scope', function ($scope) {
        	$scope.isClickEnable = true;
          $scope.rowLength = 3; 
          $scope.streakLength = 3;     
          var currentPlayer = 'X';
          var playerOne = true;
          var playerTwo = false;
          $scope.buttonTwo = false;
          
          var create2dArray = function (num) {
          $scope.gameFieldArray = new Array(num);
            for (var i = 0; i < $scope.rowLength; i++) {
            $scope.gameFieldArray[i] = new Array(num);
            	for (var j = 0; j < $scope.rowLength; j++) {
              $scope.gameFieldArray[i][j] = false;
              }
            }
          }
          $scope.startnewGame = function (num) {
          	$scope.isClickEnable = true;
          	$scope.hideForm = true;
          	$scope.buttonTwo = true;
          	$scope.tableHide = false;
         		$scope.convertToArray = function (num) {
           	 return new Array(num);
           	}  
          	$scope.message = '' ;      
          	create2dArray(num);
          }
          $scope.startGame = function (){
          	$scope.hideForm = false;
          	$scope.buttonTwo = false;
          	$scope.tableHide = true;
          }
          $scope.oncheck = function (row, cell) {
          	console.log($scope.isClickEnable);
          	if($scope.gameFieldArray[row][cell] === false){ 
          	$scope.gameFieldArray[row][cell] = currentPlayer;
						checkforWinner();
	            if (playerOne) {
	            currentPlayer = 'O';
	            playerOne = false;
	            playerTwo = true;
	            } else {
	            currentPlayer = 'X';
	            playerOne = true;
	            playerTwo = false;
	              }    	                                 
					  }
          }      
          var checkforWinner = function(){
         		for (var i = 0; i < $scope.rowLength; i++ ){ 
          	var counter = 0; 
          	var counterOne = 0;
          	var counterTwo = 0;
			      	for (var j = 0; j < $scope.rowLength; j++){
			        	if(currentPlayer){
			        		//Checking Winner In All Rows.
			          	if($scope.gameFieldArray[i][j] == currentPlayer){
			          	counter++;
			         			if (counter === $scope.streakLength){
			          		$scope.message = currentPlayer + ' Row wins!';
						        $scope.isClickEnable = false;
						        return true;

			          		} 	
			          	} else {
			          	counter = 0;
			          	}
			          	//Checking Winner In All Columns.
			            if($scope.gameFieldArray[j][i] == currentPlayer){
          		    counterOne++;
          		 			if (counterOne === $scope.streakLength){
          		 			$scope.message = currentPlayer + ' Colunm wins!';
          		 			$scope.isClickEnable = false;
          		 			return true;
          		 	  	}
          		 		} else {
          		 		counterOne = 0;
          		 	 	} 
          		 	 	//Checking Winner In Left Diagonal.
          		 		if($scope.gameFieldArray[j][j] == currentPlayer){
          		 		counterTwo++;
          		 			if (counterTwo === $scope.streakLength){
          		 		  $scope.message = currentPlayer + ' Left Diagonal wins!';
          		 		  $scope.isClickEnable = false;
          		 		 	return true;
          		 		 	}
          		 		} else {
          		 		counterTwo = 0;
          		 	 	}
          		 	 	//Checking Winner In Right Diagonal.
          		 	checkDiagonal2();
			          }
			        }
			      }
			      return false;
			    }	    	 		 
	       	var checkDiagonal2 = function (){
	       	var row = 0;
	       	var counterthree = 0;
	       	 	for(var a = $scope.rowLength - 1; a >= 0; a--){
							if(currentPlayer) {
								if($scope.gameFieldArray[row][a] == currentPlayer) {
								counterthree++;
									if (counterthree === $scope.streakLength) {
									$scope.message = currentPlayer + ' Right Diagonal wins!';
									$scope.isClickEnable = false;
									return true;
									}
								}
							}	
							row++;
						}
						return false;
					}			  
        }]
      }
    });
})();

