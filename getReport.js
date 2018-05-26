/*
di data structure, yang harus student achieve:
- forming sebuah array berisikan object
- bisa mengakses isi terdalam dari array berisikan object
- bisa melakukan operasi filtering / grouping data
*/

/*

---------------
Students Report
---------------

PROBLEM
=======
Diberikan sebuah function bernama getReport.
Function akan menerima sebuah parameter array of object dengan format:

[
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  { name: <nama student>, score: <score student>, classCode: <kode kelas>},
  ...
]

Data di atas merupakan campuran seluruh nilai student dari kelas manapun.

Function akan memproses array of object tersebut untuk membuat sebuah report dalam bentuk array of object dengan format:

[
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  { classCode: <kode kelas>, passed: <array berisi nama student yg lulus>, failed: <array berisi nama student yg failed> },
  ...
]

Data yang diharapkan merupakan akumulasi student yang lulus dan tidak dari setiap kelas.
Standard kelulusan adalah minimum 70.
*/

function getReport(studentGrades) {
  // var kelas = [];
  // var result = [];
  // for (var a = 0; a < studentGrades.length; a++) {
  //   if (kelas.includes(studentGrades[a].classCode) === false) {
  //     kelas.push(studentGrades[a].classCode);
  //   }
  // }

  // for (var a = 0; a < kelas.length; a++) {
  //   var obj = {
  //     classCode: kelas[a],
  //     passed: [],
  //     failed: []
  //   };

  //   for (var b = 0; b < studentGrades.length; b++) {
  //     if (studentGrades[b].classCode === obj.classCode && studentGrades[b].score >= 70) {
  //       obj["passed"].push(studentGrades[b].name);
  //     } else if(studentGrades[b].classCode === obj.classCode && studentGrades[b].score < 70){
  //       obj["failed"].push(studentGrades[b].name);
  //     }
  //   }

  //   result.push(obj);
  // }

  // return result;

  var result = [];
  var obj = {};

  for (var a = 0; a < studentGrades.length; a++) {
    if (a === 0) {
      obj["classCode"] = studentGrades[a].classCode;
      obj["passed"] = [];
      obj["failed"] = [];
      result.push(obj);
    }

    var isFind = false;

    for (var b = 0; b < result.length; b++) {
      if (result[b]["classCode"] === studentGrades[a].classCode) {
        if(studentGrades[a]["score"] >= 70){
          result[b]['passed'].push(studentGrades[a].name)
          isFind = true
          break
        } else if(studentGrades[a]["score"] < 70){
          result[b]['failed'].push(studentGrades[a].name)
          isFind = true
          break
        }
      }
    }

    if(!isFind){
      obj = {}
      obj['classCode'] = studentGrades[a].classCode

      if(studentGrades[a].score >= 70){
        obj.passed = [studentGrades[a].name]
        obj.failed = []
      } else {
        obj.passed = []
        obj.failed = [studentGrades[a].name]
      }

      result.push(obj)
    }

  }

  return result;
}

var grades1 = [
  { name: "John", score: 80, classCode: "A" },
  { name: "Mike", score: 60, classCode: "B" },
  { name: "Budi", score: 70, classCode: "C" },
  { name: "Siti", score: 50, classCode: "A" },
  { name: "Aaron", score: 10, classCode: "A" },
  { name: "Arthur", score: 10, classCode: "C" },
  { name: "Osass", score: 10, classCode: "B" },
  { name: "Yolo", score: 90, classCode: "C" },
  { name: "Ari Supriatna", score: 100, classCode: "B" }
];

console.log(getReport(grades1));

/*
[
  { classCode: 'A', passed: [ 'John'], failed: [ 'Siti', 'Aaron'  ] },
  { classCode: 'B', passed: [ ], failed: ['Mike', 'Osass' ] },
  { classCode: 'C', passed: [ 'Budi', 'Yolo' ], failed: [ 'Arthur'] },
]
*/
