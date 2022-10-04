
// showing todays date 
var todayDate = moment().format("MMM Do YY");
$('#currentDay').text(todayDate);

// showing current hour
var todayHour = moment().format();
var currentHour = todayHour.toString();
console.log(currentHour);
var theHour = currentHour.slice(11, 13);
console.log(theHour);


//setting background color of text area
var background = document.getElementById("#9");
var bg = document.getElementById("textBox");
console.log(background);
if (background > theHour){
    bg.classList.add("past");
}
else if (background < theHour){
    bg.classList.add("future");
}
else if ( background === theHour){
    bg.classList.add("present");
}

var background1 = document.getElementById("#10");
var bg1 = document.getElementById("textBox1");
console.log(background1);
if (background1 > theHour){
    bg1.classList.add("past");
}
else if (background1 < theHour){
    bg1.classList.add("future");
}
else if ( background1 === theHour){
    bg1.classList.add("present");
}

var background2 = document.getElementById("#11");
var bg2 = document.getElementById("textBox2");
console.log(background2);
if (background2 > theHour){
    bg2.classList.add("past");
}
else if (background2 < theHour){
    bg2.classList.add("future");
}
else if ( background2 === theHour){
    bg2.classList.add("present");
}

var background3 = document.getElementById("#12");
var bg3 = document.getElementById("textBox3");
console.log(background3);
if (background3 > theHour){
    bg3.classList.add("past");
}
else if (background3 < theHour){
    bg3.classList.add("future");
}
else if ( background3 === theHour){
    bg3.classList.add("present");
}

var background4 = document.getElementById("#13");
var bg4 = document.getElementById("textBox4");
console.log(background4);
if (background4 > theHour){
    bg4.classList.add("past");
}
else if (background4 < theHour){
    bg4.classList.add("future");
}
else if ( background4 === theHour){
    bg4.classList.add("present");
}

var background5 = document.getElementById("#14");
var bg5 = document.getElementById("textBox5");
console.log(background5);
if (background5 > theHour){
    bg5.classList.add("past");
}
else if (background5 < theHour){
    bg5.classList.add("future");
}
else if ( background5 === theHour){
    bg5.classList.add("present");
}

var background6 = document.getElementById("#15");
var bg6 = document.getElementById("textBox6");
console.log(background6);
if (background6 > theHour){
    bg6.classList.add("past");
}
else if (background6 < theHour){
    bg6.classList.add("future");
}
else if ( background6 === theHour){
    bg6.classList.add("present");
}

var background7 = document.getElementById("#16");
var bg7 = document.getElementById("textBox7");
console.log(background7);
if (background7 > theHour){
    bg7.classList.add("past");
}
else if (background7 < theHour){
    bg7.classList.add("future");
}
else if ( background7 === theHour){
    bg7.classList.add("present");
}

var background8 = document.getElementById("#17");
var bg8 = document.getElementById("textBox8");
console.log(background8);
if (background8 > theHour){
    bg8.classList.add("past");
}
else if (background8 < theHour){
    bg8.classList.add("future");
}
else if ( background8 === theHour){
    bg8.classList.add("present");
}



// set text from local storage
var reminderText = localStorage.getItem('Reminder');
if ($('#rem1nder'.text == '')) {
    $('#rem1nder').text(reminderText);
    // clear text from local storage
    function clearText() {
        document.querySelectorAll('savesData').innerHTML = "";
    }
    setTimeout(clearText, 6000);
}

var reminderText1 = localStorage.getItem('Reminder1');
if ($('#rem1nder1'.text == '')) {
    $('#rem1nder1').text(reminderText1);
    // clear text from local storage
    function clearText2() {
        document.querySelectorAll('savesData').innerHTML = "";
    }
    setTimeout(clearText2, 6000);
}

var reminderText2 = localStorage.getItem('Reminder2');
if ($('#rem1nder2'.text == '')) {
    $('#rem1nder2').text(reminderText2);
    // clear text from local storage
    function clearText3() {
        document.querySelectorAll('savesData').innerHTML = "";
    }
    setTimeout(clearText3, 6000);
}

var reminderText3 = localStorage.getItem('Reminder3');
if ($('#rem1nder3'.text == '')) {
    $('#rem1nder3').text(reminderText3);
    // clear text from local storage
    function clearText4() {
        document.querySelectorAll('savesData').innerHTML = "";
    }
    setTimeout(clearText4, 6000);
}

var reminderText4 = localStorage.getItem('Reminder4');
if ($('#rem1nder4'.text == '')) {
    $('#rem1nder4').text(reminderText4);
    // clear text from local storage
    function clearText5() {
        document.querySelectorAll('savesData').innerHTML = "";
    }
    setTimeout(clearText5, 6000);
}

var reminderText5 = localStorage.getItem('Reminder5');
if ($('#rem1nder5'.text == '')) {
    $('#rem1nder5').text(reminderText5);
    // clear text from local storage
    function clearText6() {
        document.querySelectorAll('savesData').innerHTML = "";
    }
    setTimeout(clearText6, 6000);
}

var reminderText6 = localStorage.getItem('Reminder6');
if ($('#rem1nder6'.text == '')) {
    $('#rem1nder6').text(reminderText6);
    // clear text from local storage
    function clearText7() {
        document.querySelectorAll('savesData').innerHTML = "";
    }
    setTimeout(clearText7, 6000);
}

var reminderText7 = localStorage.getItem('Reminder7');
if ($('#rem1nder7'.text == '')) {
    $('#rem1nder7').text(reminderText7);
    // clear text from local storage
    function clearText8() {
        document.querySelectorAll('savesData').innerHTML = "";
    }
    setTimeout(clearText8, 6000);
}

var reminderText8 = localStorage.getItem('Reminder8');
if ($('#rem1nder8'.text == '')) {
    $('#rem1nder8').text(reminderText8);
    // clear text from local storage
    function clearText() {
        document.querySelectorAll('savesData').innerHTML = "";
    }
    setTimeout(clearText, 6000);
}

// save buttons
var save = document.getElementById("saveBtn");
console.log(save);
function saveData() {
    // save data to Local Storage
    var inputData = document.getElementById("message");
    var savesdData = ("Saved reminder to Local Storage!")
    localStorage.setItem('Reminder', inputData.value);
    // notifcation 
    $('#savesData').text(savesdData);

}

var save1 = document.getElementById("saveBtn1");
console.log(save1);
function saveData1() {
    // save data to Local Storage
    var inputData1 = document.getElementById("message1");
    var savesdData1 = ("Saved reminder to Local Storage!")
    localStorage.setItem('Reminder1', inputData1.value);
    // notifcation 
    $('#savesData').text(savesdData1);

}

var save2 = document.getElementById("saveBtn2");
console.log(save2);
function saveData2() {
    // save data to Local Storage
    var inputData2 = document.getElementById("message2");
    var savesdData2 = ("Saved reminder to Local Storage!")
    localStorage.setItem('Reminder2', inputData2.value);
    // notifcation 
    $('#savesData').text(savesdData2);

}

var save3 = document.getElementById("saveBtn3");
console.log(save3);
function saveData3() {
    // save data to Local Storage
    var inputData3 = document.getElementById("message3");
    var savesdData3 = ("Saved reminder to Local Storage!")
    localStorage.setItem('Reminder3', inputData3.value);
    // notifcation 
    $('#savesData').text(savesdData3);

}

var save4 = document.getElementById("saveBtn4");
console.log(save4);
function saveData4() {
    // save data to Local Storage
    var inputData4 = document.getElementById("message4");
    var savesdData4 = ("Saved reminder to Local Storage!")
    localStorage.setItem('Reminder4', inputData4.value);
    // notifcation 
    $('#savesData').text(savesdData4);

}

var save5 = document.getElementById("saveBtn5");
console.log(save);
function saveData5() {
    // save data to Local Storage
    var inputData = document.getElementById("message5");
    var savesdData = ("Saved reminder to Local Storage!")
    localStorage.setItem('Reminder5', inputData5.value);
    // notifcation 
    $('#savesData').text(savesdData5);

}

var save6 = document.getElementById("saveBtn6");
console.log(save);
function saveData6() {
    // save data to Local Storage
    var inputData6 = document.getElementById("message6");
    var savesdData6 = ("Saved reminder to Local Storage!")
    localStorage.setItem('Reminder6', inputData6.value);
    // notifcation 
    $('#savesData').text(savesdData6);

}

var save7 = document.getElementById("saveBtn7");
console.log(save);
function saveData7() {
    // save data to Local Storage
    var inputData7 = document.getElementById("message7");
    var savesdData7 = ("Saved reminder to Local Storage!")
    localStorage.setItem('Reminder7', inputData7.value);
    // notifcation 
    $('#savesData').text(savesdData7);

}

var save8 = document.getElementById("saveBtn8");
console.log(save8);
function saveData8() {
    // save data to Local Storage
    var inputData8 = document.getElementById("message8");
    var savesdData8 = ("Saved reminder to Local Storage!")
    localStorage.setItem('Reminder8', inputData8.value);
    // notifcation 
    $('#savesData').text(savesdData8);

}

save.addEventListener("click", saveData);
save1.addEventListener("click", saveData1);
save2.addEventListener("click", saveData2);
save3.addEventListener("click", saveData3);
save4.addEventListener("click", saveData4);
save5.addEventListener("click", saveData5);
save6.addEventListener("click", saveData6);
save7.addEventListener("click", saveData7);
save8.addEventListener("click", saveData8);

