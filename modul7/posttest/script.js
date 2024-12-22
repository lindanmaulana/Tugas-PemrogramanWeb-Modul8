const dataMhs = [
  {
    kodeAnggota: "A001",
    nim: "123456789",
    namaLengkap: "Andi Pratama",
    prodi: "Teknik Informatika",
    kelas: "TI-1A",
    jenisKelamin: "Laki-laki",
    noTelpon: "081234567890",
    foto: "/modul7/assets/images/avatar.png",
    alamat: "Jl. Merdeka No. 1, Jakarta",
  },
  {
    kodeAnggota: "A002",
    nim: "987654321",
    namaLengkap: "Siti Aisyah",
    prodi: "Sistem Informasi",
    kelas: "SI-2B",
    jenisKelamin: "Perempuan",
    noTelpon: "082345678901",
    foto: "/modul7/assets/images/avatar.png",
    alamat: "Jl. Sudirman No. 2, Bandung",
  },
  {
    kodeAnggota: "A003",
    nim: "1122334455",
    namaLengkap: "Budi Santoso",
    prodi: "Teknik Elektro",
    kelas: "TE-3C",
    jenisKelamin: "Laki-laki",
    noTelpon: "083456789012",
    foto: "/modul7/assets/images/avatar.png",
    alamat: "Jl. Gatot Subroto No. 3, Surabaya",
  },
  {
    kodeAnggota: "A004",
    nim: "5566778899",
    namaLengkap: "Rina Kartika",
    prodi: "Manajemen",
    kelas: "MN-4A",
    jenisKelamin: "Perempuan",
    noTelpon: "084567890123",
    foto: "/modul7/assets/images/avatar.png",
    alamat: "Jl. Ahmad Yani No. 4, Medan",
  },
  {
    kodeAnggota: "A005",
    nim: "9988776655",
    namaLengkap: "Joko Purwanto",
    prodi: "Akuntansi",
    kelas: "AK-5B",
    jenisKelamin: "Laki-laki",
    noTelpon: "085678901234",
    foto: "/modul7/assets/images/avatar.png",
    alamat: "Jl. Diponegoro No. 5, Yogyakarta",
  },
];

const renderDataMhs = () => {
  const tbody = document.getElementById("tbody");
  const data = dataMhs?.map((mhs, index) => {
    return `
      <tr>
          <th scope="row">${index + 1}</th>
          <td>${mhs.kodeAnggota}</td>
          <td>${mhs.nim}</td>
          <td>${mhs.namaLengkap}</td>
          <td>${mhs.prodi}</td>
          <td>${mhs.kelas}</td>
          <td>${mhs.jenisKelamin}</td>
          <td>${mhs.noTelpon}</td>
          <td><img src=${mhs.foto} class="img-fluid" style="width: 80px" /></td>
          <td>${mhs.alamat}</td>
        </tr>
      `;
  });

  tbody.innerHTML = data;
};

renderDataMhs();