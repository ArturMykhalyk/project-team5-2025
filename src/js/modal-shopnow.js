document.addEventListener('DOMContentLoaded', function () {
  const modal = document.getElementById('modal');
  const openModalBtns = document.querySelectorAll(
    '#openModal, #openModalmobile'
  );
  const closeModalBtn = document.getElementById('closeModal');

  // Відкрити модалку для всіх кнопок
  openModalBtns.forEach(function (btn) {
    btn.addEventListener('click', function () {
      modal.style.display = 'flex';
    });
  });

  // Закрити модалку
  closeModalBtn.addEventListener('click', function () {
    modal.style.display = 'none';
  });

  // Закрити при кліку поза вікном
  window.addEventListener('click', function (event) {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
});

