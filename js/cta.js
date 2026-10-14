// Lionel : Tombol Join Our Movement - efek ripple + efek tekan, lalu pindah ke form.

const tombolJoin = document.getElementById('heroJoin');

tombolJoin.addEventListener('click', function (event) {
  event.preventDefault(); // tahan pindah halaman supaya efeknya sempat terlihat

  // Buat lingkaran ripple di titik yang diklik
  const kotak = tombolJoin.getBoundingClientRect();
  const ripple = document.createElement('span');
  ripple.className = 'ripple';
  if (event.detail === 0) {
    // diklik lewat keyboard (Enter): ripple muncul di tengah tombol
    ripple.style.left = kotak.width / 2 + 'px';
    ripple.style.top = kotak.height / 2 + 'px';
  } else {
    ripple.style.left = event.clientX - kotak.left + 'px';
    ripple.style.top = event.clientY - kotak.top + 'px';
  }
  tombolJoin.appendChild(ripple);

  // Efek tekan pada tombol (animasi ada di css/style.css)
  tombolJoin.classList.add('tombol-klik');

  // Setelah 0,6 detik, pindah ke form Daftar Relawan
  setTimeout(function () {
    window.location.href = tombolJoin.getAttribute('href');
  }, 600);
});
