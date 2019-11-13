function sorting(arrNumber) {
  // code di sini    var hasil = [];
    var temp = [];
    var awal = '';
    var tukar = false;
    var panjang = arrNumber.length

    do {
      tukar = false;
      for (var i=0; i < panjang - 1; i++){
          if (arrNumber[i] < arrNumber[i+1]){
              var temp =arrNumber[i];
              arrNumber[i] =arrNumber[i+1];
              arrNumber[i+1] = temp;
              tukar = true;
          }
      }
      panjang--;
    } while (tukar);

    return arrNumber;
}

function getTotal(arrNumber) {
  // code di sini
  var total = 0;
  var angka = arrNumber[0];
  
  for (var i=0; i<arrNumber.length; i++) {
      if (arrNumber[i] === angka) total += 1;
  }

  if (total > 0)
    return 'angka paling besar adalah '+ angka +' dan jumlah kemunculan sebanyak '+ total +' kali'
  else 
    return ''
}

function mostFrequentLargestNumbers(arrNumber) {
  var listSort = sorting(arrNumber);  
  var countHighest = getTotal(listSort);
  return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''