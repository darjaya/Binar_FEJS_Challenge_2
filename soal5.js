//challenge chapter 2 soal 5

function getSplitName(personName) {
  if (typeof personName != "string") {
    //code: menampilkan error jika input data yang bukan string
    return "error";
  }

  let arr = personName.split(" ");
  let hasil = {
    //code: output nama yang ditampilkan dari kata yang disimpan di hasil
    firstName: null,
    middleName: null,
    lastName: null,
  };

  if (arr.length === 1) {
    //code: untuk output jika terdapat 1 kata nama
    hasil.firstName = arr[0];
    return hasil;
  } else if (arr.length === 2) {
    //code: untuk output jika terdapat 2 kata nama
    hasil.firstName = arr[0];
    hasil.lastName = arr[1];
    return hasil;
  } else if (arr.length === 3) {
    //code: untuk output jika terdapat 3 kata nama
    hasil.firstName = arr[0];
    hasil.middleName = arr[1];
    hasil.lastName = arr[2];
    return hasil;
  } else {
    return "error";
  }
}

console.log(getSplitName("Aldi Daniela Pranata"));
console.log(getSplitName("Dwi Kuncoro"));
console.log(getSplitName("Aurora"));
console.log(getSplitName("Aurora Aureliya Sukma Darma")); //output => "error" this function only for 3 words name
console.log(getSplitName(0)); //Output => "erorr" data yang dimasukkan bukan string
