$(document).ready(function(){
    
    /*Agregando Dia 3*/
    (function(){
        var dia3 = function(){
            var Cdia3 = document.createElement('div');
            Cdia3.setAttribute('class', 'contenedor3 row justify-content-around')
            Cdia3.setAttribute('id', 'contenedor')
            Cdia3.innerHTML = `
            <div id="imagen" class="imagen col-6 d-flex flex-row justify-content-center">
            </div>
            <div id="texto" class="texto col-6 d-flex flex-column justify-content-center"></div>
            `

            var contenido = document.getElementById('padre')
            contenido.appendChild(Cdia3)
        }
        setTimeout(dia3, 21100)
    }())
    
    /*Agregando Dia 4*/
    (function(){
        var dia4 = function(){
            var Cdia4 = document.createElement('div');
            Cdia4.setAttribute('class', 'contenedor4 row justify-content-around')
            Cdia4.setAttribute('id', 'contenedor')
            Cdia4.innerHTML = `
            <div id="imagen" class="imagen col-6 d-flex flex-row justify-content-center">
            </div>
            <div id="texto" class="texto col-6 d-flex flex-column justify-content-center"></div>
            `

            var contenido = document.getElementById('padre')
            contenido.appendChild(Cdia4)
        }
        setTimeout(dia4, 30100)
    }())
})