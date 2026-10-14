// Fahroel : Navbar responsif - menu hamburger di HP + tombol kembali ke atas.

// Menu hamburger: tombol ☰ menampilkan/menyembunyikan daftar menu
const tombolMenu = document.getElementById('menuBtn');
const menu = document.getElementById('menu');

tombolMenu.addEventListener('click', function () {
  const terbuka = menu.classList.toggle('hidden') === false;
  tombolMenu.setAttribute('aria-expanded', String(terbuka));
});

// Tutup menu setelah salah satu link diklik (supaya tidak menutupi halaman di HP)
const linkMenu = menu.querySelectorAll('a');
for (let i = 0; i < linkMenu.length; i++) {
  linkMenu[i].addEventListener('click', function () {
    menu.classList.add('hidden');
    tombolMenu.setAttribute('aria-expanded', 'false');
  });
}

// Tombol kembali ke atas: muncul kalau halaman sudah di-scroll lebih dari 400px
const tombolAtas = document.getElementById('topBtn');

window.addEventListener('scroll', function () {
  if (window.scrollY > 400) {
    tombolAtas.classList.remove('hidden');
  } else {
    tombolAtas.classList.add('hidden');
  }
});

tombolAtas.addEventListener('click', function () {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
