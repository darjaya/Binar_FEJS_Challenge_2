//challenge chapter 2 soal 1

function changeWord(selectedText, changeText, text) {
  let arr = text.split(" ");
  //code: untuk memisahkan text

  for (let i = 0; i < arr.length; i++) {
    // code: looping text yang akan diubah
    if (arr[i] === selectedText) {
      arr[i] = changeText;
    }
  }
  return arr.join(" "); //code: mengembalikan nilai array kemudian digabungkan
}

const kalimat1 = "Andini sangat mencintai kamu selamanya";
const kalimat2 = "Gunung Bromo tak akan mampu menggambarkan besarnya cintaku padamu";

console.log(changeWord("mencintai", "membenci", kalimat1));

console.log(changeWord("Bromo", "Semeru", kalimat2));
