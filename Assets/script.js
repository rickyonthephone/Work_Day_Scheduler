//Display current date under the jumbotron
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));    

$(document).ready(function() {

    // listen for save button clicks
    $(".saveBtn").on("click", function() {
      // get values for time and description of schedule
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      var dateAdd = moment().format("dddd, MMMM Do");
  
      events.push({description: value, time: time, date: dateAdded});
  
      // save the value in localStorage as time upon clicking save button
      localStorage.setItem(time, text, dateAdd);
      
    });

    function timeTracker () {
        let currentTime = moment().format('LT'); 

    $(".description").each(function () {
        var hourBlock = parseInt($(this).attr("id").split("hour")[1]);

        if (hourBlock < currenttTime) {
            $(".description").removeClass("future");
            $(".description").removeClass("present");
            $(".description").addClass("past");
        }

        else if (hourBlock === currentTime) {
            $(".description").removeClass("past");
            $(".description").removeClass("future");
            $(".description").addClass("present");
        }

        else {
            $(".description").removeClass("past");
            $(".description").removeClass("present");
            $(".description").addClass("future");
        }
    });
    }

    $("#hour8 .description").val(localStorage.getItem("time1"));
    $("#hour9 .description").val(localStorage.getItem("time2"));
    $("#hour10 .description").val(localStorage.getItem("time3"));
    $("#hour11 .description").val(localStorage.getItem("time4"));
    $("#hour12 .description").val(localStorage.getItem("time5"));
    $("#hour13.description").val(localStorage.getItem("time6"));
    $("#hour14.description").val(localStorage.getItem("time7"));
    $("#hour15 .description").val(localStorage.getItem("time8"));
    $("#hour16 .description").val(localStorage.getItem("time9"));
    $("#hour17 .description").val(localStorage.getItem("time0"));

    timeTracker();
}); 



