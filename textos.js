$(document).ready(function(){
    ContenidoLista();

  $('#addBoton')
  .removeAttr("disabled")
  .click(function(){
  $("#lista").append('<li><a href ="' +$('#addInput').val() + '"></a></li>');
  $('#addInput').val("");
  ContenidoLista();

   });
   
    
});
 function ContenidoLista(){
    $('a').each(function(index){
        var that = $(this);
        var enlace = that.attr("href");
        that.attr('target', '_blank ');//abre ventana y redireciona a ottra paguia wueb
        that.text(enlace);

    });


 }
