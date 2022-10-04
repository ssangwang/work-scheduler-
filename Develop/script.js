
// showing todays date 
var todayDate = moment().format("MMM Do YY");
$('#currentDay').text(todayDate);

// showing current hour
var todayHour = moment().format();
var currentHour = todayHour.toString();
console.log(currentHour);
var theHour = currentHour.slice(11,13);
console.log(theHour);

//creating calender
for (let i = 9; i <= 17; i++ ){
    // creating the boxes
    let container = $(".container")
    let div = $("<div>").attr("class","row").attr("id", "timeblock" + (i)).appendTo(container);
    let hour = $("<div>").attr("class", "hour col-1").appendTo(div);
    $("<h4>").attr("id", "timeRn").text((i)).appendTo(hour);
    let textarea = $("<div>").attr("class", "textarea col-8").attr("id","textBox").appendTo(div);
    $("<form>").appendTo(textarea);
    $("<input>").attr("name", "text").attr("type", "text").attr("id", "message").appendTo(textarea);
    $("<p>").attr("id", "rem1nder").appendTo(textarea);
    let button = $("<button>").attr("type", "button").attr("class", "saveBtn col-1").attr("id", "saveBtn").text("Save").appendTo(div);
    }
    
if ($("#timeRn").text < theHour) {
   var bgC = document.getElementById("textarea").classList;
   bgC.add("past");
}

// set text from local storage
var reminderText = localStorage.getItem('Reminder');
if ($('#rem1nder'.text == '')) {
    $('#rem1nder').text(reminderText);
}

// save button
var save = document.getElementById("saveBtn");
function saveData() {
    // save data to Local Storage
    var inputData = document.getElementById("message");
    var savesdData = ("Saved reminder to Local Storage!")
    localStorage.setItem('Reminder', inputData.value);
    // notifcation 
    $('#savesData').text(savesdData);
    function clearText() {
        document.getElementById('savesData').innerHTML = "";
    }
    setTimeout(clearText, 6000);

}
save.addEventListener("click", saveData);

/*


      <div class="row" id="timeblock">
          <div class="hour col-1">
            <h4></h4>
          </div>
          <div class="textarea col-8" id="textBox">
            <form><input name="text" type="text" id="message"><p id="rem1nder"></p></form>
          </div>
          <button type="button" class="saveBtn col-1" id="saveBtn"> Save </button>
      </div>

*/
