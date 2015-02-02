var golApp = angular.module('golApp', [])
golApp.controller('GolController', function($scope){
        $scope.height = 20;
        $scope.width = 10
        $scope.rows = [];

// DISPLAY BOARD




//INITIALIZE NEW GAME
    $scope.newGame = function () {
        $scope.board = init($scope.height, $scope.width)
      }
//GENERATE RANDOM MUTATION



//INITIALIZE NEXT MUTATION
    $scope.nextMutation = function (){

    }



//CHECK/GET NEIGHBORS
  $scope.getNeighbors =function (){

  }

// CHANGE CELL COLOR/CLASS
//$scope.cellClass = function () {
//         if (willDie($scope.board, )) {
//             return "dead";
//         }
//         if (newCell($scope.board, )) {
//             return "alive";
//         }
//         return ;
//     };


//FIND CELL ON BOARD
//function cellId() {
//         return ()
//     }
// }




// WILL LIVE CELLS(Any live cell with two or three live neighbors lives on to the next generation.)
//function willLive() {
//         return cellId() 
//             && getNeighbors() >= 2 
//             && getNeighbors() <= 3;
//     }



// WILL DIE CELLS(Any live cell with fewer than two live neighbors dies && Any live cell with more than three live neighbors dies)
//function willDie() {
//         return cellId() 
//         && (getNeighbors() < 2 
//                 || getNeighbors() > 3);
//     }

// NEW CELLS(Any dead cell with exactly three live neighbors becomes a live cell)
 //function newCell() {
//         return !cellId() 
//             && getNeighbors() == 3;
//     }




    })

    
    
     