
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix !== undefined && matrix.length > 0) {
    let result = [];
    let i = 0;
    while (i < matrix.length) {
      i % 2 ===  0 ? result.push(matrix[i]) : result.push(matrix[i].sort((a, b) => b - a));
      i++;
    }
    return result.flat(Infinity);
  } else return [];
}
