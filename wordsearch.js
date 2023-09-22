// Pair programming with @csnow28
// transpose the array (switch columns with rows and vice versa) in a new array
const transpose = (array) => {
  const numRow = array.length;
  const numCol = array[0].length;

  const arrayTransposed = [];

  // for each column in the current array, create a row in the new array
  for (let col = 0; col < numCol; col++) {
    arrayTransposed[col] = [];
    // for each value in the current array, put it into the opposite position in the new array
    for (let row = 0; row < numRow; row++) {
      arrayTransposed[col][row] = array[row][col];
    }
  }

  return arrayTransposed;
};

// Return a boolean to indicate whether a word is in a 2D array of letters
const wordSearch = (letters, word) => {
  // if the array is empty
  if (!letters.length) {
    return false;
  }

  // search for the word horizontally
  // join all the letters in each row of the 2D array
  const horizontalJoin = letters.map(ls => ls.join(''));
  for (const line of horizontalJoin) {
    if (line.includes(word)) return true;
  }

  // search for the word vertically
  // transpose the 2D array, then join all the letters in each row of the 2D array
  const verticalJoin = transpose(letters).map(ls => ls.join(''));
  for (const line of verticalJoin) {
    if (line.includes(word)) return true;
  }
  
  return false;
};

module.exports = wordSearch