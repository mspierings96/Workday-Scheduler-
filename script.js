// The first requirement of the project: "WHEN I open the planner THEN the current day is displayed at the top of the calendar"
var currentDay = moment().format("MM ddd, YYYY hh:mm:ss a")
console.log(currentDay)
$("#currentDay").text(currentDay)


var hour=moment().hour()
console.log(hour)


for (var i = 8; i < 18; i++) {

var row = $('<div>')
var time = $('<span>')
var textArea = $('<textarea>')
var savebutton = $('<button>')


    if( i < hour ){
        textArea.addClass("future");
      } else if( i === hour ){
        textArea.addClass("past");
      } else {
        textArea.addClass("present");
      }
    

    savebutton.addClass('saveBtn')
    savebutton.text('Save')

    var timeText = ""
    if(i > 12) {
        timeText = i - 12 + " PM"
        textArea.attr('id', i - 12)
        savebutton.attr('name',  i - 12 )
        console.log('IS THIS in the local storage from before ????', localStorage.getItem(i -12 ))
        if(localStorage.getItem(i -12 )){
            textArea.text(localStorage.getItem(i -12 ))
        }

    } else {
        timeText = i + ' am '
        textArea.attr('id', i)
        savebutton.attr('name',  i)
        console.log('IS THIS in the local storage from before ????', localStorage.getItem(i))
        if(localStorage.getItem(i)) {
            textArea.text(localStorage.getItem(i))
        }
     

}

    time.text(timeText)


row.append(time,textArea,savebutton)
$('.container').append(row)
}


$('.saveBtn').on('click', function() {
    console.log("The button hour they clicked", $(this).attr('name'))
  
    console.log('Text area for that hourrrr', $('#' +  $(this).attr('name')).val())
    localStorage.setItem($(this).attr('name'), $('#' +  $(this).attr('name')).val())
})