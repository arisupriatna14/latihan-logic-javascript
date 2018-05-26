/*
Write a function that takes a single string (word) as argument. The function must return an ordered list containing the indexes of all capital letters in the string.
*/
function theCapitals (word) {
  var arr = []
  
  for(var a = 0; a < word.length; a++){
    if(word[a] === word[a].toUpperCase()){
      arr.push(a)
    }
  }
  return arr
};
console.log(theCapitals('CodEWaRs'))//[0,3,4,6]