$(document).ready(function(){
    var that = $("#caja");
    // $("#caja").hide();//el metodo hide oculta
    $("#mostrar").hide();
    $("#ocultar").click(function(){
        $(this).hide();
        $("#mostrar").show();
        // $("#caja").fadeIn('slow');//fast oculta caja fast, normal con fadeIN y out hace un difuminado
        that.fadeTo('slow', 0);//permite que valla de un estado a otro
    });
    $("#mostrar").click(function(){
        $(this).hide();
        $("#ocultar").show()
        // $("#caja").fadeOut('slow');
        that.fadeTo('slow', 1 );
    });
    $("#todoenuno").click(function(){
    //    $ ("#caja").toggle('fast');
    // $("#caja").fadeToggle('fast');
    that.slideToggle('fast');
    })

   for(var i =0; i <=10; i++){
    $("#animar").click(function(){
        that.animate({borderRadius: "900px",marginLeft : '500px', fontSize: '40px', height: '60px'}, 'slow')//perimite hacer animaiones de csss
            .animate({borderRadius: '900px', marginTop:'80px'}, 'slow')
            .animate({borderRadius: '900px', marginLeft:'0px'}, 'slow')
            .animate({borderRadius: '100px', marginTop:'0px'}, 'slow')
            .animate({marginLeft : '500px', fontSize: '40px', height: '60px'}, 'slow')
    })

   }
   
})