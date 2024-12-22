// data barang
const data = [
  {
    kode: "B001",
    nama: "Buku",
    harga: 5000,
  },
  {
    kode: "B002",
    nama: "Penggaris",
    harga: 1500,
  },
  {
    kode: "B003",
    nama: "Pulpen",
    harga: 2000,
  },
];

let kodeBarang = "";
let namaBarang = "";
let hargaBarang = 0;

let jumlahBeli = 0;
let jumlahBayar = 0;
let besarPotongan = 0;
let total = 0;

function handleSelectOption() {
  const inputKode = document.getElementById("kode").value;
  const dataSlected = data.filter((e) => e.kode === inputKode);
  document.getElementById("namaBarang").value = dataSlected.map((e) => e.nama);
  document.getElementById("hargaBarang").value = dataSlected.map(
    (e) => e.harga
  );
  kodeBarang = dataSlected.map((e) => e.kode);
  namaBarang = dataSlected.map((e) => e.nama);
  hargaBarang = dataSlected.map((e) => e.harga);

  document.getElementById("jumlahBeli").value = 0;
  document.getElementById("potongan").value = 0;
  document.getElementById("besarPotongan").value = 0;
  document.getElementById("jumlahBayar").value = 0;
  document.getElementById("totalBayar").value = 0;
}

function handleJumlahBeli() {
  jumlahBeli = document.getElementById("jumlahBeli").value;
  jumlahBayar = jumlahBeli * hargaBarang;
  document.getElementById("jumlahBayar").value = jumlahBayar;
  if (jumlahBeli > 0 && jumlahBeli <= 10) {
    document.getElementById("potongan").value = 5;
    besarPotongan = jumlahBayar * (5 / 100);
    document.getElementById("besarPotongan").value = besarPotongan;
  } else if (jumlahBeli > 11 && jumlahBeli <= 20) {
    document.getElementById("potongan").value = 10;
    besarPotongan = jumlahBayar * (10 / 100);
    document.getElementById("besarPotongan").value = besarPotongan;
  } else if (jumlahBeli >= 21){
    document.getElementById("potongan").value = 15;
    besarPotongan = jumlahBayar * (15 / 100);
    document.getElementById("besarPotongan").value = besarPotongan;
  } else {
    document.getElementById("potongan").value = 0;
    document.getElementById("besarPotongan").value = 0;
  }
  jumlahBayar !== 0 ? total = jumlahBayar - besarPotongan : total = 0;
  document.getElementById("totalBayar").value = total
}

function handleClick() {
  console.log(namaBarang);
  const notaBelanja = document.getElementById("nota");
  const detailNota = `<pre>
  Kode Barang   = ${kodeBarang}
  Nama Barang   = ${namaBarang}
  Harga Barang  = ${hargaBarang}
  Jumlah Beli   = ${jumlahBeli}
  ---------------------------
  Jumlah bayar  = ${jumlahBayar}
  Potongan      = ${besarPotongan}
  ===========================
  Total Bayar   = ${total}
  </pre>`;
  kodeBarang != ""
    ? (notaBelanja.innerHTML = `<h1>Nota Penjualan</h1>${detailNota}`)
    : "";
}
