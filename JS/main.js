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

console.log(slides[0])

image.innerHTML = ('<img id="image" src="./img/01.webp" alt="image">')
console.log(image.innerHTML)

let i = 0; 
console.log(i)

// al click della freccia in alto

upArrow.addEventListener('click', function () {

    // incremento l'indice

    i++;
    console.log(i)

    const cerca = (`src="./img/${slides[i]}"`)
    console.log(slides[i])

    // visualizzo l'immagine successiva

    if (i >= 0) {

        image.innerHTML = (`<img id="image" ${cerca} alt="image">`);

    } else {
        image.innerHTML = ``
    }

})

// al click della freccia in basso

downArrow.addEventListener('click', function () {

    // decremento l'indice

    i--;
    console.log(i)

    const cerca = (`src="./img/${slides[i]}"`)
    console.log(slides[i])

    // visualizzo l'immagine precedente

    if (i >= 0) {

        image.innerHTML = (`<img id="image" ${cerca} alt="image">`);

    } else {
        image.innerHTML = ``
    }

})


