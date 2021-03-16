//Display current date under the jumbotron
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));    

$(document).ready(function() {

    // listen for save button clicks
    $("#save").on("click", function() {
      // get values for time and description of schedule
      var text = $(this).siblings(".description").val();
      var time = $(this).parent().attr("id");
      var dateAdd = moment().format("dddd, MMMM Do");
  
      events.push({description: value, time: time, date: dateAdded});
  
      // save the value in localStorage as time upon clicking save button
      localStorage.setItem(time, text, dateAdd);
      
    });

    function timeTracker () {
        var currentTime = moment().hour(); 

    $(".description_text").each(function () {
        var hourBlock = parseInt($(this).attr("id").split("hour")[1]);

        if (hourBlock < currenttTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        }

        else if (hourBlock === currentTime) {
            $(this).removeClass("past");
            $(this).removeClass("future");
            $(this).addClass("present");
        }

        else {
            $(this).removeClass("past");
            $(this).removeClass("present");
            $(this).addClass("future");
        }
    });
    }

    $("#time1 .description").val(localStorage.getItem("time1"));
    $("#time2 .description").val(localStorage.getItem("time2"));
    $("#time3 .description").val(localStorage.getItem("time3"));
    $("#time4 .description").val(localStorage.getItem("time4"));
    $("#time5 .description").val(localStorage.getItem("time5"));
    $("#time6 .description").val(localStorage.getItem("time6"));
    $("#time7 .description").val(localStorage.getItem("time7"));
    $("#time8 .description").val(localStorage.getItem("time8"));
    $("#time9 .description").val(localStorage.getItem("time9"));
    $("#time0 .description").val(localStorage.getItem("time0"));

    timeTracker();
}); 



