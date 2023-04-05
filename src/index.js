console.log("connected")

let chessboard = new Array(8);
for (let i = 0; i < 8; i++){
    chessboard[i] = new Array(8).fill(null)
}

function getKnightMoves(position) {
    let moves = [];
    let row = position[0];
    let col = position[1];
  
    if (row - 2 >= 0 && col - 1 >= 0) {
      moves.push([row - 2, col - 1]);
    }
    if (row - 2 >= 0 && col + 1 < 8) {
      moves.push([row - 2, col + 1]);
    }
    if (row - 1 >= 0 && col - 2 >= 0) {
      moves.push([row - 1, col - 2]);
    }
    if (row - 1 >= 0 && col + 2 < 8) {
      moves.push([row - 1, col + 2]);
    }
    if (row + 1 < 8 && col - 2 >= 0) {
      moves.push([row + 1, col - 2]);
    }
    if (row + 1 < 8 && col + 2 < 8) {
      moves.push([row + 1, col + 2]);
    }
    if (row + 2 < 8 && col - 1 >= 0) {
      moves.push([row + 2, col - 1]);
    }
    if (row + 2 < 8 && col + 1 < 8) {
      moves.push([row + 2, col + 1]);
    }
  
    return moves;
  }
  

  function findShortestPath(start, end) {
    let queue = [[start]];
    let visited = new Set();
    visited.add(start);
  
    while (queue.length > 0) {
      let path = queue.shift();
      let position = path[path.length - 1];
  
      if (position[0] === end[0] && position[1] === end[1]) {
        return path;
      }
  
      let knightMoves = getKnightMoves(position);
  
      for (let move of knightMoves) {
        if (!visited.has(move)) {
          let newPath = [...path, move];
          queue.push(newPath);
          visited.add(move);
        }
      }
    }
  
    return null; // No path found
  }
  

console.log(findShortestPath([3,1],[7,2]))