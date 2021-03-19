//Date variable for jumbotron date
var today = moment();
$("#currentDay").text(today.format("dddd, MMM Do, YYYY"));  
//Added a time variable in the jumbotron to use as a comparison for the functions below.  
//currenTime is hidden with CSS because I'm using military time in this format, the HTML uses both military time 
//in some of the div IDs but shows standard time in the blocks on the page. I felt like having the military time 
//showing at the top but the standard time in the blocks could confuse users.
var currentTime = moment();
$("#currentTime").text(currentTime.format('LT'));
//also need the just the hour value for the timeTracker function below.
currentTime = currentTime.format('HH');
//variable to update the current time every second to keep the local time current throughout the day.  
var timeCheckerID = setInterval(function(){
    $("#currentTime").text(moment().format('HH:mm:ss'));

}, 1000)

//adding functionality to the page, wrap document
$(document).ready(function() {

    // activate save to local storage on click
    $(".saveBtn").on("click", function() {

    // get values for time block and description in the schedule
      var text = $(".saveBtn").siblings(".description").val();
      var time = $(".saveBtn").parent().attr("id");
  
      //save the time block and description values in localStorage
      localStorage.setItem(time, text);
      
    });
    
    //A time tracker is needed to compare current time against future and past times
    //to satisfy the color requriments of the blocks based on the current time
    function timeTracker () {
      
    //"element" is the specific HTML element when we query, for the .each method there will be 10 target elements, index 0-9
    //note to self: .each in jquery similar to a for loop in javascript, in this case we are gathering indexes and targeted elements for 
    //each text area in order to color them appropriately based on time using the ".description" class.

    $(".description").each(function (index, element) {

        //not sure but could maybe use somethig like:
        // for (i = 0; i < element.length; i++) {
        //     textArea = element[index];   
        // }
        
        //must parse off numeric value of the id in each .time-block div to get a comparative value for below
        //note to self: the index of an array starts at 0, we're looking at the second index (i.e. 1) because ["", 8] is the array we get from the split
        var parentElement = $(element).parent();
        var timeBlock = parseInt(parentElement.attr("id").split("hour")[1]);

        //adding/removing classes based on the value of the time block compared to the current time
        //if timeBlock is less than currentTime, the class of "past" is added
        if (timeBlock < currentTime) {
            $(element).removeClass("future");
            $(element).removeClass("present");
            $(element).addClass("past");
        }
        //if the time block and current time hour values are equal, then class of "present" is added
        else if (timeBlock == currentTime) {
            $(element).removeClass("past");
            $(element).removeClass("future");
            $(element).addClass("present");
        }
        //any other circumstance (i.e. an time block value greater than the current time) will indicate a future time
        else {
            $(element).removeClass("past");
            $(element).removeClass("present");
            $(element).addClass("future");
        }
    });
    }
//code to get local storage items
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
