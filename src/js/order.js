(() => {
    const refs = {
        openModalBtn: document.querySelector('[data-order-open]'),
        closeModalBtns: document.querySelectorAll('[data-order-close]'),
        modal: document.querySelector('[data-order]'),
        form: document.querySelector('[data-order-form]'),
    };

    refs.form.addEventListener('submit', function(event) {
        event.preventDefault();
        if (!refs.form.checkValidity()) {
            return;
        }

        toggleModal(); 
    });

    refs.closeModalBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            toggleModal();
            submitForm();
        });
    });

    function toggleModal() {
        refs.modal.classList.toggle('is-open');
        if (refs.modal.classList.contains('is-open')) {
            refs.modal.style.display = 'block';
        } else {
            refs.modal.style.display = 'none'; 
        }
    }

    function submitForm() {
        refs.form.submit();
    }
})();
