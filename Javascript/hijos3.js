$(document).ready (function() {
    /*Imagen Dia 3*/
    (function(){
        var Img3 = function(){
            var img3 = document.createElement('div');
            img3.setAttribute('class', 'img3 d-flex flex-column justify-content-center')
            img3.setAttribute('id', 'img3')
            img3.innerHTML = `
                <img style="padding-bottom: 20px" src="Imagenes/5\ 21NOV.jpg" width="454px" height="320px">
                <img style="padding-top: 20px" src="Imagenes/6\ 21NOV.jpg" width="454px" height="320px">
            `

            var ContImg3 = document.getElementById('imagen');
            ContImg3.appendChild(img3)
        };
        setTimeout(Img3, 21200)
    }());
 
    /*Texto Dia 3*/
    (function(){
        var Texto3 = function(){
            var texto3 = document.createElement('div');
            texto3.setAttribute('class', 'texto3  d-flex flex-column justify-content-center');
            texto3.setAttribute('id', 'texto');
            texto3.innerHTML = `
            <h1 class="centro" id= "centro">21 Noviembre 2020</h1>
            <p>Aquel hermoso dia en el cual nos hicimos novios. <br>
            Uno de los mejores dias que he tenido.
            No tengo palabras para describir lo lindo que fue🥺</p>
            `
        
            var ConText3 = document.getElementById('texto');
            ConText3.appendChild(texto3);
        };
        setTimeout(Texto3, 21200)
    }());

})     