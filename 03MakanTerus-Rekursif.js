function makanTerusRekursif(waktu) {
    // you can only write your code here!
    var jumlah = 0;
    if (waktu > 0) {
        jumlah += 1; 
        return jumlah + makanTerusRekursif(waktu-15);
    } else return jumlah;
  }
  
  // TEST CASES
  console.log(makanTerusRekursif(66)); // 5
  console.log(makanTerusRekursif(100)); // 7
  console.log(makanTerusRekursif(90)); // 6
  console.log(makanTerusRekursif(10)); // 1
  console.log(makanTerusRekursif(0)); // 0