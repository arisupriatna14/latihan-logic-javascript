/*
Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 integers. No floats or empty arrays will be passed.

For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

[10, 343445353, 3453445, 3453545353453] should return 3453455.

Hint: Do not modify the original array.
*/
function sumTwoSmallestNumbers(numbers) {  
  var jumlah = 0
  // var numbers = numbers.sort(function(a, b){
  //   return a - b
  // })

  //sort manual
  for(var a= 0; a  < numbers.length; a++){
    var target = numbers[a]
    for(var b = a - 1; b >= 0 && (numbers[b] > target); b--){
      numbers[b+1] = numbers[b]
    }
    numbers[b+1] = target
  }

  for(var a = 0; a < 2; a++){
    jumlah += numbers[a]
  }

  return numbers
};
console.log(sumTwoSmallestNumbers([5, 8, 12, 19, 22]))//13
console.log(sumTwoSmallestNumbers([15, 28, 4, 2, 43]))//6
console.log(sumTwoSmallestNumbers([3, 87, 45, 12, 7]))//10
console.log(sumTwoSmallestNumbers([23, 71, 33, 82, 1]))//24
console.log(sumTwoSmallestNumbers([52, 76, 14, 12, 4]))//16