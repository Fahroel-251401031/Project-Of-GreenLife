// Zwinly : Statistik - animated counter, angka naik dari 0 sampai target.

const bagianStatistik = document.getElementById('statistik');
const angka = document.querySelectorAll('.counter');
let sudahJalan = false; // supaya animasi hanya berjalan satu kali

// Fungsi: naikkan satu angka dari 0 ke target dalam 50 langkah
function animasiAngka(elemen) {
  const target = Number(elemen.dataset.target);
  const langkah = 50;
  const jeda = 30; // milidetik antar langkah

  // Pengulangan: setiap langkah menampilkan angka yang sedikit lebih besar
  for (let i = 1; i <= langkah; i++) {
    setTimeout(function () {
      const nilai = Math.round((target * i) / langkah);
      elemen.textContent = nilai.toLocaleString('id-ID');
    }, i * jeda);
  }
}

// Fungsi: jalankan counter untuk keempat angka statistik
function jalankanCounter() {
  for (let i = 0; i < angka.length; i++) {
    animasiAngka(angka[i]);
  }
}

// Mulai animasi ketika section statistik sudah terlihat di layar
function cekPosisi() {
  if (sudahJalan) return;
  const posisi = bagianStatistik.getBoundingClientRect().top;
  if (posisi < window.innerHeight - 100) {
    sudahJalan = true;
    jalankanCounter();
  }
}

window.addEventListener('scroll', cekPosisi);
cekPosisi(); // cek sekali saat halaman dibuka
