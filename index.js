var myImages =["https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjp2M24ifHeAhXcHzQIHUIMCh0QjRx6BAgBEAU&url=https%3A%2F%2Fthehappypuppysite.com%2Fshar-pei%2F&psig=AOvVaw11coACicb41XBqCFf7FM_F&ust=1543287789444636https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbes4FlA6JatlLbbJQmAjxf5aCbEfQYKMnMbhqntxS1-gr0Kt3CQ","https://www.arabianbusiness.com/sites/default/files/styles/full_img/public/images/2017/03/07/Dubai-skyline.jpg","https://static1.squarespace.com/static/54d29f9ee4b00906e82cc34a/t/5887e319e3df28abe39d7da7/1485300510967/shutterstock_225726403+%281%29.jpg?format=2500w","https://www.trafalgar.com/~/media/images/destination-guides/greece/TT_Greece_landing-page-hero_768x450","https://www.azamaraclubcruises.com/sites/default/files/heros/pr-venice-italy-5-may-19.jpg"];


var captionImages =["morocco","dubai","Equality New Mexico","Grece","Italy"];

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
