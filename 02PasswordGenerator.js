function changeVocals (str) {
  //code di sini
  var hasil = '';
  var isVocal = false;
  var vocal = [65, 73, 85, 69, 79, 97, 105, 117, 101, 111] //A, I, U, E, O, a, i, u, e, o

  for (var i=0; i < str.length; i++) {
    isVocal = false;
    for (var j=0; j < vocal.length; j++){
        if (str.charCodeAt(i) === vocal[j]) {
            hasil += String.fromCharCode(str.charCodeAt(i)+1);
            isVocal = true;
        }
    }  
    if (isVocal === false) hasil +=str[i];
  }

  return hasil;
}

function reverseWord (str) {
  //code di sini
  var hasil = '';
  for (var i=0; i < str.length; i ++) {
      hasil += str[str.length-(i+1)];
  }

  return hasil;
}

function setLowerUpperCase (str) {
  //code di sini
  var hasil = '';
  for (var i = 0; i<str.length;i++) {
      if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) hasil += String.fromCharCode(str.charCodeAt(i)+32);
      else if (str.charCodeAt(i) >= 97 && str.charCodeAt(i) <= 122) hasil += String.fromCharCode(str.charCodeAt(i)-32);
      else {
        hasil += str[i];
      }
  }
  return hasil;
}

function removeSpaces (str) {
  //code di sini
  var hasil = '';
  for (var i = 0; i < str.length ; i++) {
    if (str[i] != ' ') hasil += str[i];
  }
  
  return hasil;
}

function passwordGenerator (name) {
  //code di sini
  var hasil = '';
  
  if (name.length >= 5) {
    hasil = changeVocals (name);
    hasil = reverseWord(hasil);
    hasil = removeSpaces(hasil);
    hasil = setLowerUpperCase (hasil);  
  }
  else hasil = 'Minimal karakter yang diinputkan adalah 5 karakter';
  
  return hasil; 
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'