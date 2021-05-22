$(document).ready(function(){
    
    /*Imagen Dia 6*/
    (function(){
        var Img6 = function(){
            var img6 = document.createElement('div');
            img6.setAttribute('class', 'img6 d-flex flex-column justify-content-center')
            img6.setAttribute('id', 'img')
            img6.innerHTML = `
                <img src="Imagenes/14\ 23ABRIL.jpg">
            `

            var ContImg6 = document.getElementById('imagen');
            ContImg6.appendChild(img6)
        };
        setTimeout(Img6, 44210)
    }());
 
    /*Texto Dia 6*/
    (function(){
        var Texto6 = function(){
            var texto6 = document.createElement('div');
            texto6.setAttribute('class', 'texto6  d-flex flex-column justify-content-center');
            texto6.setAttribute('id', 'texto');
            texto6.innerHTML = `
            <h1 class="centro" id= "centro">23 Abril 2021</h1>
            <p>Nos vimos casi todo el dia, fue lo mejor, me gusta pasar tiempo a tu lado c: <br>
            Que linda foto🥺</p>
            `
        
            var ContText6 = document.getElementById('texto');
            ContText6.appendChild(texto6);
        };
        setTimeout(Texto6, 44210)
    }());

})