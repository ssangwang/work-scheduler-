// showing todays date 
var todayDate = moment().format("MMM Do YY");
$('#currentDay').text(todayDate);

// showing current hour
var todayHour = moment().format('h:mm:ss a');
console.log(todayHour);

// save button
var save = document.getElementById("saveBtn");
function saveData(){
    var inputData = document.getElementById("message");
    localStorage.setItem('Reminder', inputData.value);
}
save.addEventListener("click", saveData);
