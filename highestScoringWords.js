function high(x) {
  var jumlah = 0;
  var jumlahWord = [];
  var abjad = "abcdefghijklmnopqrstuvwxyz";
  var angka = [
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
    20,
    21,
    22,
    23,
    24,
    25,
    26
  ];
  var split = x.split(" ");

  for (var a = 0; a < split.length; a++) {
    for (var b = 0; b < split[a].length; b++) {
      for (var c = 0; c < abjad.length; c++) {
        if (split[a][b] === abjad[c]) {
          jumlah += angka[c];
        } 
      }
    }
    //jumlahWord.push(jumlah)
  }

  return jumlah;
}
console.log(high("mab abc aaa acdfgh gzqw"));
