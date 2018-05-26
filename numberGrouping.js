/*Disediakan sebuah function numberGrouping yang bertugas untuk menerima sebuah parameter berupa angka, 
dan mengembalikan susunan angka baru yang merupakan hasil pengelompokan berdasarkan 3 digit angka. 
Apabila jumlah angka yang belum dikelompokan ada 4 maka akan dibagi menjadi 2 buah 2 digit angka tidak 3 dan 1
Ex: Input: [ 1 , 2 , 3 , 4 , 5 , 6 ]
Output: 123-456
Input: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 1]
Output: 123-456-78-91
Input: [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8]
Output: 123-456-78
*/

function numberGrouping(arr) {
  var str = ''
  var arrNum = []
  for(var a = 0; a < arr.length; a++){
    arrNum.push(arr[a])
    if(arrNum.length === 3){
      for(var b = 0; b < arrNum.length; b++){
        str += arrNum[b] 
      }
      str += '-'
      arrNum = []
    } 
  }

  return str.slice(0, str.length-1)
}
console.log(numberGrouping([1, 2, 3, 4, 5, 6]));//123-456
console.log(numberGrouping([1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 1]))//123-456-78-91
console.log(numberGrouping([1 , 2 , 3 , 4 , 5 , 6 , 7 , 8]))//123-456-78
