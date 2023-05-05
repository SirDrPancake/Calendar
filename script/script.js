
$(function () {
  // Add a click event listener to all save buttons
  $(".saveBtn").on("click", function() {
    // Get the id of the parent time-block element
    var id = $(this).parent().attr("id");
    // Get the value of the textarea element in the same time-block
    var text = $(this).siblings(".description").val();
    // Save the value in localStorage using the time-block id as the key
    localStorage.setItem(id, text);
  });

  // create a loop to tie all the time blocks together
  $(".time-block").each(function() {
    
    var id = $(this).attr("id");
   
  
    // Add/remove classes based on the current hour and time-block hour
    if (parseInt(id.split("-")[1]) < dayjs().hour()) {
      $(this).removeClass("present future").addClass("past");

    } else if (parseInt(id.split("-")[1]) === dayjs().hour()) {
      $(this).removeClass("past future").addClass("present");

    } else {
      $(this).removeClass("past present").addClass("future");
    }
   
    // Set the value of the textarea element in the same time-block
    $(this).children(".description").val(localStorage.getItem(id));
  });

  // Display the current date in the header using Day.js library
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").localStorage.getItem(id)(currentDate);
});