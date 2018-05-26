function getAverage(marks){
  var jumlah = 0
  
  for(var a = 0; a < marks.length; a++){
    jumlah += marks[a]
  }

  return Math.floor(jumlah / marks.length)
}
console.log(getAverage([2, 2, 2, 2]))//2
console.log(getAverage([1,2,3,4,5,]))//3
console.log(getAverage([1,1,1,1,1,1,1,2]))//1
console.log(getAverage([16,19,9,15,15,19,3]))//13