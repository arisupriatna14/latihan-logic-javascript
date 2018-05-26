// HACKTIV8 Live code week 4
//
// Nama: andrawina kirana adi
//
// =======================
// Soal Array 1 - Pair Sum
// =======================
//
// [INSTRUKSI]
// Diberikan 2 input: array dan targetSum
// Output ada berapa pasangan nilai dalam array yang memiliki jumlah sama dengan
// targetSum, sepasang nilai tidak boleh memiliki indeks yang sama
//
// [CONTOH]
// 1)   [1 ,2, 3, 4, 5], targetSum = 8      -->      1
// */
function pairSum(arr, targetSum) {
  var count = 0
  for(var a = 0; a < arr.length; a++){
    for(var b = a + 1; b < arr.length; b++){
      if(arr[a] + arr[b] === targetSum){
        count++
      }
      // console.log(arr[b])
    }
  }
  return count
}
console.log(pairSum([1, 2, 3, 4, 5], 8)); // 1
// console.log(pairSum([3, 2, 1, 5, 2], 4)); // 2
// console.log(pairSum([1, 1, 1], 2)); // 3
// console.log(pairSum([1, 2, 3], 6)); // 0
