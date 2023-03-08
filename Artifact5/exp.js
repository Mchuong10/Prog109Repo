 var num = 0;
 
//Replace with: relative pathes to your images, alt text, caption
var myImages = [
  "https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20220618_124212.jpg",
  "https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20220629_154645.jpg",
  "https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20220813_122309.jpg", 
  "https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20220822_161703.jpg", 
  "https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20221012_181844_03.jpg", 
  "https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20221012_205126.jpg", 
];

 
var captionImages = [
  "Dress-Up",
  "Ducks",
  "Fun in the Sun",
  "Siblings",
  "Fun at the Park",
  "Chloe",
];

var index = 0;

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

var nextButton = document.getElementById("next");
var previousButton = document.getElementById("previous");

previousButton.addEventListener("click", back, false);
nextButton.addEventListener("click", next, false);

//autoplay
function playmyImages() {
  if (num == myImages.length) {
    num = 0;
  }
  document.getElementById("slide").src = myImages[num][0];
  num = num + 1;
}
