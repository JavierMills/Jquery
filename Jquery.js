//libreria de java script en efectos, anumaiones, peticiones a AJAX, eventos de una  manera sencilla
$(document).ready(function(){
    console.log("documento readyy");

    //selector de id
$("#rojo").css("background", "red")
          .css("color","white");

$("#amarrillo").css("background", "yellow")
               .css("color", "green");

$("#verde").css("background", "green")

   console.log(rojo)
})
var mi_clase = $(".clase").css("padding", "5px")
                          .css("background", "purple")                        

console.log(mi_clase[0]);

$(".sinBorde").click(function(){
    console.log("click");
    $(this).addClass("clase");

// selectores por etiqueta

var parrafo =$("p").css("cursor", "pointer");

parrafo.click(function(){
    var that = $(this)
    if(!that.hasClass("grande")){
        that.addClass("grande");
    }else{
        that.removeClass("grande");

    };
});

// selectores por atributos

})
$("[title = 'Google']").css('background', 'yellow');
$('[title = "Facebook"]').css('background', 'red');


// otros

// $('p,a').addClass('margen-superior');

// var busqueda= $("#caja").find(".resultado");/ find nos sirve para buscar dentro de un arbol muy grande de html

var busqueda= $("#caja .resultado");

console.log(busqueda);
