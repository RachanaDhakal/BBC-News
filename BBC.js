 
 var d = new Date();
 var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
 var day = days[d.getDay()];
 var numDay = d.getDate();
  var month = months[d.getMonth()];

var fullDate = day + ', ' + numDay + ' ' + month;

document.getElementById('todayDate').innerHTML = fullDate;