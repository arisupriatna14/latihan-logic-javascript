function layerTopRight(matrix) {
  // remove and store the first row from matrix
  var top = matrix.splice(0, 1);

  // store the right column of the matrix
  var right = [];
  // remove the last column from the matrix
  for (var i = 0; i < matrix.length; i++) {
    var e = matrix[i].splice(-1, 1);
    right.push(e);
  }

  // return the top row and last column elements as a list
  return top.concat(right).join().split()
    // .toString()
    // .split();

  // return top
}
console.log(layerTopRight([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

function layerBottomLeft(matrix) {
  // remove and store the last row from matrix in reverse order
  //console.log('panjang matrix', matrix.length)
  var bottom = matrix.splice(matrix.length - 1, 1)[0].reverse();

  // store the left column of the matrix
  var left = [];

  // remove the first column from the matrix
  for (var i = 0; i < matrix.length; i++) {
    var e = matrix[i].splice(0, 1);
    left.push(e);
  }

  return bottom.concat(left.reverse()).join().split()

  // return the top row and last column elements as a list
  // return bottom
  //   .concat(left.reverse())
  //   .toString()
  //   .split();
}
console.log(layerBottomLeft([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

// // our main spiral function that will
// // return a final spiral ordered list
function spiral(matrix) {
  // where we store our final spiraled list
  var spir = [];

  while (matrix.length > 0) {
    // if only 1 more element left in matrix
    if (matrix.length === 1) {
      spir.push(matrix[0]);
      break;
    }
    
    // return the spiraled list of the top row and
    // right column for this matrix
    var tr = layerTopRight(matrix);
    spir.push(tr);

    // return the spiraled list of the bottom row and
    // left column for this matrix
    var bl = layerBottomLeft(matrix);
    spir.push(bl);
  }
  return spir.join().split()
  //return spir.toString().split();
}
console.log(spiral([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))

// setup a matrix
// var M = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

// // return it in spiral order
// spiral(M);
