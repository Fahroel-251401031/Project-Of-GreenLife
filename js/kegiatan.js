// Montela : Filter kegiatan berdasarkan kategori.

const tombolFilter = document.querySelectorAll('.filter-btn');
const kartuKegiatan = document.querySelectorAll('.kegiatan-card');
const pesanKosong = document.getElementById('pesanKosong');

// Fungsi: tampilkan hanya kartu yang kategorinya cocok dengan tombol yang diklik
function filterKegiatan(kategori) {
  let jumlahTampil = 0;

  // Pengulangan 1: cek setiap kartu kegiatan
  for (let i = 0; i < kartuKegiatan.length; i++) {
    const cocok = kategori === 'Semua' || kartuKegiatan[i].dataset.kategori === kategori;
    if (cocok) {
      kartuKegiatan[i].classList.remove('hidden');
      jumlahTampil++;
    } else {
      kartuKegiatan[i].classList.add('hidden');
    }
  }

  // Pengulangan 2: tandai tombol yang sedang aktif
  for (let j = 0; j < tombolFilter.length; j++) {
    if (tombolFilter[j].dataset.filter === kategori) {
      tombolFilter[j].classList.add('bg-hijau', 'text-white');
    } else {
      tombolFilter[j].classList.remove('bg-hijau', 'text-white');
    }
  }

  // Kalau tidak ada kartu yang tampil, munculkan pesan
  if (jumlahTampil === 0) {
    pesanKosong.classList.remove('hidden');
  } else {
    pesanKosong.classList.add('hidden');
  }
}

for (let k = 0; k < tombolFilter.length; k++) {
  tombolFilter[k].addEventListener('click', function () {
    filterKegiatan(this.dataset.filter);
  });
}
