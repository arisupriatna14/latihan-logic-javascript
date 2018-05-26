/*
 Via Valen mempunyai sebuah produk software karaoke. Si eneng ingin setiap softwarenya mempunyai serial number dengan format sebagai berikut: xxxx-xxxx-xxxx-xxxx, contoh: buge-wszs-kfov-9i06. Buatkan function untuk meng-generate 300 serial number yang dibutuhkan oleh Neng Via Valen.

 abjadUnique = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
*/
function generateSerialNumber(abjadUnique){
  var abjadUnique = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
  var lengthSerial = 19
  var str = ''
  var arr = []
  var result = []
  var serial = ''

  for(var a = 0; a < lengthSerial; a++){
    var hasil = Math.floor(Math.random() * abjadUnique.length)
    str += abjadUnique.substring(hasil, hasil+1)
  }

  for(var a = 0; a < str.length; a++){
    arr.push(str[a])
    if(arr.length === 4){
      for(var b = 0; b < arr.length; b++){
        serial += arr[b]
      }
      serial += '-'
      arr = []
    }
  }

  console.log(serial.slice(0, serial.length-1)) 
}
function generate300(abjadUnique){
  for(var a = 0; a < 300; a++){
    generateSerialNumber()
  }
}
generate300()
