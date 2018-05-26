/*
Task
Given an array/list [] of n integers , find maximum triplet sum in the array Without duplications .

Notes :
Array/list size is at least 3 .

Array/list numbers could be a mixture of positives , ngatives also zeros .

Repeatition of numbers in the array/list could occur , So (duplications are not included when summing).

Input >> Output Examples
1- maxTriSum ({3,2,6,8,2,3}) ==> return (17)
Explanation:
As the triplet that maximize the sum {6,8,3} in order , their sum is (17)

Note : duplications are not included when summing , (i.e) the numbers added only once .

2- maxTriSum ({2,1,8,0,6,4,8,6,2,4}) ==> return (18)
Explanation:
As the triplet that maximize the sum {8, 6, 4} in order , their sum is (18) ,
Note : duplications are not included when summing , (i.e) the numbers added only once .
3- maxTriSum ({-7,12,-7,29,-5,0,-7,0,0,29}) ==> return (41)
Explanation:
As the triplet that maximize the sum {12 , 29 , 0} in order , their sum is (41) ,
Note : duplications are not included when summing , (i.e) the numbers added only once .

*/

function maxTriSum(numbers){
  var numArr = []
  var jumlah = 0
  var numbers = numbers.sort(function(a, b){
    return b - a
  })

  for(var a = 0; a < numbers.length; a++){
    if(numbers[a] !== numbers[a+1]){
      numArr.push(numbers[a])
    }
  }

  for(var b = 0; b < 3; b++ ){
    jumlah += numArr[b]
  }

  return jumlah
}
console.log(maxTriSum([3,2,6,8,2,3]))//17
console.log(maxTriSum([2,9,13,10,5,2,9,5]))//32
console.log(maxTriSum([2,1,8,0,6,4,8,6,2,4]))//18
console.log(maxTriSum([-3,-27,-4,-2,-27,-2]))//-9
console.log(maxTriSum([-14,-12,-7,-42,-809,-14,-12]))//-33
console.log(maxTriSum([-13,-50,57,13,67,-13,57,108,67]))//232
console.log(maxTriSum([-7,12,-7,29,-5,0,-7,0,0,29]))//41
console.log(maxTriSum([-2,0,2]))//0
console.log(maxTriSum([-2,-4,0,-9,2]))//0
console.log(maxTriSum([-5,-1,-9,0,2]))//1
console.log(maxTriSum( [2865, -65043, -47459, -31817, 0, 122, 12974, 82486, -33, 37978, -41, 8292, -3003, 20495, 8726, -9, -9900, -44179, -5948, -78, 48429, -5076, -5474, 4447, -60, 4289, 1, 8197, 8095, 42074, -16, -18760, 480, -225, -6426, 4743, -237, 6052, 5811, 0, -9, -68864, 50, -36, -3021, -53, 1404, 7184, 13232, 5243, 66408, 72906, 7957, -175, 428, 99, -6966, 8242, -33245, 867, 965, 60469, 27609, -86655, -2688, -90677, -24782, -5099, 13, -261, 717, -1282, 68877, 6396, -1916, 24, 15064, 29696, 8858, 275, -7751, 89802, -467, -66, -1444, -292, -3247, 7410, 768, 6, -1779, 7, -73417, 444, 847, 97, 32355, 343, -149, -60223, -20931, -13566, -79, 3167, -503, -37161, 250, 91366, 1902, 6, -23, 102, 39681, -708, -2592, -11134, -61930, -18556, 0, 57917, 42393, -32, 2711, -8, -40664, 18678, 12191, -136, 375, -226, 550, -57798, 24, -4230, 19, 1573, -2536, 38, 23, -35377, -1678, -390, -1924, -2653, 31, 10643, 106, 31, -9959, 649, -3263, 524, 6, 3389, -7, 4605, -938, -47203, 28, -1507, -33716, 2739, -126, -3265, -206, -30140, -16120, 37354, 658, -21080, 649, -482, 252, 3437, -3306, -500, 25134, -202]
))//263654