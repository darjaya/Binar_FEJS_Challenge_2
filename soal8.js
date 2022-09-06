//challenge chapter 2 soal 8

const dataPenjualanNovel = [
  {
    idProduct: "BOOK002421",
    namaProduk: "Pulang - Pergi",
    penulis: "Tere Liye",
    hargaBeli: 60000,
    hargaJual: 86000,
    totalTerjual: 150,
    sisaStok: 17,
  },
  {
    idProduct: "BOOK002351",
    namaProduk: "Selamat Tinggal",
    penulis: "Tere Liye",
    hargaBeli: 75000,
    hargaJual: 103000,
    totalTerjual: 171,
    sisaStok: 20,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Garis Waktu",
    penulis: "Fiersa Besari",
    hargaBeli: 67000,
    hargaJual: 99000,
    totalTerjual: 213,
    sisaStok: 5,
  },
  {
    idProduct: "BOOK002941",
    namaProduk: "Laskar Pelangi",
    penulis: "Andrea Hirata",
    hargaBeli: 55000,
    hargaJual: 68000,
    totalTerjual: 20,
    sisaStok: 56,
  },
];

function getInfoPenjualan(dataPenjualan) {
  let untungPenjualan = 0;
  let modalPenjualan = 0;
  let persentaseKeuntungan = 0;
  let temp = 0;
  let hasil = null; //code: mendefinikan nilai hasil adalah null
  for (let i = 0; i < dataPenjualan.length; i++) {
    //code: memastikan harga beli , harga jual, dan total terjual adalah number
    if (typeof dataPenjualan[i].hargaBeli === "number" || typeof dataPenjualan[i].hargajual === "number" || typeof dataPenjualan[i].totalTerjual === "number" || typeof dataPenjualan[i].sisaStok === "number") {
      //code: menghitung untung dari harga jual - harga beli dikali total terjual
      untungPenjualan += (dataPenjualan[i].hargaJual - dataPenjualan[i].hargaBeli) * dataPenjualan[i].totalTerjual;
    }
    //code: memastikan harga beli , harga jual, dan total terjual adalah number
    if (typeof dataPenjualan[i].hargaBeli === "number" || typeof dataPenjualan[i].hargajual === "number" || typeof dataPenjualan[i].totalTerjual === "number" || typeof dataPenjualan[i].sisaStok === "number") {
      //code: menghitung modal dari total terjual + sisa stok  dikali harga beli
      modalPenjualan += (dataPenjualan[i].totalTerjual + dataPenjualan[i].sisaStok) * dataPenjualan[i].hargaBeli;
    }

    persentaseKeuntungan = Math.round((untungPenjualan / modalPenjualan) * 100); //code: menghitung persentase keuntungan

    if (temp < dataPenjualan[i].totalTerjual) {
      //code: untuk melihat yang paling banyak terjual dari data total terjual
      temp = dataPenjualan[i].totalTerjual;
      result = dataPenjualan[i]; //code: menyimpan object ke dalam variabel result
    }
  }
  return {
    totalKeuntungan: "Rp." + untungPenjualan.toLocaleString(), //code: untuk mengubah nilai ke rupiah
    totalModal: "Rp." + modalPenjualan.toLocaleString(), //code: untuk mengubah nilai ke rupiah
    persentaseKeuntungan: persentaseKeuntungan.toString() + "%", //code: menambahkan karakter "%" setelah diubah ke string
    produkBukuTerlaris: result.namaProduk, //output => nama produk paling banyak dijual
    penulisTerlaris: result.penulis, //output => nama penulis yang bukunya paling laris
  };
}

console.log(getInfoPenjualan(dataPenjualanNovel));
