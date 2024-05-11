const ddV = document.querySelector('.dropdown__value');
const ddL = document.querySelector('.dropdown__list');


ddV.addEventListener('click', () => {
    ddL.classList.toggle('dropdown__list_active');
    });


document.querySelectorAll('.dropdown__item').forEach(item => 
    item.addEventListener('click', (event) => {
        event.preventDefault();
        ddV.textContent = item.textContent;
        ddL.classList.remove('dropdown__list_active');
    })
);