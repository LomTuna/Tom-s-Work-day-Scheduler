var hours = $(".hour")
var currentDay = $("#currentDay")
var currentTime = parseInt(moment().format("h"))
var saveButton = localStorage.setItem("text")

console.log(typeof currentTime);

currentDay.text(moment().format("LLLL")); // update this for the current hour non military
console.log(currentDay);

var textInput = document.createElement("hour"); 
textInput.setAttribute("type", "text"); 




hours.each(function(){
  let workTime = parseInt($(this).attr("data-id"))
  console.log(workTime); 

  
  //this produces the color-change for past time segment
  if (workTime < currentTime) {
    
    $(this).addClass("past") 
    console.log("past")
  }

  //this produces the color-change for future time segment
  else if (workTime > currentTime) {

    $(this).addClass("future")
    console.log("future")

  }
  //this produces the color-change for present time segment
  else {

    $(this).addClass("present")

    console.log("present");
    $(".present")
  }
})