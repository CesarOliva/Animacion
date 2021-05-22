$(document).ready (function(){

    /*Agregando Dia 5*/
    (function(){
        var dia5 = function(){
            var Cdia5 = document.createElement('div');
            Cdia5.setAttribute('class', 'contenedor5 row justify-content-around')
            Cdia5.setAttribute('id', 'contenedor')
            Cdia5.innerHTML = `
            <div id="imagen" class="imagen col-6 d-flex flex-row justify-content-center">
            </div>
            <div id="texto" class="texto col-6 d-flex flex-column justify-content-center"></div>
            `

            var contenido = document.getElementById('padre')
            contenido.appendChild(Cdia5)
        }
        setTimeout(dia5, 38100)
    }())

    /*Agregando Dia 6*/
    (function(){
        var dia6 = function(){
            var Cdia6 = document.createElement('div');
            Cdia6.setAttribute('class', 'contenedor6 row justify-content-around')
            Cdia6.setAttribute('id', 'contenedor')
            Cdia6.innerHTML = `
            <div id="imagen" class="imagen col-6 d-flex flex-row justify-content-center">
            </div>
            <div id="texto" class="texto col-6 d-flex flex-column justify-content-center"></div>
            `

            var contenido = document.getElementById('padre')
            contenido.appendChild(Cdia6)
        }
        setTimeout(dia6, 44200)
    }())

})