console.log("Hey there!");


// profile section

let profile_btn = document.querySelector("#Profile_btn");
let ad_btn = document.querySelector("#ad_content");


let administration = document.querySelector(".administration");
let userProfile = document.querySelector(".userProfile");


ad_btn.addEventListener("click", ()=>{
  administration.style.display = "flex";

  document.addEventListener('mouseup', ()=>{
  administration.style.display = "none";
  })
});


profile_btn.addEventListener("click", () => {
  userProfile.style.display = "flex";

  userProfile.addEventListener("mouseup", () => {
    userProfile.style.display = "none";
  });
});


// time section

function showIstTime() {
  var date = new Date();
  var h = date.getHours(); // 0 - 23
  var m = date.getMinutes(); // 0 - 59
  var s = date.getSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyIstClockDisplay").innerText = time;
  document.getElementById("MyIstClockDisplay").textContent = time;

  setTimeout(showIstTime, 1000);
}

showIstTime();


function showUtcTime() {
  var date = new Date();
  var h = date.getUTCHours(); // 0 - 23
  var m = date.getUTCMinutes(); // 0 - 59
  var s = date.getUTCSeconds(); // 0 - 59
  var session = "AM";

  if (h == 0) {
    h = 12;
  }

  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;
  document.getElementById("MyUtcClockDisplay").innerText = time;
  document.getElementById("MyUtcClockDisplay").textContent = time;

  setTimeout(showUtcTime, 1000);
}

showUtcTime();


// Tab section

function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.color = "#000";
    tablinks[i].style.borderBottom = "none";
  }
  document.getElementById(pageName).style.display = "block";
  elmnt.style.color = "#d2292e";
  elmnt.style.borderBottom = "3px solid #d2292e";
  
}

// Get the element with id="defaultOpen" and click on it
document.getElementById("defaultOpen").click();


// collapsible section

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}


