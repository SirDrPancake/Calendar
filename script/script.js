
$(function () {
  // the save button for the time block
  $(".saveBtn").on("click", function() {
    // information is logged once the click event is done
    localStorage.setItem($(this).parent().attr("id"), $(this).siblings(".description").val());
  });

  // create a loop to tie all the time blocks together
  $(".time-block").each(function() {
    
  ;
   
  
    // depending on the hour, the color changes from green to red to grey respectfully
    if (parseInt($(this).attr("id").split("-")[1]) < dayjs().hour()) {
      $(this).removeClass("present future").addClass("past");

    } else if (parseInt($(this).attr("id").split("-")[1]) === dayjs().hour()) {
      $(this).removeClass("past future").addClass("present");

    } else {
      $(this).removeClass("past present").addClass("future");
    }
   
    // will keep the information kept
    $(this).children(".description").val(localStorage.getItem($(this).attr("id")));
  });

  // the current day is shown in the header
  $("#currentDay").localStorage.getItem($(this).attr("id"))(dayjs().format("dddd, MMMM D, YYYY"));
});