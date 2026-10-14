// Anasti : Form Daftar Relawan - validasi nama, usia, email, dan program.

const formRelawan = document.getElementById('formRelawan');
const pesanForm = document.getElementById('pesanForm');

// Fungsi: tampilkan (atau hapus) pesan error di bawah sebuah kolom
function tampilkanError(idKolom, idError, pesan) {
  const kolom = document.getElementById(idKolom);
  document.getElementById(idError).textContent = pesan;
  if (pesan !== '') {
    kolom.classList.add('input-error');
  } else {
    kolom.classList.remove('input-error');
  }
}

// Fungsi: cek semua kolom, hasilnya true kalau semuanya valid
function validasiForm() {
  const nama = document.getElementById('nama').value.trim();
  const usia = Number(document.getElementById('usia').value);
  const email = document.getElementById('email').value.trim();
  const program = document.getElementById('program').value;
  let valid = true;

  // Nama: tidak boleh kosong, minimal 3 huruf
  if (nama === '') {
    tampilkanError('nama', 'errNama', 'Nama wajib diisi.');
    valid = false;
  } else if (nama.length < 3) {
    tampilkanError('nama', 'errNama', 'Nama minimal 3 karakter.');
    valid = false;
  } else {
    tampilkanError('nama', 'errNama', '');
  }

  // Usia: harus angka bulat antara 10 dan 100
  if (usia === 0 || isNaN(usia)) {
    tampilkanError('usia', 'errUsia', 'Usia wajib diisi dengan angka.');
    valid = false;
  } else if (usia < 10 || usia > 100 || !Number.isInteger(usia)) {
    tampilkanError('usia', 'errUsia', 'Usia harus bilangan bulat 10 sampai 100.');
    valid = false;
  } else {
    tampilkanError('usia', 'errUsia', '');
  }

  // Email: harus ada tanda @ dan titik setelahnya
  const pola = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (email === '') {
    tampilkanError('email', 'errEmail', 'Email wajib diisi.');
    valid = false;
  } else if (!pola.test(email)) {
    tampilkanError('email', 'errEmail', 'Format email belum benar, contoh: nama@email.com');
    valid = false;
  } else {
    tampilkanError('email', 'errEmail', '');
  }

  // Program: harus memilih salah satu
  if (program === '') {
    tampilkanError('program', 'errProgram', 'Pilih salah satu program.');
    valid = false;
  } else {
    tampilkanError('program', 'errProgram', '');
  }

  return valid;
}

formRelawan.addEventListener('submit', function (event) {
  event.preventDefault(); // cegah halaman reload, karena tidak ada backend

  if (validasiForm()) {
    const nama = document.getElementById('nama').value.trim();
    pesanForm.className = 'text-sm font-semibold text-green-700';
    pesanForm.textContent = 'Pendaftaran berhasil! Terima kasih, ' + nama + '. Selamat bergabung dengan GreenLife.';
    formRelawan.reset();
  } else {
    pesanForm.className = 'text-sm font-semibold text-red-600';
    pesanForm.textContent = 'Mohon periksa kembali kolom yang ditandai merah.';
  }
});
