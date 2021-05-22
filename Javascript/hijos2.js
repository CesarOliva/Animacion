$(document).ready(function(){
    
    /*Imagen Dia 2*/
    (function(){
        var Img2 = function(){
            var img2 = document.createElement('div');
            img2.setAttribute('class', 'img2 d-flex flex-column')
            img2.setAttribute('id', 'img2')
            img2.innerHTML = `
                <img style="padding-bottom: 20px" width="300px" height="320px" src="Imagenes/2\ 24OCT.jpg">
                <img style="padding-top: 20px" width="300px" height="320px" src="Imagenes/3\ 24OCT.jpg">
            `

            var ContImg2 = document.getElementById('imagen');
            ContImg2.appendChild(img2)
        };
        setTimeout(Img2, 11300)
    }());

    /*Texto Dia2*/
    (function(){
        var Texto2 = function(){
            var texto2 = document.createElement('div');
            texto2.setAttribute('class', 'texto2  d-flex flex-column justify-content-center');
            texto2.setAttribute('id', 'texto2');
            texto2.innerHTML = `
            <h1 class="centro" id= "centro">24 Octubre 2020</h1>
            <p>Ese dia supe que estaba enamorado de ti. <br>
            Lo recuerdo perfectamente, cuando estabamos en los columpios, cuando te di mi sudadera
            y cuando estabamos agarrados del brazo, fue muy lindo🥺</p>
            `
        
            var ConText2 = document.getElementById('texto');
            ConText2.appendChild(texto2);
        };
        setTimeout(Texto2, 11300)
    }());


})