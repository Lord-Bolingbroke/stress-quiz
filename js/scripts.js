$(document).ready(function(){
  $("form#quiz").submit(function(event){
    event.preventDefault();
    $("#stress-response").show();

    var checkBoxValues = [];
    $("input:checkbox[name=stress-signs]:checked").each(function(){
      var stressSignsMode = $(this).val();
      var checkBoxValuesIncludes = checkBoxValues.includes("sleep");
      checkBoxValues.push(stressSignsMode);
      console.log(checkBoxValues);
      console.log(checkBoxValuesIncludes);
      if (checkBoxValuesIncludes === "sleep" || checkBoxValuesIncludes === "") {
        debugger;
        $("#stress-response").text("Make sure your room temperature is 60 degress Fahrenheit!")
      }
    });

  });
});


// var sleep = checkBoxValues
// var overwhelmed = checkBoxValues
// var overthinking = checkBoxValues
// var focus = checkBoxValues
// console.log(focus);
// if (sleep === "sleep" && overwhelmed === "overwhelmed") {
//   $("#stress-response").text("Make sure your room temperature is 60 degress Fahrenheit!")
// }
