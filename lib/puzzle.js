// Select all the tiles
const tiles = document.querySelectorAll('td');

const canMove = (tile) => {
  // TODO: Check if a tile has an empty neighbour
  const tileRow = tile.parentElement.rowIndex;
  const tileIndex = tile.cellIndex;
  // Finding the empty tile position
  const emptyTile = document.querySelector(".empty");
  const emptyTileIndex = emptyTile.cellIndex;
  const emptyTileRow = emptyTile.parentElement.rowIndex;
  // Finding the distance between the empty tile and the current tile
  return (Math.abs((emptyTileRow + emptyTileIndex) - (tileRow + tileIndex)) === 1);
};

// Deciding the move with if statements
// if (emptyTileRow === tileRow) {
//   if (emptyTileIndex === tileIndex - 1 || emptyTileIndex === tilePosition + 1) {
//     move = true;
//   }
// } else if (emptyTileRow === tileRow - 1) {
//   if (emptyTileIndex === tileIndex) {
//     move = true;
//   }
// } else if (emptyTileRow === tileRow + 1) {
//   if (emptyTileIndex === tileIndex) {
//     move = true;
//   }
// }

const moveTile = (element) => {
  // TOOD: Move the tile
  const emptyTile = document.querySelector(".empty");
  emptyTile.innerText = element.innerText;
  emptyTile.classList.toggle("empty");

  element.innerText = "";
  element.classList.toggle("empty");
};

const checkIfPlayerWins = () => {
  // TODO: Check if player has won
  let win = false;

  const winningTiles = '1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,';
  let currentTiles = [];

  tiles.forEach((tile) => {
    currentTiles.push(tile.innerText);
  });

  currentTiles = currentTiles.join();

  if (currentTiles === winningTiles) {
    win = true;
  }

  if (win === true) {
    alert("You won! 😎");
  }
};

// Add event listener on each tile - Do not change the following
tiles.forEach((tile) => {
  tile.addEventListener('click', () => {
    if (canMove(tile)) {
      moveTile(tile);
      checkIfPlayerWins();
    }
  });
});
