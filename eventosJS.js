$(document).ready(function(){
//eventos mousehover
var caja = $("#caja");

// caja.mouseover(function(){
//     $(this).css("background", "pink");
// })
// caja.mouseout(function(){
//     $(this).css("background", "grey")
// })
//hover
function cambiarRosa(){
    $(this).css("background", "pink");
}
function cambiarGrey(){
    $(this).css("background", "yellow")
}


caja.hover(cambiarRosa, cambiarGrey)

caja.click(function(){
    $(this).css("background", "rgb(24, 252, 3)")
            .css("color", "white")
})

//doble click
caja.dblclick(function(){
    $(this).css("background", "rgb(4, 248, 228)")
            .css("color", "red")
});

// focus y blur
var input = $("#nombre");
var datos= $(".datos");

 input.focus(function(){
        $(this).css("border", "5px solid red")
        
 });

input.blur(function(){
    $(this).css("border", "2px solid yellow")
    
    datos.text($(this).val()).show();
});

//mousedown mouseup (apretar y soltar)

datos.mousedown(function(){
    $(this).css("border-color", "yellow")
})
datos.mouseup(function(){
    $(this).css("border-color", "orange")
})

//mosemove (persigue al raton)

$(document).mousemove(function(){
    $('body').css("cursor", "none");
    console.log()
    var sigueme =$("#sigueme")
    sigueme.css("left", event.clientX).css("top", event.clientY)

    

})


});