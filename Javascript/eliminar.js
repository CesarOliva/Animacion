$(document).ready (function (){

    /*Eliminar dia1*/
    (function(){
        var eliminar = function(){
            $('div').eq('1').remove();
        };
        setTimeout(eliminar, 11000)
    }())

    /*Eliminar dia2*/
    (function(){
        var eliminar = function(){
            $('div').eq('1').remove();
        }
        setTimeout(eliminar, 21000)
    }())
})