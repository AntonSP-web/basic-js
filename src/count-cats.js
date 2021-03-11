const CustomError = require("../extensions/custom-error");

module.exports = function countCats(matrix) {
  if(matrix === undefined || matrix === null || matrix.length <= 0) {
    return false;
  }
  let arr = matrix.flat();
  let count = 0;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === '^^') {
      count += 1;
    }
  }
  return count;
};
