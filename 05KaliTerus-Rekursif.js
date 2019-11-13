function kaliTerusRekursif(angka) {
  // you can only write your code here!
  var hasil = 1;
  var strAngka = String(angka);

  for (var i=0; i<strAngka.length; i++) {
    hasil *= parseInt(strAngka[i]);
  }

  if (String(hasil).length>1) return kaliTerusRekursif(hasil);
  else return hasil
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6