/*
Sebuah Vending Machine mempunyai stok uang kembalian 500, 1.000, 2.000, 5.000, 10.000, 20.000 dan 50.000.

Buatlah sebuah function/method untuk menentukan kembalian yang paling tepat.

Ex: Total belanja 21.500, uang yang dimasukkan ke Vending Machine adalah 50.000, which mean total kembalian adalah 28.500, sehingga output yang dibutuhkan adalah:

- selembar 20.000

- selembar 5.000

- selembar 2.000

- selembar 1.000, dan

- satu koin 500
atau jika masukkan kedalam array menjadi : [20000, 5000, 2000, 1000, 500]
*/
function vendingMachine(uang, jumlahBayar) {
  var stockUang = [500, 1000, 2000, 5000, 10000, 20000, 50000];

  stockUang.sort(function(a, b) {
    return b - a;
  });

  var uangKembalian = [];

  var kembalian = uang - jumlahBayar;

  for (var a = 0; a < stockUang.length; a++) {
    if (kembalian >= stockUang[a]) {
      uangKembalian.push(stockUang[a]);
      kembalian -= stockUang[a];
    }
  }

  return uangKembalian;
}
console.log(vendingMachine(50000, 21500));//[ 20000, 5000, 2000, 1000, 500 ]
console.log(vendingMachine(45000, 12000))//[ 20000, 10000, 2000, 1000 ]
console.log(vendingMachine(10000, 5000)); //[5000]
console.log(vendingMachine(20000, 20000)); //[]
