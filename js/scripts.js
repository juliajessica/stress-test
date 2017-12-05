$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();

    $("#work-responses").show();
    $("input:checkbox[name=work-stress]:checked").each(function(){
      var workStressMode = $(this).val();
      $('#work-responses').append(workStressMode + "<br>");
    });

    $("#home-responses").show();
    $("input:checkbox[name=home-stress]:checked").each(function(){
      var homeStressMode = $(this).val();
      $('#home-responses').append(homeStressMode + "<br>");
    });
    
    $('#stress_survey').hide();
  });
});
