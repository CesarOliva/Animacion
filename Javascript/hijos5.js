$(document).ready(function(){
    
    /*Imagen Dia 5*/
    (function(){
        var Img5 = function(){
            var img5 = document.createElement('div');
            img5.setAttribute('class', 'img5 d-flex flex-column justify-content-center')
            img5.setAttribute('id', 'img')
            img5.innerHTML = `
                <img style="padding-bottom: 20px" src="Imagenes/11\ 8ABR.jpg" width="300px height="320px">
                <img style="padding-top: 20px" src="Imagenes/12\ 8ABR.jpg" width="300px height="320px">
            `

            var ContImg5 = document.getElementById('imagen');
            ContImg5.appendChild(img5)
        };
        setTimeout(Img5, 38200)
    }());
 
    /*Texto Dia 5*/
    (function(){
        var Texto5 = function(){
            var texto5 = document.createElement('div');
            texto5.setAttribute('class', 'texto5  d-flex flex-column justify-content-center');
            texto5.setAttribute('id', 'texto');
            texto5.innerHTML = `
            <h1 class="centro" id= "centro">8 Abril 2021</h1>
            <p>Apesar de que no pudimos ver la pelicula me la pasé muy bien ese dia, fue muy lindo pasar tiempo contigo🥺<br>
            Son de mis fotos tavoritas :)</p>
            `
        
            var ContText5 = document.getElementById('texto');
            ContText5.appendChild(texto5);
        };
        setTimeout(Texto5, 38200)
    }());

})