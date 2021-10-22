var today = new Date();
var date = today.getFullYear() + '-' + (today.getMonth()+1) + '-' + today.getDate();

document.getElementById('currentDay').innerHTML = date;

const button = ()