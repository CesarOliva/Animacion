$(document).ready(function(){
    
    /*Imagen Dia 4*/
    (function(){
        var Img4 = function(){
            var img4 = document.createElement('div');
            img4.setAttribute('class', 'img4 d-flex flex-column justify-content-center')
            img4.setAttribute('id', 'img')
            img4.innerHTML = `
                <img style="padding-bottom: 20px" src="Imagenes/7\ 6feb.jpg" width="300px height="320px">
                <img style="padding-top: 20px" src="Imagenes/8\ 6feb.jpg" width="300px height="320px">
            `

            var ContImg4 = document.getElementById('imagen');
            ContImg4.appendChild(img4)
        };
        setTimeout(Img4, 30200)
    }());
 
    /*Texto Dia 4*/
    (function(){
        var Texto4 = function(){
            var texto4 = document.createElement('div');
            texto4.setAttribute('class', 'texto4  d-flex flex-column justify-content-center');
            texto4.setAttribute('id', 'texto');
            texto4.innerHTML = `
            <h1 class="centro" id= "centro">6 Febrero 2020</h1>
            <p>Aaaaaaaa, ese dia fue muy lindo, me la pasé muy bien<br>
            Disfruté cada segundo que estuvimos juntos🥺</p>
            `
        
            var ContText4 = document.getElementById('texto');
            ContText4.appendChild(texto4);
        };
        setTimeout(Texto4, 30200)
    }());    
    
})