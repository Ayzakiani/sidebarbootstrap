 (function() {
     angular.module('mylinkApp')
         .directive('mlSitemap', function() {

             return {
                 scope: {},

                 templateUrl: '../app/Templates/mlSitemapDirective.html',

                 controller: ['$scope', function($scope) {

                     $scope.streak_length = 3;
                     $scope.row_length = 3;
                     $scope.col_length = 3;
                     $scope.directions = [];
                     $scope.gameField = new Array(row_length);

                     // $scope.gameField = [ { 
                     // 	"setvalue_1": false, 
                     // 	"setvalue_2": false 
                     // },
                     // { 
                     // 	"setvalue_1": false, 
                     // 	"setvalue_2": false 
                     // }
                     // ];

                     for (var i = 0; i < row_length; i++) {
                         for (var j = 0; j < row_length; j++) {
                             $scope.gameField[i][j] = {
                                 setvalue_1: false,
                                 setvalue_2: false
                             };
                         }
                     }


                     // $scope.gameField.forEach(function(obj){
                     //           //alert(obj.xyz_1);
                     //     });



                     $scope.getNumber = function(num) {
                         return new Array(num);
                     }




                     $scope.start_new_game = function() {

                         row_length = $scope.row_length;
                         col_length = $scope.row_length;
                         $scope.gameboard_rows = document.getElementById('gameboard_rows');
                         gameboard_rows.innerHTML = '';
                         minimum_winning_streak_length = $scope.streak_length;
                         document.getElementById('game_play').style.display = 'block';
                         $scope.create_game();
                     }



                     $scope.create_game = function() {
                         $scope.gameboard_rows = document.getElementById('gameboard_rows');
                         directions = [-1, //w
                             -(row_length + 1), //nw,
                             -(col_length), //n
                             -(row_length - 1), //ne,
                             1, //e
                             row_length + 1, //ne
                             col_length, //s
                             row_length - 1 //sw
                         ];

                         $scope.message = document.getElementById('message');
                         message.innerHTML = 'Current player: X';

                     }



                     $scope.oncheck = function(row, cell) {
                         $scope.symbol_1 = 'X';
                         $scope.symbol_2 = 'O';


                         //   $scope.xyz_1= false;
                         //   $scope.xyz_2 = false;
                         //   if (player_1 ==  $scope.symbol_1)
                         // {
                         //        $scope.xyz_1= true;
                         //         $scope.xyz_2 =false;
                         //$scope.gameField[row][cell];

                         // if ($scope.gameField[i][j])
                         //  {
                         // setvalue_1 == true;
                         // }
                         // else if ( $scope.gameField[i][j] )
                         // {
                         // setvalue_2 == true;
                         // }


                         if (this.innerHTML != ' ') {
                             return;
                         }

                         $scope.gameField[i][j] = $scope.symbol_1;
                         console.log($scope.symbol_1);
                         this.innerHTML = $scope.symbol_1;
                         var winning_positions = check_for_winner();
                         if (winning_positions.length > 1) {
                             $scope.message.innerHTML = $scope.symbol_1 + 'wins!';

                             for (i = 0; i < winning_positions.length; i++) {

                                 (winning_positions[i]).className += ' winner';


                             }
                         } else {
                             if ($scope.symbol_1 == 'X') {
                                 $scope.symbol_2 = 'O';
                             } else {
                                 $scope.symbol_1 = 'X'
                             }
                             $scope.message.innerHTML = 'Current player: ' + $scope.symbol_1;
                         }
                     }


                     $scope.check_for_winner = function() {
                         var streak_values = [];
						  for(var i = 0; i < row.length; i++) {
						    var value_to_match = row[i];
						    if (value_to_match == ' ') {
						      continue;
						    }
						    for (var k = 0; k < directions.length; k++) {
						      var step = directions[k];
						      streak_values = follow_path('', value_to_match, i, step).split(';');
						      if (streak_values.length >= minimum_winning_streak_length) {
						        return streak_values;
						      }
						    }
						  }
						  return [];
						}


						$scope.follow_path = function (streak_values, value_to_match, position, step) {
                          if (position > -1 && position < row.length) {  
                          if (row[position] == value_to_match) {
                          if (streak_values != '') streak_values += ';' + position;
                           else streak_values = String(position);
                          var next_position = position + step;
                          var relative_row_position = (position+1) % row_length;
                     if ( (step == 1 || (row_length + 1) ) && (next_position % row_length) == 0) 
                           	return streak_values;
                      if ( (step == -1 || -(row_length -1) ) && (next_position % row_length) == row_length - 1) 
                           	return streak_values;
                            return follow_path(streak_values, value_to_match,position + step, step);
                         }
                      }
 
                         return streak_values;
                 };



                   






                 }]

             }
         });


 })();