$(document).ready(() => {
  // Inisiasi data data
  let dataPesanan = {
    idPemesanan: null,
    namaPemesan: "",
    nomorIdentitas: 0,
    jenisKelamin: "",
    tipeKamar: "",
    durasiPenginapan: 0,
    diskon: 0,
    hargaAwal: 0,
    totalBayar: 0,
    hargaKamar: 0,
    tanggalPesan: "",
    breakfast: false,
  };

  const dataKamar = [
    {
      tipeKamar: "standar",
      harga: 250000,
    },
    {
      tipeKamar: "deluxe",
      harga: 300000,
    },
    {
      tipeKamar: "family",
      harga: 350000,
    },
  ];

  const hargaBreakfast = 80000;

  // fungsi kelola uang
  const setTotalBayar = () => {
    return $("#totalBayar").val(dataPesanan.totalBayar);
  };

  const fungsiDiskon = (harga, durasiMenginap) => {
    if (durasiMenginap > 3) {
      return (harga * 10) / 100;
    } else {
      return 0;
    }
  };

  const fungsiTotalBayar = (harga, diskon, breakfast) => {
    switch (breakfast) {
      case true:
        return harga + hargaBreakfast - diskon;
        break;
      case false:
        return harga - diskon;
        break;
      default:
        return harga;
    }
  };

  // handler fungsi
  const handleFormPemesanan = (e) => {
    e.preventDefault();

    // get data input
    const idPemesanan = $("#idPemesanan").val();
    const namaPemesan = $("#namaPemesan").val();
    const jenisKelamin = $(".jenisKelamin:checked").val();
    const tanggalPesan = $("#tanggalPesan").val();

    // inisiasi space resume
    let resumePemesanan = $(".resumePemesanan");

    dataPesanan = {
      ...dataPesanan,
      idPemesanan,
      namaPemesan,
      jenisKelamin,
      tanggalPesan,
    };

    let notaPemesananHotel = `<pre>
Nama Pemesan      = ${dataPesanan.namaPemesan}
Nomor Identitas   = ${dataPesanan.nomorIdentitas}
Jenis Kelamin     = ${dataPesanan.jenisKelamin}
Tipe Kamar        = ${dataPesanan.tipeKamar}
Durasi Penginapan = ${dataPesanan.durasiPenginapan}
---------------------------------------------------
Jumlah bayar      = ${dataPesanan.hargaAwal}
Diskon            = ${dataPesanan.diskon}
===================================================
Total Bayar       = ${dataPesanan.totalBayar}
</pre>`;

    resumePemesanan.html(
      `<h1 style="padding-left: 12px;">Nota pemesanan Hotel</h1>${notaPemesananHotel}`
    );

    setTotalBayar();
  };

  const handleNomorIdentitas = (e) => {
    const nomorIdentitas = e.target.value;
    const nomorIdentitasMessage = $("#nomorIdentitasMessage");
    if (nomorIdentitas.length <= 16) {
      nomorIdentitasMessage.css("display", "table-row");
    } else {
      nomorIdentitasMessage.css("display", "none");
    }

    dataPesanan = {
      ...dataPesanan,
      nomorIdentitas,
    };

    setTotalBayar();
  };

  const handleTipeKamar = () => {
    const tipeKamar = $("#tipeKamar").val();

    const kamarPilihan = dataKamar.find((kamar) => {
      return kamar.tipeKamar === tipeKamar;
    });

    dataPesanan = {
      ...dataPesanan,
      tipeKamar,
      hargaAwal: kamarPilihan.harga,
      totalBayar: kamarPilihan.harga,
      hargaKamar: kamarPilihan.harga,
    };

    $("#harga").val(kamarPilihan.harga);

    setTotalBayar();
  };

  const handleDurasiMenginap = () => {
    const durasiMenginap = Number($("#durasiMenginap").val());
    const diskonPesanan = fungsiDiskon(dataPesanan.hargaKamar, durasiMenginap);
    const totalBayar = fungsiTotalBayar(
      dataPesanan.hargaKamar,
      diskonPesanan,
      dataPesanan.breakfast
    );

    dataPesanan = {
      ...dataPesanan,
      durasiPenginapan: durasiMenginap,
      totalBayar,
      diskon: diskonPesanan,
    };

    setTotalBayar();
  };

  const handleBreakfast = () => {
    const breakfast = $("#breakfast").is(":checked");

    if (breakfast) {
      dataPesanan = {
        ...dataPesanan,
        breakfast,
        hargaAwal: dataPesanan.hargaAwal + hargaBreakfast,
        totalBayar: dataPesanan.totalBayar + hargaBreakfast,
      };
      
    } else {
      dataPesanan = {
        ...dataPesanan,
        breakfast,
      };
    }

    setTotalBayar();
  };

  // form pemesanan
  $("#form-pemesanan").on("submit", handleFormPemesanan);

  // NomorIdentitas
  $("#nomorIdentitas").on("input", handleNomorIdentitas);

  // NomorIdentitasMessage
  $("#nomorIdentitasMessage").css("display", "none");

  // TipeKamar
  $("#tipeKamar").on("change", handleTipeKamar);

  // Durasi Menginap
  $("#durasiMenginap").on("input", handleDurasiMenginap);

  // Breakfast
  $("#breakfast").on("change", handleBreakfast);
});
