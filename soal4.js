//challenge chapter 2 soal 4

function isValidPassword(email) {
  if (typeof email !== "string") {
    //code: untuk inputan data yang bukan string
    return "error";
  }

  //regex
  let check = email.match(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,}$/); //password terdiri 8 baris , huruf besar awal dan memilih angka
  if (check) {
    return "true"; //code: untuk inputan password "True"
  }
  return "false";
  //code: untuk inputan password "False"
}

console.log(isValidPassword("Meong2021")); //Output => "True" karena memenuhi requirement yang terdiri dari 8 baris, huruf besar, ada huruf kecil, dan angka
console.log(isValidPassword("meong2021")); //output => "false" karena meong tidak ada huruf besar
console.log(isValidPassword("@ong2021")); // Output =>  "False" (karena @eong hanya terdiri dari huruf tidak ada angka)
console.log(isValidPassword("Meong2")); //output => "False" (karena  Meong2 hanya terdiri dari 6 karakter)
console.log(isValidPassword(0)); // output => "erorr" karena hanya mengandung 1 angka, tidak ada huruf
console.log(isValidPassword()); //output => "erorr"  dikarenakan data tidak terdefinisikan "Undifined"
