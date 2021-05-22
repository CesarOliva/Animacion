$(document).ready(function(){
    /*Imagen Dia 7*/
    (function(){
        var Img7 = function(){
            var img7 = document.createElement('div');
            img7.setAttribute('class', 'img7 d-flex flex-column justify-content-center')
            img7.setAttribute('id', 'img')
            img7.innerHTML = `
            <img src="Imagenes/15\ 9MAY.jpg" style="padding-bottom:20px" width="300px" height="320px">    
            <img src="Imagenes/19\ 9MAY.jpg" style="padding-top: 20px" width="300px" height="320px">

            `

            var ContImg7 = document.getElementById('imagen');
            ContImg7.appendChild(img7)
        };
        setTimeout(Img7, 52100)
    }());
 
    /*Texto Dia 7*/
    (function(){
        var Texto7 = function(){
            var texto7 = document.createElement('div');
            texto7.setAttribute('class', 'texto7  d-flex flex-column justify-content-center');
            texto7.setAttribute('id', 'texto');
            texto7.innerHTML = `
            <h1 class="centro" id= "centro">9 Mayo 2021</h1>
            <p>Las ultimas fotos que nos hemos tomado.<br>
            Fue un dia muy lindo, me la pasé muy bien jsjs</p>
            `
        
            var ContText7 = document.getElementById('texto');
            ContText7.appendChild(texto7);
        };
        setTimeout(Texto7, 52100)
    }());
})