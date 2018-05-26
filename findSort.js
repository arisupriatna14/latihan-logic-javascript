/*
Simple, given a string of words, return the length of the shortest word(s).

String will never be empty and you do not need to account for different data types.

*/
function findShort(s) {
  var arr = [];
  var split = s.split(" ");

  for (var a = 0; a < split.length; a++) {
    var length = split[a].length
    arr.push(length)
  }
  
  var arrSort = arr.sort(function(a, b){
    return a - b
  })

  return arrSort[0]
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps")); //3
console.log(
  findShort(
    "turns out random test cases are easier than writing out basic ones"
  )
); //3
