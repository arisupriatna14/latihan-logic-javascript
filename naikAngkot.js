function naikAngkot(arrPenumpang) {
  rute = ["A", "B", "C", "D", "E", "F"];
  var result = [];

  for (var a = 0; a < arrPenumpang.length; a++) {
    var obj = {
      penumpang: arrPenumpang[a][0],
      naikDari: arrPenumpang[a][1],
      tujuan: arrPenumpang[a][2]
    };

    var naik = 0;
    var tujuan = 0;
    for (var b = 0; b < rute.length; b++) {
      if(obj['naikDari'] === rute[b]){
        naik = b
      }

      if(obj['tujuan'] === rute[b]){
        tujuan = b
      }
    }

    obj['bayar'] = Math.abs(naik - tujuan) * 2000

    result.push(obj);
  }

  return result;
}

//TEST CASE
console.log(naikAngkot([["Dimitri", "A", "F"], ["Icha", "A", "B"]]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
