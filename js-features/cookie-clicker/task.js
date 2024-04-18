const counter = document.getElementById('clicker__counter');
const cookie = document.getElementById('cookie');

cookie.onclick = function() {
    counter.textContent++;
    if (cookie.width === 200) {
        cookie.width = 230;
        cookie.height = 230;
    } else {
        cookie.width = 200;
        cookie.height = 200;
    }
}