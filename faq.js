const buttons = document.querySelectorAll('.button-space');

function toggleClicked() {
    const vertical = this.querySelector('.vertical');
    const wrapper = this.querySelector('.line-wrapper');

    // Znajdź odpowiedni element .faq-hidden w zasięgu button-space
    const faqHidden = this.closest('.faq-mini-box').querySelector('.faq-hidden');

    if (vertical) {
        vertical.classList.toggle('opened');
    }

    if (wrapper) {
        wrapper.classList.toggle('opened');
    }

    if (faqHidden) {
        faqHidden.classList.toggle('opened');
    }
}

buttons.forEach(button => {
    button.addEventListener('click', toggleClicked);
});
