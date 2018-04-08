// Nav for Media Queries
function hideNav() {
         document.getElementById("nav").style.width = "0";
         document.getElementById("main").style.marginLeft= "0";
}
function openNav(){
         document.getElementById("nav").style.width = "80%";
         document.getElementById("main").style.marginLeft = "80%";
}

// Slide Show

var images = ["Picture/PIT/BranchUpClose.jpg","Picture/PIT/Grass.JPG","Picture/PIT/JaunsPlant.JPG","Picture/PIT/MR2.JPG","Picture/PIT/RainEdited.JPG","Picture/PIT/rainyDaySchool.JPG","Picture/PIT/SunnyThorn.JPG","Picture/PIT/TreeBranch.JPG","Picture/PIT/Umbrella.JPG","Picture/PIT/Weeds.JPG"]
var imageNumber = 0;
var imageLength= images.length -1;

function changeImage(x){
    imageNumber += x;
    if (imageNumber > imageLength){
        imageNumber= 0;
    }
    if (imageNumber < 0){
        imageNumber = imageLength;
    }
    document.getElementById("slideshow").src = images [imageNumber]
    return false
}
//dark mode



function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}

function toggleDarkLight2() {
  var body2 = document.getElementById("body");
  var currentClass2 = body.className;
  body.className = currentClass == "dark-mode2" ? "light-mode2" : "dark-mode2";
}

function toggleDarkLight3() {
  var body3 = document.getElementById("body");
  var currentClass3 = body.className;
  body.className = currentClass == "dark-mode3" ? "light-mode3" : "dark-mode3";
}

function toggleDarkLight4() {
  var body4 = document.getElementById("body");
  var currentClass4 = body.className;
  body.className = currentClass == "dark-mode4" ? "light-mode4" : "dark-mode4";
}

function toggleDarkLight5() {
  var body5 = document.getElementById("body");
  var currentClass5 = body.className;
  body.className = currentClass == "dark-mode5" ? "light-mode5" : "dark-mode5";
}

function toggleDarkLight6() {
  var body6 = document.getElementById("body");
  var currentClass6 = body.className;
  body.className = currentClass == "dark-mode6" ? "light-mode6" : "dark-mode6";
}


