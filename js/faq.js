// Lionel : FAQ - accordion buka/tutup, hanya satu jawaban yang terbuka.

const itemFaq = document.querySelectorAll('.faq-item');

// Fungsi: tutup semua jawaban FAQ
function tutupSemua() {
  for (let i = 0; i < itemFaq.length; i++) {
    itemFaq[i].querySelector('.faq-jawab').classList.add('hidden');
    itemFaq[i].querySelector('.faq-ikon').textContent = '+';
    itemFaq[i].classList.remove('terbuka');
  }
}

// Fungsi: buka atau tutup satu item saat pertanyaannya diklik
function klikPertanyaan(item) {
  const jawab = item.querySelector('.faq-jawab');
  const sedangTutup = jawab.classList.contains('hidden');

  tutupSemua(); // tutup dulu semuanya

  if (sedangTutup) {
    jawab.classList.remove('hidden');
    item.querySelector('.faq-ikon').textContent = '−';
    item.classList.add('terbuka');
  }
}

for (let i = 0; i < itemFaq.length; i++) {
  const tombol = itemFaq[i].querySelector('.faq-tanya');
  tombol.addEventListener('click', function () {
    klikPertanyaan(itemFaq[i]);
  });
}
