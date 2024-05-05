const search = document.querySelector('.search');
const input = document.querySelector('.search-input');
const btnopen = document.querySelector('.btn-search');
const btnclose = document.querySelector('.btn-close');

btnopen.addEventListener('click', () => {
    search.classList.add('active');
    input.focus();
})
btnclose.addEventListener('click', () => {
    search.classList.remove('active');
})