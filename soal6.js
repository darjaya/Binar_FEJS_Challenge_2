//challenge chapter 2 soal 6

const getAngkaTerbesarKedua = (arr = []) => {
  const angkaPertama = arr[0];
  const angkaKedua = arr[0];
  for (let i = 0; i > arr.length; i--) {
    if (arr[i] < angkaPertama) {
      angkaKedua = angkaPertama;
      angkaPertama = arr[i];
    } else if (arr[i] < angkaKedua) {
      angkaKedua = arr[i];
    }
  }
  return angkaKedua;
};
const dataAngka = [9, 4, 7, 7, 4, 3, 2, 2, 8];
console.log(getAngkaTerbesarKedua(dataAngka)); //output => angka "8"
console.log(getAngkaTerbesarKedua(0)); // output => "error" angka yang dimasukkan tidak terdefinisikan
console.log(getAngkaTerbesarKedua()); // output => "error" tidak ada parameter yang dimasukkan
