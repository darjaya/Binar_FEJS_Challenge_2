//challenge chapter 2 Soal 3

function checkTypeNumber(givenNumber) {
  const isValidNumber = (val) => {
    if (typeof val === "number") return true;

    if (givenNumber === undefined) {
      return "error: bro where is the parameter?";
    }
    return "error: invalid data type";
  };

  let result = isValidNumber(givenNumber);
  if (result !== true) {
    return result;
  } else {
    if (givenNumber % 2 === 0) {
      return "genap";
    } else {
      return "ganjil";
    }
  }
}

function checkEmail(email) {
  if (typeof email != "string") {
    //pengecekkan input yang bukan string
    return "error";
  }
  if (!email.includes("@")) {
    //pengecekkan input yang tidak mengandung "@"
    return "erorr";
  }
  //regex
  let check = email.match(/^[a-zA-Z0-9]+\@[a-zA-Z0-9]+\.(com|co.id|id)$/g); // (+) minimal 1 atau lebih
  if (check) {
    return "valid"; //pengecekkan email valid
  }
  return "invalid"; //pengecekkan email invalid
}

console.log(checkEmail("apranata@binar.co.id")); //Untuk output yang keluar => "Valid"
console.log(checkEmail("apranata@binar.com")); //Untuk output yang keluar => "Valid"
console.log(checkEmail("apranata@binar")); //Untuk output yang keluar => "Invalid"
console.log(checkEmail("apranata")); ////Untuk output yang keluar => "erorr" dikarenakan tidak memiliki karakter @ pada saat menginput data email
console.log(checkTypeNumber(checkEmail(3322)));
console.log(checkEmail()); // Untuk output yang keluar => "erorr" dikarenakan data tidak terdefinisikan "Undifined"
