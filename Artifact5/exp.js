 var num = 0;
 
//Images
var myImages = [
  "https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20220618_124212.jpg?raw=true",
  "https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20220629_154645.jpg?raw=true",
  "https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20220813_122309.jpg?raw=true", 
  "https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20220822_161703.jpg?raw=true", 
  "https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20221012_181844_03.jpg?raw=true", 
  "https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20221012_205126.jpg?raw=true", 
];

 // captions
var captionImages = [
  "Dress-Up",
  "Ducks",
  "Fun in the Sun",
  "Siblings",
  "Fun at the Park",
  "Chloe",
];

var index = 0;
//fuctions

function updateImage() {
  document.getElementById("slideshow").src = myImages[index];
  document.getElementById("slideshow").alt = captionImages[index];
  document.getElementById("caption").textContent = captionImages[index];
}

function next() {
  if (myImages.length == index + 1) index = 0;
  else index++;
  updateImage();
}

function back() {
  if (index === 0) index = myImages.length - 1;
  else index--;

  updateImage();
}
//buttons 
var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

previousButton.addEventListener("click", back, false);
nextButton.addEventListener("click", next, false);


//autoplay
function autoSlide() {
  if (document.getElementById("auto").checked)  next(); 
}
setInterval(autoSlide,2000); // Next

