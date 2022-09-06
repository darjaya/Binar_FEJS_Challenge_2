//challenge chapter 2 soal 2

function checkTypeNumber(givenNumber) {
  const isValidNumber = (val) => {
    if (typeof val === "number")
      //code: untuk mengecek angka atau bukan
      return true;
    //code: untuk mengecek nilai undefined
    if (givenNumber === undefined) {
      return "error: Bro where is the parameter?";
    }
    return "error: Invalid data type";
  };

  let result = isValidNumber(givenNumber);
  if (result !== true) {
    return result;
  } else {
    if (givenNumber % 2 === 0) {
      //code: untuk nilai ganjil atau genap
      return "Genap";
    } else {
      return "Ganjil";
    }
  }
}
console.log(checkTypeNumber(10)); //Untuk output yang keluar => "Genap"
console.log(checkTypeNumber(3)); //Untuk output yang keluar => "Ganjil"
console.log(checkTypeNumber("3")); //Untuk output yang keluar => "error: invalid data type"
console.log(checkTypeNumber({})); //Untuk output yang keluar => "error: invalid data type"
console.log(checkTypeNumber([])); //Untuk output yang keluar => "error: invalid data type")
console.log(checkTypeNumber()); //Untuk output yang keluar => "error: Bro where is the parameter?"
