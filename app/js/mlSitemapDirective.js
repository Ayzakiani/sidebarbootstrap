(function() {
  angular.module('mylinkApp')
    .directive('mlSitemap', function() {

      return {
        scope: {},

        templateUrl: '../app/Templates/mlSitemapDirective.html',

        controller: ['$scope', function ($scope) {
          $scope.rowLength = 3;      
          var currentPlayer = 'X';
          var playerOne = true;
          var playerTwo = false;
        
          $scope.convertToArray = function (num) {
            return new Array(num);
          }
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
          	message.innerHTML = '';
            create2dArray(num);
            $scope.gameboard_rows = document.getElementById('gameboard_rows');
            minimum_winning_streak_length = $scope.streakLength;
            document.getElementById('game_play').style.display = 'block';
          }

          $scope.oncheck = function (row, cell) {
          	if($scope.gameFieldArray[row][cell] === false)
          	{ 
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
         				 var checkforWinner = function (){
	                 	checkAllRows();
	          				checkAllColumns();
	          		  	checkDiagonal1();
	          		  	checkDiagonal2();
         				  }
          		  
          		  var checkAllRows = function(){
          		  	for (var i = 0; i < $scope.rowLength; i++ ){ 
          		  	var counter = 0; 
			          		for (var j = 0; j < $scope.rowLength; j++){
			          			if(currentPlayer){
			          		  	if($scope.gameFieldArray[i][j] == currentPlayer){
			          		 		 	counter++;
			         						if (counter === $scope.streakLength){
			          		 		 		message.innerHTML = currentPlayer + ' wins!';
			          		 		 		return true;
			          		 		 	} 	
			          		 		} else {
			          		 			counter = 0;
			          		 		}
			          		  }
			          		}
			          	}
			          	return false;
			          }	

          		 	var checkAllColumns = function (){         		 	
          		 		for (var i = 0; i < $scope.rowLength; i++ ){ 
          		 			var counterOne = 0;	 
			          		  for (var j = 0; j < $scope.rowLength; j++){
			          			if(currentPlayer){
          		 					if($scope.gameFieldArray[j][i] == currentPlayer){
          		 					  counterOne++;
          		 		 				 if (counterOne === $scope.streakLength){
          		 		 		        message.innerHTML = currentPlayer + ' wins!';
          		 		 	        	return true;
          		 		 	        }
          		 		        } else {
          		 			        counterOne = 0;
          		 		 				}         
          		 					}
          		 				}
          		 			}
          		 			return false;
          		 		}
          		 	
          		 	var checkDiagonal1 = function (){
          		 		for (var i = 0; i < $scope.rowLength; i++ ){  
          		 				var counterTwo = 0;
			          		for (var j = 0; j < $scope.rowLength; j++){
			          			if(currentPlayer){
          		 					if($scope.gameFieldArray[j][j] == currentPlayer){
          		 		  		counterTwo++;
          		 		  			if (counterTwo === $scope.streakLength){
          		 		 					message.innerHTML = currentPlayer + ' wins!';
          		 		 					return true;
          		 		 				}
          		 				} else {
          		 					counterTwo = 0;
          		 	 			}
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
											message.innerHTML = currentPlayer + ' wins!';
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

