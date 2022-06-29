var containerEl = $('.container')
var saveButton = $('.save-button');
var textArea = $('.description');

var today = moment()
 $('#currentDay').text(today.format('MMMM Do, YYYY'))

savedDescription();

 function savedDescription() {
  var description = localStorage.getItem("description");

  textArea.text(description);
 }

function checkTime() {
  var currentTime = today.hours();
  var timeBlockEl = $('.time-block');

  timeBlockEl.each(function() {
      var dataTime = parseInt($(this).attr('data-time').split('-')[1]);

    if (dataTime < currentTime) {
      $(this).addClass('past');
    }
    else if (dataTime === currentTime) {
      $(this).removeClass('past');
      $(this).addClass('present');
    } 
    else {
      $(this).removeClass('past');
      $(this).addClass('future');
    }
  });
}

checkTime()

saveButton.on('click', function(event) {
  event.preventDefault()

  var description = $('.description').val()

  if (description === "") {
    return
  } else {
    localStorage.setItem("description", description);
    savedDescription();
  }
});
