let sizes = Array.from(document.querySelectorAll('.font-size'))
let book = document.getElementById('book')

sizes.forEach((size) => {
    size.addEventListener('click', (event) => {
        event.preventDefault()
        sizes.forEach((size) => { size.classList.remove('font-size_active') })
        if (size.classList.contains('font-size_small')) {
            size.classList.add('font-size_active')
            book.className = 'book book_fs-small'
        }
        if (size.className === 'font-size') {
            size.classList.add('font-size_active')
            book.className = 'book'
        }
        if (size.classList.contains('font-size_big')) {
            size.classList.add('font-size_active')
            book.className = 'book book_fs-big'
        }
        book.textContent
    })
})