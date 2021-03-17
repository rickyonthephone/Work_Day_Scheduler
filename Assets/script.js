var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));    
var currentTime = moment();
$("#currentTime").text(currentTime.format('LT'));
currentTime = currentTime.format('HH');
var timeCheckerID = setInterval(function(){
    $("#currentTime").text(moment().format('HH:mm:ss'));

}, 1000)

$(document).ready(function() {

    // activate save to local storage on click
    $(".saveBtn").on("click", function() {
      // get values for time block and description in the schedule
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
  
      //save the time block and description values in localStorage
      localStorage.setItem(time, text);
      
    });
    
    //a time tracker is needed to compare current time against future and past times
    //to satisfy the color requriments of the blocks based on the time
    function timeTracker () {
      
        //element is the specific HTML element when we query 
    $(".description").each(function (index, element) {

        //parsing off numeric value of the id in each time block to get a comparative value for below
        var parentElement = $(element).parent();
        
        //the index of an array starts at 0, we're looking at the second index because ["", 8] is the array we get
        var hourBlock = parseInt(parentElement.attr("id").split("hour")[1]);
        console.log(hourBlock)
        console.log(currentTime)
        //adding a class if the value of the hour block is less than the current time
        if (hourBlock < currentTime) {
            $(element).removeClass("future");
            $(element).removeClass("present");
            $(element).addClass("past");
        }
        //if the hour block and current time hour values are equal, then it is present time
        else if (hourBlock === currentTime) {
            $(element).removeClass("past");
            $(element).removeClass("future");
            $(element).addClass("present");
        }
        //any other circumstance (i.e. an hour block value greater thant the current time) will indicate a future time
        else {
            $(element).removeClass("past");
            $(element).removeClass("present");
            $(element).addClass("future");
        }
    });
    }
//code to fetch local storage items
    $("#hour8 .description").val(localStorage.getItem("hour8"));
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));
    $("#hour17 .description").val(localStorage.getItem("hour17"));

    timeTracker();
}); 



