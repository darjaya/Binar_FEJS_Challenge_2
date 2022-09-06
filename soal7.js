//challenge chapter 2 soal 7

const dataPenjualanPakAldi = [
  {
    namaProduct: "Sepatu Futsal Nike Vapor Academy B",
    hargaSatuan: 7600,
    kategori: "Sepatu Sport",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior Tristan Black Brown High - Original ",
    hargaSatuan: 960000,
    kategori: "sepatu sneaker",
    totalTerjual: 37,
  },

  {
    namaProduct: "Sepatu Warrior tristan Maroon High - Original",
    hargaSatuan: 360000,
    kategori: "sepatu sneaker",
    totalTerjual: 90,
  },
  {
    namaProduct: "Sepatu Warrior rainbow tosca corduroy - [BNIB] Original",
    hargaSatuan: 120000,
    kategori: "sepatu sneaker",
    totalTerjual: 90,
  },
];

console.log;

function hitungTotalPenjualan(dataPenjualan) {
  let totalPenjualan = 0;
  for (let i = 0; i < dataPenjualan.length; i++) {
    //code:  perulangan
    if (typeof dataPenjualan[i].totalTerjual != "number") {
      //code: apakah data total terjual itu number
      return "error"; //code; error jika bukan number
    } else {
      totalPenjualan += dataPenjualan[i].totalTerjual; //code; menjumlahkan nilai total terjual
    }
  }
  return totalPenjualan;
}

console.log(hitungTotalPenjualan(dataPenjualanPakAldi)); // Output => 307
