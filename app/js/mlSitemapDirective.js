(function() {
  angular.module('mylinkApp')
    .directive('mlSitemap', function() {

      return {
        scope: {},

        templateUrl: '../app/Templates/mlSitemapDirective.html',

        controller: ['$scope', function ($scope) {

          $scope.streakLength = 3;
          $scope.rowLength = 3;         
          var currentPlayer = 'X';
          var playerOne = true;
          var playerTwo = false;


          $scope.convertToArray = function (num) {
            return new Array(num);
          }
          $scope.create2dArray = function (num) {
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
            $scope.create2dArray(num);
            $scope.gameboard_rows = document.getElementById('gameboard_rows');
            gameboard_rows.innerHTML = '';
            minimum_winning_streak_length = $scope.streakLength;
            document.getElementById('game_play').style.display = 'block';
          }
          $scope.oncheck = function (row, cell) {
          	if($scope.gameFieldArray[row][cell] === false)
          	{
	            if (playerOne) {
	            	currentPlayer = 'X';
	              playerOne = false;
	              playerTwo = true;
	              } else {
	              currentPlayer = 'O';
	              playerOne = true;
	              playerTwo = false;
	            }
	            $scope.gameFieldArray[row][cell] = currentPlayer;
						}
          }
        }]
      }
    });
})();