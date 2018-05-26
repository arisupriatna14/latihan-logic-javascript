/*
ROT13 adalah algoritma enkripsi sederhana yang menggunakan sandi abjad-tunggal dengan pergeseran k=13 (huruf A diganti dengan N, huruf B diganti dengan O, dan seterusnya). Enkripsi ini merupakan penggunaan dari sandi Caesar dengan geseran 13. 

Contoh: input = 'ari'
        output = 'nev'
        proses = 'a' -> 'n', 'r' -> 'e', 'i' -> 'v'
*/

function rot13(input){
  var str = ''
  var abjad1 = 'abcdefghijklm'
  var abjad2 = 'nopqrstuvwxyz'

  for(var a = 0; a < input.length; a++){
    for(var b = 0; b < abjad1.length; b++){
      if(input[a] === abjad1[b]){
        str += abjad2[b]
      } else if(input[a] === abjad2[b]){
        str += abjad1[b]
      }
    }
    if(input[a] === ' '){
      str += ' '
    }
  }

  return str
}
console.log(rot13('ari supriatna'))//nev fhcevngan
console.log(rot13('sergei dragunov'))//fretrv qenthabi
console.log(rot13('albert einstein'))//nyoreg rvafgrva
console.log(rot13('al khawarizmi'))// ny xunjnevmzv