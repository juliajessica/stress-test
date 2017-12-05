//Back end logic



//Front end logic
var workStressArray = []
var homeStressArray = []

$(document).ready(function(){
  $("form#stress_survey").submit(function(event){
    event.preventDefault();


    //Determine amount of stress from home.
    $("#work-responses").show();
    $("input:checkbox[name=work-stress]:checked").each(function(){
      var workStressMode = $(this).val();
      $('#work-responses').append(workStressMode + "<br>");
      // debugger;
      workStressArray.push (workStressMode); //Pushed checked values into corresponding array.
    }); //End of work-stress function

    //Determine amount of stress from work.
    $("#home-responses").show();
    $("input:checkbox[name=home-stress]:checked").each(function(){
      var homeStressMode = $(this).val();
      $('#home-responses').append(homeStressMode + "<br>");
      // debugger;
      homeStressArray.push(homeStressMode); //Pushed checked values into corresponding array.
    }); //End of home-stress function


    var lengthWorkStressArray = workStressArray.length;
    var lengthHomeStressArray = homeStressArray.length;

    if (lengthWorkStressArray > lengthHomeStressArray) {
      console.log("Work stress");
      $("#stressOutput").text("Work stress");
    } else if (lengthWorkStressArray === lengthHomeStressArray) {
      console.log("Neutral/Tied");
      $("#stressOutput").text("Neutral/Tied");
    } else if (lengthWorkStressArray < lengthHomeStressArray) {
      console.log("Home stress");
      $("#stressOutput").text("Home stress");
    } else {
      console.log("Error! No values returned from this function!");
    }





    $('#stress_survey').hide();
  }); //End of form-submit function
}); //End of document ready function
