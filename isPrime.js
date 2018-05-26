/*
    === isPrime ===

    === PSEUDOCODE ===

    == function isPrime ==
    STORE `a` with value 2 (number)
    
    WHILE `a` < num1
      IF `num1` MOD a = 0 THEN
        DISPLAY `false` 
      ENDIF
      `a` ADD By 1
    ENDWHILE

    DISPLAY `true`

    == function pushPrime ==

    STORE `a` with value `num1` (number)

    IF `num1` > `num2` THEN
      DISPLAY `invalid number prime` 
    ENDIF

    WHILE `a` <= `num2`
      IF `isPrime(`a`)` THEN
        `arrPrime` <- a
      ENDIF
      `a` ADD By 1
    ENDWHILE

    DISPLAY `arrPrime`
*/


function isPrime(num1, num2){
  for(var a = 2; a < num1; a++){
    if(num1 % a === 0 ){
      return false
    }
  }
  return true
}
console.log(isPrime(6))

function pushPrime(num1, num2){
  var arrPrime = []

  if(num1 > num2) return 'Invalid number prime'

  for(var a = num1; a <= num2; a++){
    if(isPrime(a)){
      arrPrime.push(a)
    }
  }

  //return arrPrime
}

console.log(pushPrime(2, 5))//[ 2, 3, 5 ]
console.log(pushPrime(5, 10))//[ 5, 7 ]
console.log(pushPrime(10, 8))//Invalid number prime
console.log(pushPrime(6, 10))


/*
function 1
for(var a = 2; a < num1; a++){
    if(num1 % a === 0){
      return false
    }
  }
  return true

function 2
var arrPrime = []

  //mengecek apakah nilai num1 lebih dari num2 atau tidak
  if(num1 > num2) return 'Invalid number prime'

  for(var a = num1; a <= num2; a++){
    if(isPrime(a)){
      arrPrime.push(a)
    }
  }
  return arrPrime

*/