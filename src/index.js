module.exports = function solveSudoku(matrix) {

  let blockers = {}; // if matching noumber is founded add it to the object
  let takenNumbers;
  let zeros = 1;

  while (zeros > 0) {
    zeros = 0;

    for (let vertical = 0; vertical < matrix.length; vertical++) {
      for (let horizontal = 0; horizontal < matrix.length; horizontal++) {
        if (matrix[vertical][horizontal] === 0) { // do sth if 0 is founded

          blockers = {}; // reset for each time   
          for (let number = 0; number < 9; number++) { // in a row
            if (matrix[vertical][number] > 0) {
              blockers[matrix[vertical][number]] = true;
            }
            if (matrix[number][horizontal] > 0) { // in a column
              blockers[matrix[number][horizontal]] = true;
            }
          }
          for (let verticalBox = Math.floor(vertical / 3) * 3; verticalBox < Math.floor(vertical / 3) * 3 + 3; verticalBox++) { // in a box; Math.floor(vertical/3)*3 - seting the initial vertical id of box
            for (let horizontalBox = Math.floor(horizontal / 3) * 3; horizontalBox < Math.floor(horizontal / 3) * 3 + 3; horizontalBox++) {
              if (matrix[verticalBox][horizontalBox] > 0) {
                blockers[matrix[verticalBox][horizontalBox]] = true;
              }
            }
          }
          takenNumbers = Object.keys(blockers);
          if (takenNumbers.length === 8) { // filling the cell with only one possibility
            for (let possibility = 1; possibility <= 9; possibility++) {
              if (takenNumbers.indexOf(String(possibility)) < 0) {
                matrix[vertical][horizontal] = possibility;
              }
            }
          } else { // increment the counter of nonobvious zeros
            zeros++;
          }
        }
      }

    }

  }



  return matrix
}
