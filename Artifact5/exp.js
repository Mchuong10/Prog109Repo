//Number of seconds for each picture to show.
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

var subscript = -1
    //Preload images
    var temp = new Image()
    for (i in images) {
      try {
        temp.src = images[i][0]
      } catch (e) {
        //Do nothing (for bad IE .length)
      }
    }

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
 index--;

    //Fade out the current image, then pause.
    function nextimg() {
      var imgtag = document.getElementById('slideimg');
      //Apply the fadeout style class.
      imgtag.className = 'fadeout';
      //wait 500ms, then get the new image.
      setTimeout('newimg()', 200);
    }
    //Calculate and show the next image.
    function newimg() {
      //Calculate next image subscript number.
      subscript = (subscript >= images.length - 1) ? 0 : subscript + 1;
      //Set next image filename appropriate image name in array.
      try {
        var imagefile = images[subscript][0];
      }
      
      //Set the image tag's src= and classname= attributes.
      var imgtag = document.getElementById('slideimg');
      imgtag.src =  imagefile;
      document.getElementById('caption').innerHTML = images[subscript][1];
      imgtag.className = 'fadein';

var nextButton = document.getElementById("next"); 
var prevButton = document.getElementById("prev"); 

prevButton.addEventListener("click",back,false);
nextButton.addEventListener("click",next,false); 

//Make sure everything is loaded before starting timer.
window.onload = function () {
  newimg();
  var stimer = setInterval("nextimg()", pictime * 1000);
};
