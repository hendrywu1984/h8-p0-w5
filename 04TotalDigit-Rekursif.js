function totalDigitRekursif(angka) {
  // you can only write your code here!
  var hasil = 0;
  var strAngka = String(angka);
  hasil += parseInt(strAngka[0])

  if (strAngka.length > 1) return hasil + totalDigitRekursif(parseInt(strAngka.slice(1,strAngka.length)));
  else return hasil;
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5