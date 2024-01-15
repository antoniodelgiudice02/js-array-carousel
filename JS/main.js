// ELEMENTI
const image = document.getElementById('image')
const upArrow = document.getElementById('up-arrow')
const downArrow = document.getElementById('down-button')

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


// al click della freccia in alto

upArrow.addEventListener('click', function () {

    // visualizzare l'immagine succesiva in base all'ordine dell'array

    for (let i = 0; i <= slides.length - 1; i++) {
        console.log([i])

        const cerca =  (`src="./img/${slides[i]}"`)

        console.log(cerca)
        console.log(slides[i])

        image.innerHTML = (`<img id="image" ${cerca} alt="image">`)
        


    }

})


