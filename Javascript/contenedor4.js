$(document).ready(function(){

    /*Agregando Dia 7*/
    (function(){
        var dia6 = function(){
            var Cdia6 = document.createElement('div');
            Cdia6.setAttribute('class', 'contenedor7 row justify-content-around')
            Cdia6.setAttribute('id', 'contenedor')
            Cdia6.innerHTML = `
            <div id="imagen" class="imagen col-6 d-flex flex-row justify-content-center">
            </div>
            <div id="texto" class="texto col-6 d-flex flex-column justify-content-center"></div>
            `

            var contenido = document.getElementById('padre')
            contenido.appendChild(Cdia6)
        }
        setTimeout(dia6, 51900)
    }())

    /*Agregando texto*/
    (function(){
        var texto = function(){
            var txt = document.createElement('div')
            txt.setAttribute('class', 'contenedor-texto6m row justify-content-around')
            txt.innerHTML = `
            <div class="texto d-flex flex-column justify-content-center" id="texto">
            <p>Tantos buenos momentos que hemos pasado...</p>
            </div>`

            var content = document.getElementById('padre')
            content.appendChild(txt)
        }
        setTimeout(texto, 63000)
    }())
})