var myImages = [""];

var captionImages =[" "];

var index=0; 

function updateImage(){
  document.getElementById("slideshow").src = "artifact-05images/" + myImages[index];
  document.getElementById("slideshow").alt= captionImages[index];
  document.getElementById("caption").innerHTML = "<p>" + captionImages[index] + "<br>Image " + (index+1) + " of 25</p>"; 
} 

function next(){
  if (myImages.length === index + 1)
    index=0;
  else
    index++;
  updateImage();
} 


function back(){
  if (index === 0)
    index=myImages.length-1;
  else
    index--;
  updateImage();
} 

var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 


function autoSlide(){
  if (document.getElementById("auto").checked)
    next(); 
}

setInterval(autoSlide,2000); // Next
