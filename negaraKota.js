/*
    negaraKota

    yaitu sebuah program khusus untuk mengelompokkan data yang berserakan 
    berupa negara dan kota dari internet berupa array multidimensi. 
    tugas kalian adalah merapikan 
    data yg di dapat tersebut menjadi object literal yg mudah di baca.

    untuk dapat mengetahui perbedaan antara data negara dan kota adalah : 
    1. negara 
    bentuk data negara berupa array yg berisi 3 data yaitu : 
    [n,a,b]
    n = penanda kalau ini data negara 
    a = kode negara , yang nanti nya sebagai acuan penyocok dengan data kota 
    b = nama negara , yang akan menjadi key output
    2. kota 
    bentuk data kota berupa array yg berisi 2 data yaitu : 
    [a,c]
    a = kode negara , yang nanti nya sebagai acuan penyocok dengan data negara
    c = nama kota , yang nantinya akan di pasangkan dengan nama negara masing - masing 

    contoh : 
    input : [
    ["n","id","Indonesia"],["id","Jakarta"],["n","usa","Amerika Serikat"],
    ["id","Surabaya"],["usa","New York"],["usa","Washington DC"],["usa","California"],
    ["n","ch","China"],["ch","Beijing"],["n","ind","India"],["ch","Shanghai"],["ind","Bangalore"],
    ["ind","New Delhi"],["n","ru","Rusia"],["ru","Moscow"]
    ]
    maka outputnya :
    {   
        Indonesia: [ 'Jakarta', 'Surabaya' ],
        'Amerika Serikat': [ 'New York', 'Washington DC', 'California' ],
        China: [ 'Beijing', 'Shanghai' ],
        India: [ 'Bangalore', 'New Delhi' ],
        Rusia: [ 'Moscow' ] 
    }
*/

function negaraKota(arr) {
  var negaraObj = {};

  for (var a = 0; a < arr.length; a++) {
    if (arr[a].length === 3) {
      negaraObj[arr[a][2]] = [];
      for (var b = 0; b < arr.length; b++) {
        if (arr[a][1] === arr[b][0]) {
          negaraObj[arr[a][2]].push(arr[b][1]);
        }
      }
    }
  }
  return negaraObj;
}

console.log(
  negaraKota([
    ["n", "id", "Indonesia"],
    ["id", "Jakarta"],
    ["n", "usa", "Amerika Serikat"],
    ["id", "Surabaya"],
    ["usa", "New York"],
    ["usa", "Washington DC"],
    ["usa", "California"],
    ["n", "ch", "China"],
    ["ch", "Beijing"],
    ["n", "ind", "India"],
    ["ch", "Shanghai"],
    ["ind", "Bangalore"],
    ["ind", "New Delhi"],
    ["n", "ru", "Rusia"],
    ["ru", "Moscow"]
  ])
);

/*
   {
       Indonesia:['Jakarta','Surabaya'],
       'Amerika Serikat':['New York','Washington DC','California'],
       China:['Beijing','Shanghai'],
       India:['Bangalore','New Delhi'],
       Rusia:['Moscow']
   }

   
   
*/

console.log(
  negaraKota([
    ["n", "br", "Brazil"],
    ["br", "Rio de Jeneiro"],
    ["n", "usa", "Amerika Serikat"],
    ["ru", "St. Petersburg"],
    ["usa", "New York"],
    ["ksa", "Mekkah"],
    ["usa", "Washington DC"],
    ["usa", "California"],
    ["n", "ch", "China"],
    ["ksa", "Madinah"],
    ["ch", "Beijing"],
    ["n", "ind", "India"],
    ["ch", "Shanghai"],
    ["ind", "Bangalore"],
    ["ind", "New Delhi"],
    ["n", "ru", "Rusia"],
    ["ru", "Moscow"],
    ["n", "ksa", "Arab Saudi"]
  ])
);

/*
   {
     Brazil: [ 'Rio de Jeneiro' ],
     'Amerika Serikat': [ 'New York', 'Washington DC', 'California' ],
     China: [ 'Beijing', 'Shanghai' ],
     India: [ 'Bangalore', 'New Delhi' ],
     Rusia: [ 'St. Petersburg', 'Moscow' ],
     'Arab Saudi': [ 'Mekkah', 'Madinah' ] 
   }



   ============ kode asli =========
   var obj = {};

  for (var a = 0; a < arr.length; a++) {
    if (arr[a].length === 3) {
      obj[arr[a][2]] = [];
      for (var b = 0; b < arr.length; b++) {
        if (arr[b][0] === arr[a][1]) {
          obj[arr[a][2]].push(arr[b][1]);
        }
      }
    }
  }

  return obj;
*/
