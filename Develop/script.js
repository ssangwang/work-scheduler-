// showing todays date 
var todayDate = moment().format("MMM Do YY");
$('#currentDay').text(todayDate);

var todayHour = moment().format('h:mm:ss a');
console.log(todayHour)