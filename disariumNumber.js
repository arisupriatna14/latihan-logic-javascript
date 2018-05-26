/*
Definition
Disarium number is the number that The sum of its digits powered with their respective positions is equal to the number itself.

Task
Given a number, Find if it is Disarium or not .

Warm-up (Highly recommended)
Playing With Numbers Series
Notes
Number passed is always Positive .
Return the result as String
Input >> Output Examples
1- disariumNumber(89) ==> return "Disarium !!"
Explanation:
Since , 81 + 92 = 89 , thus output is "Disarium !!"
2- disariumNumber(564) ==> return "Not !!"
Explanation:
Since , 51 + 62 + 43 = 105 != 546 , thus output is "Not !!"
[LINK]: https://www.codewars.com/kata/5a53a17bfd56cb9c14000003/train/javascript
*/
function disariumNumber(n){
  var hasil = 0
  var stringNumber = String(n)
  var arr = []
  var count = 0

  for(var a = 1, b = 0; a <= stringNumber.length; a++, b++){
    hasil = Math.pow(Number(stringNumber[b]), a)
    arr.push(hasil)
  }

  for(var a = 0; a < arr.length; a++){
    count += arr[a]
  }

  var countString = String(count)
  if(stringNumber === countString){
    return "Disarium !!"
  } else {
    return "Not !!"
  }

}
console.log(disariumNumber(89))//"Disarium!!"
console.log(disariumNumber(564))//"Not !!"
console.log(disariumNumber(1024))//"Not !!"
console.log(disariumNumber(135))//"Disarium!!"
console.log(disariumNumber(136586))//"Not !!"