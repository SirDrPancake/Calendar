
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

  // Loop through all time-block elements
  $(".time-block").each(function() {
    // Get the id of the current time-block
    var id = $(this).attr("id");
    // Get the hour value from the id, using parseInt to extract the number
    var hour = parseInt(id.split("-")[1]);
    // Add/remove classes based on the current hour and time-block hour
    if (parseInt(id.split("-")[1]) < dayjs().hour()) {
      $(this).removeClass("present future").addClass("past");
    } else if (parseInt(id.split("-")[1]) === dayjs().hour()) {
      $(this).removeClass("past future").addClass("present");
    } else {
      $(this).removeClass("past present").addClass("future");
    }
    // Get the user input value from localStorage using the time-block id as the key
    var text = localStorage.getItem(id);
    // Set the value of the textarea element in the same time-block
    $(this).children(".description").val(text);
  });

  // Display the current date in the header using Day.js library
  var currentDate = dayjs().format("dddd, MMMM D, YYYY");
  $("#currentDay").text(currentDate);
});