/*
=== Codewars: 6 Kyu ===
Definition (Primorial Of a Number)
Is similar to factorial of a number, In primorial, not all the natural numbers get multiplied, only prime numbers are multiplied to calculate the primorial of a number. It's denoted with P#.

Task
Given a number N , calculate its primorial. !alt  !alt

Notes
Only positive numbers will be passed (N > 0) .
Input >> Output Examples:
1- numPrimorial (3) ==> return (30)
Explanation:
Since the passed number is (3) ,Then the primorial should obtained by multiplying 2 * 3 * 5 = 30 .

Mathematically written as , P3# = 30 .
2- numPrimorial (5) ==> return (2310)
Explanation:
Since the passed number is (5) ,Then the primorial should obtained by multiplying 2 * 3 * 5 * 7 * 11 = 2310 .

Mathematically written as , P5# = 2310 .
3- numPrimorial (6) ==> return (30030)
Explanation:
Since the passed number is (6) ,Then the primorial should obtained by multiplying 2 * 3 * 5 * 7 * 11 * 13 = 30030 .

Mathematically written as , P6# = 30030 .
*/
function numPrimorial(n) {
  var primeArr = [];
  var arrSementara = [];
  var resultPrime = [];
  var jumlah = 1;
  for (var a = 2; a < 100; a++) {
    var count = 0;
    for (var b = 2; b < 100; b++) {
      if (a % b === 0) {
        count += 1;
      }
    }
    if (count === 1) {
      primeArr.push(a);
    }
  }

  for (var a = 0; a < primeArr.length; a++) {
    arrSementara.push(primeArr[a]);
    if (arrSementara.length === n) {
      resultPrime.push(arrSementara);
      arrSementara = [];
      break;
    }
  }

  for (var a = 0; a < resultPrime[0].length; a++) {
    jumlah *= resultPrime[0][a];
  }
  return resultPrime;
}
console.log(numPrimorial(3)); //30
console.log(numPrimorial(4)); //210
console.log(numPrimorial(5)); //2310
console.log(numPrimorial(8)); //9699690
console.log(numPrimorial(9)); //223092870

