var buttonArr = $('.saveBtn');
var textArea = $('.description');

var today = moment()
 $('#currentDay').text(today.format('MMMM Do, YYYY'))


// buttonArr.forEach(function(element, index) {
//   element.previousElementSibling.value = localStorage.getItem("time" + index) || ""

//   element.addEventListener('click', function() {
//     localStorage.setItem("time" + index, element.previousElementSibling.value);
//     console.log(element.previousElementSibling.value)
//   })
//   console.log(element)
// })

function checkTime() {
  var currentHour = moment().format("LT")
  console.log(currentHour)
  if (textArea === currentHour) {
    textArea.addCLass('.present');
  }
}

checkTime()