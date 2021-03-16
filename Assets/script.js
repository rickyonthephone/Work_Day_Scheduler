var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));    
var currentTime = moment();
$("#currentTime").text(currentTime.format('LT'));

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
      
    $(".description").each(function () {

        //parsing off numeric value of the id in each time block to get a comparative value for below
        var hourBlock = parseInt($(".time-block").attr("id").split("hour")[1]);

        //adding a class if the value of the hour block is less than the current time
        if (hourBlock < currentTime) {
            $(".description").removeClass("future");
            $(".description").removeClass("present");
            $(".description").addClass("past");
        }
        //if the hour block and current time hour values are equal, then it is present time
        else if (hourBlock === currentTime) {
            $(".description").removeClass("past");
            $(".description").removeClass("future");
            $(".description").addClass("present");
        }
        //any other circumstance (i.e. an hour block value greater thant the current time) will indicate a future time
        else {
            $(".description").removeClass("past");
            $(".description").removeClass("present");
            $(".description").addClass("future");
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



