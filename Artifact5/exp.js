var pictime = 5;

//Image filenames and captions
var images = [
  ["20220618_124212.jpg", "Dress-Up"],
  ["20220629_154645.jpg", "Ducks"],
  ["20220813_122309.jpg", "Fun in the Sun"],
  ["20220822_161703.jpg", "Siblings"],
  ["20221012_181844_03.jpg","Fun at the Park" ],
  ["20221012_205126.jpg", "Chloe"],
];

// You don't really need to change anything below here unless you want to changing styling or something.

    img.src = imgages[index][0];
    imgDescription.textContent = imgages[index][1];

function next(){
 if (images.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 
 

function back(){
 if (index===0)
 index=images.length-1;
 else
 index--;}




var nextButton = document.getElementById("next"); 
var previousButton = document.getElementById("previous"); 

previousButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

//Make sure everything is loaded before starting timer.
