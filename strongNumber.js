function strong(n) {
  var stringNumber = String(n)
  var fact = 1
  var arr = []
  
  for(var a = 0; a < stringNumber.length; a++){
    for(var b = Number(stringNumber[a]); b >= 1; b--){
      // console.log(b)
      fact *= b
    }
  }

  return fact
}
console.log(strong(1));//"STRONG!!!"
console.log(strong(2));//"STRONG!!!"
console.log(strong(145));//"STRONG!!!"
console.log(strong(7));//"Not Strong !!"
console.log(strong(93));//"Not Strong !!"
console.log(strong(185));//"Not Strong !!"

