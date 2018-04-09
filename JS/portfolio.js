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

var images = ["Picture/PIT/BranchUpClose.jpg","Picture/PIT/Grass.JPG","Picture/PIT/MR2.JPG","Picture/PIT/RainEdited.JPG","Picture/PIT/TreeBranch.JPG","Picture/PIT/Weeds.JPG"]
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
}
//dark mode



function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}



