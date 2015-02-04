var columns = 10;
var rows = 10;
var newRows  = 10;
var newColumns = 10;
console.log("Hello")
angular.module('App', [])
  .factory('grid', function(){
    var grid = [];
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min)) + min;
    }
    
    function buildGrid(rows, columns) { 
      // clear grid
      grid = [];
      // repaint
      for(var c = 0; c < columns; c++) {
        var column = [];
        for(var r = 0; r < rows; r++) {
          
          var cell = { alive: (getRandomInt(0,2) === 1) };
          
          column.push(cell);
        };
        grid.push(column);
      };
      
      return grid;
    }
    return {
      init: buildGrid
    }
    function nextGrid(newRows, newColumns){
      // clear grid
     var newGrid = [];
      // repaint
      for(var c = 0; c < newColumns; c++) {
        var newColumn = [];
        for(var r = 0; r < newRows; r++) {
          newColumn.push(willLive(grid, r, c) || newCell(grid, r, c))
         };
         newGrid.push(newColumn);
        };
    return newGrid;
  }
  return {
    init: newGrid
  }
  })
  .controller('GridCtrl', function($scope, grid) {
    $scope.newGrid = grid.init(newRows, newColumns);
    $scope.grid = grid.init(rows, columns);  
    $scope.isAlive = function(cell) {
      return cell.alive;
    }
    $scope.isDead = function(cell) {
      return !cell.alive;
    }
    $scope.build = function() {
      $scope.grid = grid.init(rows, columns);
    };
    $scope.next = function(){
      $scope.newGrid = newGrid.init(newRows, newColumns);

    }
    // window.opposite = function(r,c) {
    //   $scope.$apply(function() {
    //     $scope.grid[r][c].alive = !$scope.grid[r][c].alive;
    //   }); 
    // }; 
  });
// WILL LIVE CELLS(Any live cell with two or three live neighbors lives on to the next generation.)
// if cell == alive && 2 or 3 neighbors are alive == alive(stay green) 

willLive = function(grid, row, cell){
  return cellId(grid, row, cell) && getNeighbors(grid, row, cell) >= 2
                                 && getNeighbors(grid, row, cell) <= 3;
}

// WILL DIE CELLS(Any live cell with fewer than two live neighbors dies && Any live cell with more than three live neighbors dies)
// if cell == alive && has < 2 live nieghbors or > 3 live neighbors == dead(grey)
  willDie = function(grid, row, cell){
    return cellId(grid, row, cell) && (getNeighbors(grid, row, cell) < 2 
                                   || (getNeighbors(grid, row, cell) > 3))};

// NEW CELLS(Any dead cell with exactly three live neighbors becomes a live cell)
// if cell == dead && has === 3 live neighbors == alive(green)
 newCell = function(grid, row, cell){
   return !cellId(grid, row, cell) && getNeighbors(grid, row, cell) === 3; 
 }
 
 //CHECK/GET NEIGHBORS
 getNeighbors = function(grid, row, cell){
        var neighbor = 0;
   neighbor += cellId(grid, row - 1, cell - 1) ? 1 : 0;
   neighbor += cellId(grid, row - 1, cell + 0) ? 1 : 0;
   neighbor += cellId(grid, row - 1, cell + 1) ? 1 : 0;
   neighbor += cellId(grid, row + 0, cell - 1) ? 1 : 0;
   neighbor += cellId(grid, row + 0, cell + 1) ? 1 : 0;
   neighbor += cellId(grid, row + 1, cell - 1) ? 1 : 0;
   neighbor += cellId(grid, row + 1, cell + 0) ? 1 : 0;
   neighbor += cellId(grid, row + 1, cell + 1) ? 1 : 0;
   return neighbor;
      }
 
//FIND CELL ON BOARD
 cellId = function(grid, row, cell){
      return  (row >= 0 && row < grid.length &&
               cell >= 0 && cell < grid[row].length && 
               grid[row][cell]);
    };

function next(grid){
    // clear grid
     var newGrid = [];
      // repaint
      for(var c = 0; c < columns; c++) {
        var newColumn = [];
        for(var r = 0; r < rows; r++) {
          newColumn.push(willLive(grid, r, c) || newCell(grid, r, c))
         };
         newGrid.push(newColumn);
        };
    return newGrid;
  }

