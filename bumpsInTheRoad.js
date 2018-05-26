/*
Your car is old, it breaks easily. The shock absorbers are gone and you think it can handle about 15 more bumps before it dies totally.

Unfortunately for you, your drive is very bumpy! Given a string showing either flat road ("_") or bumps ("n"), work out if you make it home safely. 15 bumps or under, return "Woohoo!", over 15 bumps return "Car Dead".


*/
function bump(x){
  var count = 0
  for(var a = 0; a < x.length; a++){
    if(x[a] === 'n'){
      count++
    }
  }
  
  if(count > 15){
    return "Car Dead"
  } else {
    return "Woohoo!"
  }
}
console.log(bump("n")) //"Woohoo!"
console.log(bump("_nnnnnnn_n__n______nn__nn_nnn"))//"Car Dead"
console.log(bump("______n___n_"))//"Woohoo!"
console.log(bump("__"))
console.log(bump("nnnnn_n_n_nn_nnn_nn_n_n_nnnnn___n"))