window.onload = function () {
    // Funciones para el SLider Principal

    (function () {

        const sliders = [...document.querySelectorAll('.slider_body')];
        const arrowNext = document.querySelector(".nextSlide");
        const arrowBefore = document.querySelector(".prevSlide");
        const buttons = document.querySelectorAll('.button_slider');
        let value, valor_boton;
        arrowNext.addEventListener('click', () => changePosition(1));
        arrowBefore.addEventListener('click', () => changePosition(-1));

        // Eventos con los botones
        for (var i = 0; i < buttons.length; i++) {

            buttons[i].addEventListener("click", function () {
                const currentElement = Number(document.querySelector('.slider_body--show').dataset.id);
                valor_boton = Number((this.id).substring(3));
                value = valor_boton;
                sliders[currentElement - 1].classList.toggle('slider_body--show');
                sliders[value - 1].classList.toggle('slider_body--show');
            });
        }

        // Eventos con las flechas

        function changePosition(change) {
            const currentElement = Number(document.querySelector('.slider_body--show').dataset.id);
            value = currentElement;
            value += change;

            if (value === 0 || value == sliders.length + 1) {
                value = value === 0 ? sliders.length : 1;
            }
            sliders[currentElement - 1].classList.toggle('slider_body--show');
            sliders[value - 1].classList.toggle('slider_body--show');
            buttons[currentElement - 1].removeAttribute("checked", false);
            buttons[value - 1].setAttribute("checked", true);
        }

        // Slider secundario, cartelera de películas, flechas

        const pelis = [...document.querySelectorAll('.peli')];
        const peliNext = document.querySelector(".nextMovie");
        const peliBefore = document.querySelector(".prevMovie");
        let valor;

        peliNext.addEventListener('click', () => changeMovie(1));
        peliBefore.addEventListener('click', () => changeMovie(-1));

        function changeMovie(change) {
            const elementoActual = Number(document.querySelector('.peli_show').dataset.id);
            valor = elementoActual;
            valor += change;
            console.log(pelis)
            if (valor === 0 || valor == pelis.length + 1) {
                valor = valor === 0 ? pelis.length : 1;
            }
            pelis[elementoActual - 1].classList.toggle('peli_show');
            pelis[valor - 1].classList.toggle('peli_show');
        }


        // Slider terciario, cartelera de preventa y estrenos, flechas

        const preventa = [...document.querySelectorAll('.prev')];
        const preventaNext = document.querySelector(".nextProximo");
        const preventaBefore = document.querySelector(".prevProximo");
        let otroValor;

        preventaNext.addEventListener('click', () => changePrev(1));
        preventaBefore.addEventListener('click', () => changePrev(-1));

        function changePrev(change) {
            const elemento = Number(document.querySelector('.preventa_show').dataset.id);
            otroValor = elemento;
            otroValor += change;
            if (otroValor === 0 || otroValor == preventa.length + 1) {
                otroValor = valor === 0 ? preventa.length : 1;
            }
            preventa[elemento - 1].classList.toggle('preventa_show');
            preventa[otroValor - 1].classList.toggle('preventa_show');
        }



    }

    )()
}