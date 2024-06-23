const reveal = document.querySelectorAll('.reveal');

const setRevealTimeout = (i) => {
    setTimeout(function() {
        i.classList.add('reveal_active');
    }, 100);
};

reveal.forEach((i) => {
    window.addEventListener('scroll', () => {
        if (window.innerHeight > i.getBoundingClientRect().top) {
            setRevealTimeout(i);
        } else {
            i.classList.remove('reveal_active');
        }
    });
});