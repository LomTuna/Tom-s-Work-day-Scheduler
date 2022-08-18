var hours = $(".hour")
var currentDay = $("#currentDay")
var currentTime = parseInt(moment().format("LLLL"))

console.log(typeof currentTime);

currentDay.text(moment().format("LLLL")); // update this for the current hour non military
console.log(currentDay);

//for (var i = 0; i < hours.length; i++) {
  //console.log(hours[i])

  //var currentHour = hours[i].attr("id");
  //var now = moment().format("h")
// grab data-id with if statement and compare with past/present value
  //if (currentHour < now) {
    //console.log("past");

hours.each(function(){
  let workTime = parseInt($(this).attr("data-id"))
  console.log(workTime); 

  if (workTime < currentTime ) {
    console.log("past")
  }

  else if (workTime > currentTime) {
    console.log("future")
  }
  else {
    console.log("present");
  }
})