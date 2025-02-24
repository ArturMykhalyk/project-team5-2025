(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-order-open]'),
        closeModalBtns: document.querySelectorAll('[data-order-close]'), // Все кнопки закрытия
        modal: document.querySelector('[data-order]'),
        form: document.querySelector('[data-order-form]'),
    };

    // Открытие модального окна после отправки формы
    refs.form.addEventListener('submit', function(event) {
        event.preventDefault(); // Предотвращаем отправку формы (перезагрузку страницы)

        // Проверка валидности формы
        if (!refs.form.checkValidity()) {
            return; // Если форма не валидна, окно не откроется
        }

        toggleModal(); // Показываем модальное окно
    });

    // Закрытие модального окна при нажатии на любую кнопку с атрибутом data-order-close
    refs.closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleModal(); // Скрываем модальное окно
            submitForm();  // Отправляем форму после закрытия окна
        });
    });

    // Функция для показа/скрытия модального окна
    function toggleModal() {
        refs.modal.classList.toggle('is-open');
        if (refs.modal.classList.contains('is-open')) {
            refs.modal.style.display = 'block'; // Показываем модальное окно
        } else {
            refs.modal.style.display = 'none'; // Скрываем модальное окно
        }
    }

    // Функция для отправки формы
    function submitForm() {
        // Отправляем форму вручную
        refs.form.submit();
    }
})();
