function handleObject (arr) {
  var result = []
  
  for(var a =  0; a < arr.length; a++){
    var obj = {}
    for(var key in arr[a]){
      obj['nama'] = arr[a][key]
      obj['age'] = arr[a][key]
      
    }
  }

  return obj
}

console.log(handleObject([
  {nama: 'risa', age: 19, school:'sdajfijsadfijasdf'},
  {nama: 'shinigami', age: 99, school:'sdajfijsadfijasdf'},
  {nama: 'light', age: 22, school:'sdajfijsadfijasdf'},
]))


// [
//   {nama: 'risa', age: 23, nationality:'japan'},
//   {nama: 'shinigami', age: 23, nationality:'japan'},
//   {nama: 'light', age: 23, nationality:'japan'},
// ]