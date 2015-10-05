(function() {
  angular.module('mylinkApp')
    .directive('mlSitemap', function() {

      return {
        scope: {},

        templateUrl: '../app/Templates/mlSitemapDirective.html',

        controller: ['$scope', function ($scope) {

         // $scope.streakLength = 3;
          $scope.rowLength = 3;      
          var currentPlayer = 'X';
          var playerOne = true;
          var playerTwo = false;


        
          $scope.convertToArray = function (num) {
            return new Array(num);
          }
          var create2dArray = function (num) {
            $scope.gameFieldArray = new Array(num);
               for (var i = 0; i < num; i++) {
                  $scope.gameFieldArray[i] = new Array(num);
                }
            for (var i = 0; i < $scope.rowLength; i++) {
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
			          		 		 		message.innerHTML = currentPlayer + ' rwins!';
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
          		 		 		        message.innerHTML = currentPlayer + ' cwins!';
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
          		 		 					message.innerHTML = currentPlayer + ' d1wins!';
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
       	 			//for(var j = $scope.rowLength; j >= 0; j--){
       	 				// var j =  $scope.rowLength;
       	 			for(var a = 0; a < $scope.rowLength; a++){
       	 				var counterthree = 0;
       	 				for(var j = $scope.rowLength; j < 0; j--){
       	 				 for(var i = 0; i < j; i++){
									 if(currentPlayer){
									 	if($scope.gameFieldArray[i][i + a] == currentPlayer){
									 	counterthree ++;
									 		if(counterthree === $scope.streakLength){
									 		message.innerHTML = currentPlayer + 'D2wins';
									 		return true;
									 		}
									 	} else{
									 		counterthree = 0;
									 	}		
								 }
								}
							//	j--;
							}
						}
						
						return false;
        	 }

				  
        }]
      }
    });
})();

