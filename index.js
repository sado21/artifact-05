var myImages =["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhujovKACx80reK9Y8mpn88fmbXa6AHUFf8SwaY3av6SKFz1ub","https://amp.businessinsider.com/images/57b2124cdd089546258b45ae-750-500.jpg","https://www.tripsavvy.com/thmb/eqIUoqQykjoDq0sCKQVY7XccPkk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/37705096385_a5722ec534_k-5b50265246e0fb003780ab4c.jpg","https://www.arabianbusiness.com/sites/default/files/styles/full_img/public/images/2017/03/07/Dubai-skyline.jpg"
               "https://observer.ug/images/Rwanda/kcc.jpg"];


var captionImages =["somalia","morocco","Greece","Dubai","Rwanda"];

var index=0; 

function updateImage(){
  document.getElementById("slideshow").src = myImages[index];
  document.getElementById("slideshow").alt= captionImages[index];
  document.getElementById("caption").textContent = captionImages[index]; 
} 

function next(){
  if (myImages.length == index+1)
    index=0;
  else
    index++;
  updateImage();
} 


function back(){
  if (index===0)
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
