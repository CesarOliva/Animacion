$(document).ready( function(){
    
    /*Imagen Dia1*/
        (function(){
        var img1 = function(){
                var animacion2 = document.createElement('div');
                animacion2.setAttribute('class', 'img1'); 
                animacion2.setAttribute('id', 'img1'); 
                animacion2.innerHTML = `
                    <img src="Imagenes/1\ 10OCT.jpg">
                `
        
                var contenedor = document.getElementById('imagen');
                contenedor.appendChild(animacion2);
            };
            setTimeout(img1, 4200)
        }())

    /*Texto Dia1*/
    
    (function(){
        var Texto = function(){
            var texto1 = document.createElement('div');
            texto1.setAttribute('class', 'texto1  d-flex flex-column justify-content-center');
            texto1.setAttribute('id', 'texto1');
            texto1.innerHTML = `
            <h1 class="centro" id= "centro">10 Octubre 2020</h1>
            <p>La primera vez que nos vimos despues de mas de un año. <br>
            Fue una de nuestras primeras fotos, fue un buen dia ｡◕‿◕｡</p>
            `
        
            var contenedor = document.getElementById('texto');
            contenedor.appendChild(texto1);
        
        };
            setTimeout(Texto, 4500)
    }());

})