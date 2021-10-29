var today = moment("11/3/20", "MM-DD-YY").format("dddd, MMMM Do YYYY");
$("#currentDay").text(today);

var buttonArr = document.querySelectorAll('.saveBtn');

// button.addEventListener('click', function() {
//   button.previousElementSibling;
//   console.log(button.previousElementSibling)
// })


buttonArr.forEach(function(element, index) {
  element.previousElementSibling.value = localStorage.getItem("time" + index) || ""

  element.addEventListener('click', function() {
    localStorage.setItem("time" + index, element.previousElementSibling.value);
    console.log(element.previousElementSibling.value)
  })
  console.log(element)
})

// falsey: 0, "", null, false, "undefined", NaN, 0n, -0
function checkTime(textArea) {
  var currentHour = moment().format("H")
  if (textArea == currentHour) {
    
  }
}

console.log(moment().format("H")); // 9 === hourBlockId