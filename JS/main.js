// ELEMENTI
const image = document.getElementById('image')

// al caricamento della pagina generare la lista di slides rendendo visibile solo la prima

const slides = [
    '01.webp',
    '02.webp',
    '03.webp',
    '04.webp',
    '05.webp',
];

console.log(slides[0])

image.innerHTML=('<img id="image" src="./img/01.webp" alt="image">')

