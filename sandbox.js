// function miniSudokuBoard (text) {

//   if (text.length === 0) {
//     return "Empty board";
//   }
//   if (text.length < 9) {
//     return "Invalid input";
//   }
//   var textsplit = text.split('');
//   var output = [];
//   var arrSementara = []

//   for(var a= 0; a  < textsplit.length; a++){
//     arrSementara.push(textsplit[a])
//     if(arrSementara.length === 3){
//       output.push(arrSementara)
//       arrSementara = []
//     }
//   }

//   return output
// }
// console.log(miniSudokuBoard('00503008'))

// function graduates (students) {
//   var obj = {}
//   for(var a = 0; a < students.length; a++){
//     if(!obj[students[a].class]){
//       obj[students[a].class] = []
//     }

//     if(students[a].score >= 75){
//       obj[students[a].class].push({name: students[a].name, score: students[a].score})
//     }
//   }

//   return obj
// }

// console.log(graduates([
//   {
//     name: 'Dimitri',
//     score: 90,
//     class: 'foxes'
//   },
//   {
//     name: 'Alexei',
//     score: 85,
//     class: 'wolves'
//   },
//   {
//     name: 'Sergei',
//     score: 74,
//     class: 'foxes'
//   },
//   {
//     name: 'Anastasia',
//     score: 78,
//     class: 'wolves'
//   }
// ]));

// // {
// //   foxes: [
// //     { name: 'Dimitri', score: 90 }
// //   ],
// //   wolves: [
// //     { name: 'Alexei' , score: 85 },
// //     { name: 'Anastasia', score: 78 }
// //   ]
// // }

// console.log(graduates([
//   {
//     name: 'Alexander',
//     score: 100,
//     class: 'foxes'
//   },
//   {
//     name: 'Alisa',
//     score: 76,
//     class: 'wolves'
//   },
//   {
//     name: 'Vladimir',
//     score: 92,
//     class: 'foxes'
//   },
//   {
//     name: 'Albert',
//     score: 71,
//     class: 'wolves'
//   },
//   {
//     name: 'Viktor',
//     score: 80,
//     class: 'tigers'
//   }
// ]));

// // {
// //   foxes: [
// //     { name: 'Alexander', score: 100 },
// //     { name: 'Vladimir', score: 92 }
// //   ],
// //   wolves: [
// //     { name: 'Alisa', score: 76 },
// //   ],
// //   tigers: [
// //     { name: 'Viktor', score: 80 }
// //   ]
// // }

// console.log(graduates([])); //{}

// var name = 'ari+supriatna'
// console.log(name.substring(name.length - 10))

// function naikAngkot(arrPenumpang) {
//   rute = ["A", "B", "C", "D", "E", "F"];
//   var result = [];

//   for (var a = 0; a < arrPenumpang.length; a++) {
//     var obj = {
//       penumpang: arrPenumpang[a][0],
//       naikDari: arrPenumpang[a][1],
//       tujuan: arrPenumpang[a][2]
//     };

//     var indexNaik = 0;
//     var indexTujuan = 0;

//     for (var b = 0; b < rute.length; b++) {
//       //mencari index naikDari
//       if (obj.naikDari === rute[b]) {
//         indexNaik = b;
//       }

//       //mencari index tujuan
//       if (obj.tujuan === rute[b]) {
//         indexTujuan = b;
//       }
//     }

//     obj.bayar = Math.abs(indexNaik - indexTujuan) * 2000

//     result.push(obj);
//   }

//   return result;
// }

// //TEST CASE
// console.log(naikAngkot([["Dimitri", "B", "F"], ["Icha", "A", "B"]]));
// // [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
// //   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

// console.log(naikAngkot([["Ari", "A", "C"], ["Ridho", "B", "D"]])); //[]

// var myString = 'ari|supriatna|ganteng'
// var split = myString.split('|')
// console.log(split)

function vendingMachine(uang, jumlahBayar) {
  var stockUang = [500, 1000, 2000, 5000, 10000, 20000, 50000];

  for (var a = 0; a < stockUang.length; a++) {
    var target = stockUang[a];
    for (var b = a - 1; b >= 1 && stockUang[b] < target; b--) {
      stockUang[b + 1] = stockUang[b];
    }
    stockUang[b + 1] = target;
  }

  var uangKembalian = [];
  var sisaUang = uang - jumlahBayar;

  for (var a = 0; a < stockUang.length; a++) {
    if (sisaUang >= stockUang[a]) {
      uangKembalian.push(stockUang[a]);
      sisaUang -= stockUang[a];
    }
  }

  return uangKembalian;
}
console.log(vendingMachine(50000, 21500)); //[ 20000, 5000, 2000, 1000, 500 ]
