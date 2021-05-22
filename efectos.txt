/*Asi se inicia para trabajar con jquery*/
$(document).ready ( function(){
    /*Codigo gsap*/
    gsap.to(
        /*Que sea a el elemento con el id de box*/
        "#box", {
            duration: 3, /*Duracion*/
            x: 575, /* 1423 IGNORAR */ /*Que se desplaze en el eje x 575 pixeles (que es el centro)*/
            ease: "circ.out" /*Que sea en forma circ.out (es que inicie rapidp y termine lento*/
    });

    gsap.to(
        "#corazon", {
            duration: 3, 
            opacity: 1 /*En css especifiqué que iniciara con 0 y terminara con 1, 
            pero puse esto por que si no, al terminar la animacion (3 segundos) se iva a volver a 0*/
        }
    )
    
    /*Para desaparecer mas suavemente*/
    gsap.to(
        "#contenedor", {
            duration: 4,
            opacity: 0
        }
    )

    /*Funcion anidada*/
    (function(){
        //Variable para guardar la funcion y usarlo posteriormente
        var eliminar = function(){
            /*Eliminar el div 0, que sería el 1, pero en javascript se inicia con 0 en los arreglos(conjunto de datos)*/
            $('div').eq('0').remove();
        };
        setTimeout(eliminar, 4000); /*pasado 4 segundos se elimine lo que está en la variable*/
    }())    

})