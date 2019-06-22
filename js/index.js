// Menu sericios generales
  //. $(document).ready(function(){
  $("#consulta-prioritaria").click(function(){
    $(".consulta-prioritaria").toggle()
    
    $(".col-sm-6").css("max-width","100%");
    $(".col-md-4").css("max-width","100%");
    $(".col-lg-2").css("max-width","100%");
    
    $(".col-sm-6").css("flex","0px");
    $(".col-md-4").css("flex","0px");
    $(".col-lg-2").css("flex","0px");
    
    $("#consulta-programada").toggle();
    $("#imagen-diagnostica").toggle();
    $("#laboratorio-clinico").toggle();
    $("#electrocardiografia").toggle();
    $("#terapia-respiratoria").toggle();
  });
  $("#consulta-programada").click(function(){
    $(".consulta-programada").toggle();
    
    $(".col-sm-6").css("max-width","100%");
    $(".col-md-4").css("max-width","100%");
    $(".col-lg-2").css("max-width","100%");
    
    $(".col-sm-6").css("flex","0px");
    $(".col-md-4").css("flex","0px");
    $(".col-lg-2").css("flex","0px");
    
    $("#consulta-prioritaria").toggle();
    $("#imagen-diagnostica").toggle();
    $("#laboratorio-clinico").toggle();
    $("#electrocardiografia").toggle();
    $("#terapia-respiratoria").toggle();
  });
  $("#imagen-diagnostica").click(function(){
    $(".imagen-diagnostica").toggle();
    
    $(".col-sm-6").css("max-width","100%");
    $(".col-md-4").css("max-width","100%");
    $(".col-lg-2").css("max-width","100%");
    
    $(".col-sm-6").css("flex","0px");
    $(".col-md-4").css("flex","0px");
    $(".col-lg-2").css("flex","0px");

    $("#consulta-prioritaria").toggle();
    $("#consulta-programada").toggle();
    $("#laboratorio-clinico").toggle();
    $("#electrocardiografia").toggle();
    $("#terapia-respiratoria").toggle();
  });
  $("#laboratorio-clinico").click(function(){
    $(".laboratorio-clinico").toggle();
    
    $(".col-sm-6").css("max-width","100%");
    $(".col-md-4").css("max-width","100%");
    $(".col-lg-2").css("max-width","100%");
    
    $(".col-sm-6").css("flex","0px");
    $(".col-md-4").css("flex","0px");
    $(".col-lg-2").css("flex","0px");
    
    $("#consulta-prioritaria").toggle();
    $("#consulta-programada").toggle();
    $("#imagen-diagnostica").toggle();
    $("#electrocardiografia").toggle();
    $("#terapia-respiratoria").toggle();
  });
  $("#electrocardiografia").click(function(){
    $(".electrocardiografia").toggle();
    
    $(".col-sm-6").css("max-width","100%");
    $(".col-md-4").css("max-width","100%");
    $(".col-lg-2").css("max-width","100%");
    
    $(".col-sm-6").css("flex","0px");
    $(".col-md-4").css("flex","0px");
    $(".col-lg-2").css("flex","0px");
    
    $("#consulta-prioritaria").toggle();
    $("#consulta-programada").toggle();
    $("#imagen-diagnostica").toggle();
    $("#laboratorio-clinico").toggle();
    $("#terapia-respiratoria").toggle();
  });
  $("#terapia-respiratoria").click(function(){
    $(".terapia-respiratoria").toggle();
    
    $(".col-sm-6").css("max-width","100%");
    $(".col-md-4").css("max-width","100%");
    $(".col-lg-2").css("max-width","100%");
    
    $(".col-sm-6").css("flex","0px");
    $(".col-md-4").css("flex","0px");
    $(".col-lg-2").css("flex","0px");
    
    $("#consulta-prioritaria").toggle();
    $("#consulta-programada").toggle();
    $("#imagen-diagnostica").toggle();
    $("#laboratorio-clinico").toggle();
    $("#electrocardiografia").toggle();
  });
  //. })
  // Menu sericios especiales