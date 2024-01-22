// ELEMENTI
const image = document.getElementById('image')
const upArrow = document.getElementById('up-arrow')
const downArrow = document.getElementById('down-arrow')

// al caricamento della pagina generare la lista di slides rendendo visibile solo la prima

const slides = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
];

image.innerHTML = ('<img id="image" src="./img/01.webp" alt="image">')
//thumbs.classList.remove('border')

let i = 0;
let cerca = slides[i]
let time = ''



// al click delle frecce

clickArrow();
slidesTimer()

image.addEventListener('mouseover', function () {
    clearInterval(time)
})





//for(i = 0; i <= slides.length; i++){










