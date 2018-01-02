var result = 0;
var members = "";
var result_displayed = false;
$( "button" ).click(function() {
  if($(this).html() % 1 !== 0 && members[members.length-1] === $(this).html()) {
    alert("One function at the time!");
  } else if($(this).html() % 1 !== 0 && members === "" && $(this).html() !== "C") {
    alert("Please enter a number first");
  } else if($(this).html().indexOf('=') < 0 && result_displayed) {
    $(".screen").html($(this).html());
    members = members.concat($(this).html());
    result_displayed = false;
            }
            else if($(this).html().indexOf('=') < 0) {
    $(".screen").append($(this).html());
     members = members.concat($(this).html());
  }
});


$(".clear").val("C").click(function() {
 $(".screen").html('');
  members = "";
  result = 0;
});

//display result on screemn
$(".result").click(function(){
  result = eval(members).toFixed(2);
  //alert(members);
  $(".screen").html(result);
  result = 0;
  members = "";
  result_displayed = true;
})

//accept keypress from num pad

function myFunction(event) {
    var x = event.which || event.keyCode;
}