/*
Logic - Contact Group Relation
Diberikan data contacts, yang isinya ada id, name, gender, group_ids. Isi dari Group ids ini, adalah kumpulan id dari beberapa group, yang menunjukkan suatu contact berada di group mana saja. Contohnya, contact dengan id 1, bernama ‘Andi’, group ids nya 1,2, dan 3.. Maka ‘Andi’ berada di dalam group : ‘Teman SMP’ (id: 1), ‘Teman SMA’ (id: 2), ‘Teman Kuliah’ (id: 3).
Lihat data di bawah ini :  
*/
var contacts = [
  {
    Id: 1,
    name: "Andi",
    gender: "male",
    group_ids: [1, 2, 3]
  },
  {
    Id: 2,
    name: "Budi",
    gender: "male",
    group_ids: [1, 2]
  },
  {
    Id: 3,
    name: "Cindy",
    gender: "male",
    group_ids: [1]
  },
  {
    Id: 4,
    name: "David",
    gender: "male",
    group_ids: [1, 2]
  },
  {
    Id: 5,
    name: "Emily",
    gender: "male",
    group_ids: [1, 2, 3]
  }
];
// lanjut ke halaman berikutnya
var groups = [
  {
    id: 1,
    name: "Teman SMP"
  },
  {
    id: 2,
    name: "Teman SMA"
  },
  {
    id: 3,
    name: "Teman Kuliah"
  }
];
/*Buat sebuah function bernama ‘showContactsByGroup’ yang menerima sebuah parameter (asumsi nama parameter adalah param1) yang berisi nama group.
Driver code, silahkan copy var contacts dan groups di atas : */
function showContactByGroup(group_name) {
  var arr = [];

  for (var a = 0; a < groups.length; a++) {
    if (group_name === groups[a].name) {
      for (var b = 0; b < contacts.length; b++) {
        for (var c = 0; c < contacts[b].group_ids.length; c++) {
          if(groups[a].id === contacts[b].group_ids[c]){
            arr.push(contacts[b].name)
          }
        }
      }
    }
  }

  return arr
}
console.log(showContactByGroup("Teman Kuliah")); // ['Andi', "Emily"]
console.log(showContactByGroup("Teman SMA")); // [ 'Andi', 'Budi', 'David', 'Emily' ]
console.log(showContactByGroup("Teman SMP"));

/* 
Contoh 1 : 
showContactByGroup('Teman Kuliah')
//result yang diharapkan : 
["Andi", "Emily"]
Contoh 2 : 
showContactByGroup('Teman SMA)
//result yang diharapkan : 
["Andi", "Budi", "David", "Emily"]
Contoh 3 : 
showContactByGroup('Teman SMP)
//result yang diharapkan : 
["Andi", "Budi", "Cindy", "David", "Emily"]
=============================================
var arr = [];

  for (var a = 0; a < groups.length; a++) {
    if (group_name === groups[a].name) {
      for (var b = 0; b < contacts.length; b++) {
        for (var c = 0; c < contacts[b].group_ids.length; c++) {
          if (groups[a].id === contacts[b].group_ids[c]) {
            arr.push(contacts[b].name);
          }
        }
      }
    }
  }

  return arr;

  // return arr
  //console.log(contacts[0].group_ids[0])

*/
