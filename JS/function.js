function clickArrow() {

    upArrow.addEventListener('click', function () {

        // incremento l'indice

        i++;
        console.log(i)

        cerca = (`${slides[i]}`)

        console.log(slides[i])

        if (i < slides.length) {

            image.innerHTML = (`<img id="image" src="./img/${cerca}" alt="image">`);

            downArrow.classList.remove('d-none')

        }


        if (i == slides.length) {
            i = 0
            image.innerHTML = ('<img id="image" src="./img/01.webp" alt="image">')
            console.log(i)
        }

    })

    // al click della freccia in basso

    downArrow.addEventListener('click', function () {

        // decremento l'indice

        i--;
        console.log(i)

        cerca = (`${slides[i]}`)


        console.log(slides[i])

        // visualizzo l'immagine precedente

        if (i >= 0) {

            image.innerHTML = (`<img id="image" src="./img/${cerca}" alt="image">`);

        }

        if (i < slides.length) {

            upArrow.classList.remove('d-none')

        }

        if (i < 0) {
            i = slides.length - 1
            image.innerHTML = ('<img id="image" src="./img/05.webp" alt="image">')
            console.log(i)
        }

    })

}

function slidesTimer() {
    time = setInterval(function () {

        i++
        console.log(i)
        cerca = (`${slides[i]}`)
        image.innerHTML = (`<img id="image" src="./img/${cerca}" alt="image">`);
        if (i == slides.length) {
            i = 0
            image.innerHTML = ('<img id="image" src="./img/01.webp" alt="image">')
            console.log(i)
        }


    }, 1000)
}