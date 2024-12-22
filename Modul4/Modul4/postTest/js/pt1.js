function hit() {
  const golongan = document.querySelector("tbody select").value;
  console.log(golongan)
  const jumlahAnak = parseInt(document.getElementById("anak").value) || 0;

  // data gapok dan persen tunjangan
  const gaPok = [250000, 300000, 350000];
  const persenTunjangan = [5, 10, 15];

  let tunjangan = 0;
  let gajiBersih = 0;
  if (golongan === "I") {
    tunjangan = jumlahAnak * gaPok[0] * (persenTunjangan[0] / 100);
    gajiBersih = gaPok[0] + tunjangan;
    
    document.getElementById("gapok").value = gaPok[0];
    document.getElementById("tunjangan").value = tunjangan;
    document.getElementById("gaji").value = gajiBersih;
  } else if (golongan === "II") {
    tunjangan = jumlahAnak * gaPok[1] * (persenTunjangan[1] / 100);
    gajiBersih = gaPok[1] + tunjangan;
    document.getElementById("gapok").value = gaPok[1];
    document.getElementById("tunjangan").value = tunjangan;
    document.getElementById("gaji").value = gajiBersih;
  } else if (golongan === "III") {
    tunjangan = jumlahAnak * gaPok[2] * (persenTunjangan[2] / 100);
    gajiBersih = gaPok[2] + tunjangan;
    document.getElementById("gapok").value = gaPok[2];
    document.getElementById("tunjangan").value = tunjangan;
    document.getElementById("gaji").value = gajiBersih;
  }
}
