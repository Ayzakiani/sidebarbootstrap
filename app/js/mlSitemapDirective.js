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

                      for (var i = 0; i < row_length; i++){
                      	for (var j = 0; j < row_length; j++) {
                     		$scope.gameField[i][j] =  {
                     			setvalue_1: false,
                     			setvalue_2 : false
                     		};		
                      	}
                      }
                   		
                     
                     // $scope.gameField.forEach(function(obj){
                     //           //alert(obj.xyz_1);
                     //     });
                    

                    
                     $scope.getNumber = function(num) {
                         return new Array(num);
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
                      $scope.symbol_1 = 'X' ;
                      $scope.symbol_2 = 'O' ;
                      
     
                      //   $scope.xyz_1= false;
                      //   $scope.xyz_2 = false;
                      //   if (player_1 ==  $scope.symbol_1)
                     	// {
                      //        $scope.xyz_1= true;
                      //         $scope.xyz_2 =false;
                      	$scope.gameField[row][cell]
                              // $scope.gameField.push($scope.row +' '+ $scope.cell);
                               if ($scope.gameField.setvalue_1 == true) {
                               	$scope.symbol_1;
                               }
                               else if ( $scope.gameField.setvalue_2 == true)
                               {
                               	$scope.symbol_2;
                               }


                               

                      //    }
                      //    else if (player_2 ==  $scope.symbol_2)
                      //     {
                      //     	 $scope.xyz_1= false;
                      //     	 $scope.xyz_2 =true;
                      //     	 $scope.gameField.push($scope.row +' '+ $scope.cell);

                      //     }

                     	



                       };



                     

                     

                     $scope.start_new_game = function() {

                         row_length = $scope.row_length;
                         col_length = $scope.row_length;
                         $scope.gameboard_rows = document.getElementById('gameboard_rows');
                         gameboard_rows.innerHTML = '';
                         minimum_winning_streak_length = $scope.streak_length;
                         document.getElementById('game_play').style.display = 'block';
                         $scope.create_game();
                     }

                  

            //         var current_player = 'X';
            // $scope.move = function() {
            //              if (this.innerHTML != ' ') {
            //                  return;
            //              }
            //              $scope.moves[parseInt(this.id)] = current_player;
            //              console.log('All moves:');
            //              console.dir($scope.moves);
            //              this.innerHTML = current_player;

            //              $scope.winning_positions = check_for_winner();
            //              if ($scope.winning_positions.length > 1) {
            //                  $scope.message = document.getElementById('message');
            //                  message.innerHTML = current_player + ' wins!';
            //                  for (i = 0; i < $scope.winning_positions.length; i++) {

            //                      document.getElementById($scope.winning_positions[i]).className += ' winner';
            //                  }
            //              } else {
            //                  if (current_player == 'X') {
            //                      current_player = 'O';
            //                  } else {
            //                      current_player = 'X'
            //                  }
            //                  var message = document.getElementById('message');
            //                  message.innerHTML = 'Current player: ' + current_player;
            //                   }
            //           }




                 }]

             }
         });


 })();