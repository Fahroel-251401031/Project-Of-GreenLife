// Zwinly : Galeri - modal untuk melihat gambar lebih besar.

const modal = document.getElementById('modalGambar');
const gambarBesar = document.getElementById('gambarBesar');
const keterangan = document.getElementById('keteranganGambar');
const tombolTutup = document.getElementById('tutupModal');
const itemGaleri = document.querySelectorAll('.galeri-item');

// Fungsi buka modal: salin gambar yang diklik ke modal lalu tampilkan
function bukaModal(gambar, teks) {
  gambarBesar.src = gambar.src;
  gambarBesar.alt = gambar.alt;
  keterangan.textContent = teks;
  modal.classList.remove('hidden');
  document.body.classList.add('modal-open');
}

// Fungsi tutup modal
function tutupModal() {
  modal.classList.add('hidden');
  document.body.classList.remove('modal-open');
}

// Setiap foto di galeri bisa diklik untuk membuka modal
for (let i = 0; i < itemGaleri.length; i++) {
  itemGaleri[i].addEventListener('click', function () {
    bukaModal(this.querySelector('img'), this.dataset.caption);
  });
}

// Modal bisa ditutup dengan tombol X, klik area gelap, atau tombol Escape
tombolTutup.addEventListener('click', tutupModal);

modal.addEventListener('click', function (event) {
  if (event.target === modal) {
    tutupModal();
  }
});

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape') {
    tutupModal();
  }
});
