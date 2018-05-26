//return the total number of smiling faces in the array
/*
Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:
-Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
-A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
-Every smiling face must have a smiling mouth that should be marked with either ) or D.
No additional characters are allowed except for those mentioned.
Valid smiley face examples:
:) :D ;-D :~)
Invalid smiley faces:
;( :> :} :] 

Example cases:

countSmileys([':)', ';(', ';}', ':-D']);       // should return 2;
countSmileys([';D', ':-(', ':-)', ';~)']);     // should return 3;
countSmileys([';]', ':[', ';*', ':$', ';-D']); // should return 1;
*/
function countSmileys(arr) {
  var count = 0;

  for (var a = 0; a < arr.length; a++) {
    for (var b = 0; b < arr[a].length; b++) {
      if (arr[a][b] === ")" || arr[a][b] === "D") {
        count++;
      }
    }
  }

  return count;
}
console.log(countSmileys([])); //0
console.log(countSmileys([":D", ":~)", ";~D", ":)"])); //4
console.log(countSmileys([":)", ":(", ":D", ":O", ":;"])); //2
console.log(countSmileys([";]", ":[", ";*", ":$", ";-D"])); //1
