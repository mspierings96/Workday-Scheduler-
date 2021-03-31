// The first requirement of the project: "WHEN I open the planner THEN the current day is displayed at the top of the calendar"
var currentDay = moment().format("MM ddd, YYYY hh:mm:ss a")
console.log(currentDay)
$("#currentDay").text(currentDay)


// The next requirement of the project: "WHEN I scroll down THEN I am presented with time blocks for standard business hours"

var hour=moment().hour()
console.log(hour)