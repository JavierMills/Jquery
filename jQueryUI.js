$(document).ready(function(){

    //mover elementos
    $(".elemento").draggable();

    //redimencionar elemntos

    $(".elemento").resizable();

    //selecionar elemantos

    // $(".lista").selectable();
     //organizar elemntos

     $(".lista").sortable({
         update : function(evento, interface){  
             console.log("actualiazdo");

         }
     });
     $( "#arrastrame" ).draggable();//MOVER
     $( "#arrastrameAqui" ).droppable({//SOLTAR EN AREAR
       drop: function( event, ui ) {
         $( this )
           .addClass( "ui-state-highlight" )
           .find("p")
             .html( "Introducido..." );
       }
     });
     //efectos

     $("#mostrar").click(function(){
        //  $(".div-efectos").toggle("explode")//se desfragmenta
        //  $(".div-efectos").toggle("blind")// se oculta de abajo para arriba
        //  $(".div-efectos").toggle("slide")// de izquierda a derecha
        //  $(".div-efectos").toggle("drop")//lo muestra como un degradado
        //  $(".div-efectos").toggle("fold")// se va dibujando
        //  $(".div-efectos").toggle("puff")// de grande a mediano
        //  $(".div-efectos").toggle("scale")// de peqeuño agrande
        //  $(".div-efectos").toggle("shake", "slow", 4000)// se sacude
        $(".div-efectos").toggle("scale", 4000)

        $(document).tooltip();


        
       
      
     })
     //dialogos
     $("#lazar").click(function(){
        $("#popup").dialog();
    })

    calendario
    $("#calendario").datepicker();

    //tabs
    $("#ventana").tabs();
})