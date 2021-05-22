$(document).ready (function (){
    
    /*  Funcion para crear un div contenedor  */
    (function(){
        /*Se pone en una variable para guardar todo y posteriormente usarla*/ /*Se usa otra funcion dentro de la funcion, se le llama funcion anidada*/
        var contenedor = function(){
            // Poner una variable y crear el documento, en este caso un div    
            var contenedor = document.createElement('div'); /*Le especifico que quiero crear un div*/
            // Agregar atributos a la caja 
            contenedor.setAttribute('class', 'contenedor row justify-content-around') //El atributo será class y será contenedor /*Lo de row y justify-content son clases de bootstrap*/
            contenedor.setAttribute('id', 'contenedor') /*El atributo es id y será contenedor
            Para usarlo con javascript*/

            /*el innerHTML es para poner codigo HTML (pero escrito así como
            se escribe en el dom, si no con las etiquetas y así)*/
            contenedor.innerHTML = `
            <div id="imagen" class="imagen col-6 d-flex flex-column justify-content-center">
            </div>
            <div id="texto" class="texto col-6 d-flex flex-column justify-content-center"></div>
            `
            /*Crea 2 div's, el primero es para imagenes y el segundo es para textos*/

            // Agregar el elemento de la variable al documento HTML
            var contenido = document.getElementById('padre') //Obtener el elemento que tenga el Id, este elemento es un elemento del documento HTML
            contenido.appendChild(contenedor) //Poner lo creado dentro de el elemento que tenga el id anterior
        }
        /*Que la funcion se ejecute en un tiempo determinado*/
        setTimeout(contenedor, 3900) /*Que se ejecute la variable  una vez pasados 4 segundos*/
    }())

    /*Agregando Dia 2*/
    //Es exactamente lo mismo que lo pasado, solo cambia el tiempo de cuando se ejecute la variable
    (function(){
        var dia2 = function(){
            var Cdia2 = document.createElement('div');
            Cdia2.setAttribute('class', 'contenedor2 row justify-content-around')
            Cdia2.setAttribute('id', 'contenedor')
            Cdia2.innerHTML = `
            <div id="imagen" class="imagen col-6 d-flex flex-column justify-content-center">
            </div>
            <div id="texto" class="texto col-6 d-flex flex-column justify-content-center"></div>
            `

            var contenido = document.getElementById('padre')
            contenido.appendChild(Cdia2)
        }
        setTimeout(dia2, 11200)
    }())
})