$(document).ready(function(){
        /*Agregando texto largooooo*/
        (function(){
            var texto = function(){
                var txt = document.createElement('div')
                txt.setAttribute('class', 'contenedor-texto6m row justify-content-around')
                txt.innerHTML = `
                <div class="texto d-flex flex-column justify-content-center" id="texto">
                <p class="txtlrg">Gracias por seguir a mi lado, gracias por permitirme ser como realmente soy <br>
                Soy muy afortunado de tener como novia a una excelente persona, eres lo mejor que existe <br>
                Te amo mucho💗</p>
                </div>`
    
                var content = document.getElementById('padre')
                content.appendChild(txt)
            }
            setTimeout(texto, 69100)
        }())

        /*Agregando 6 meses*/
        (function(){
            var texto = function(){
                var txt = document.createElement('div')
                txt.setAttribute('class', 'contenedor-texto6m row justify-content-around')
                txt.innerHTML = `
                <div class="texto d-flex flex-column justify-content-center" id="texto">
                <p class="meses">Felices 6 meses🥺💕💕</p>
                </div>`
    
                var content = document.getElementById('padre')
                content.appendChild(txt)
            }
            setTimeout(texto, 84500)
        }())
})