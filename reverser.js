/*
Take a sentence (string) and reverse each word in the sentence. Do not reverse the order of the words, just the letters in each word.

If there is punctuation, it should be interpreted as a regular character; no special rules.

If there is spacing before/after the input string, leave them there.

String will not be empty.

Examples
"Hi mom" => "iH mom"
" A fun little challenge! " => " A nuf elttil !egnellahc "
*/
// reverse the letters in the sentence
function reverser(sentence) {
  var sentence = sentence.split(' ')
  var str = ''

  for(var a = 0; a < sentence.length; a++){
    for(var b = sentence[a].length-1; b >= 0; b--){
      str += sentence[a][b]
    }
    str += ' '
  }
  return str.slice(0, str.length-1)
}
console.log(reverser("Hi mom"))// 'iH mom'
console.log(reverser("friendzone"))//enozdneirf
console.log(reverser(" "))/ ' '