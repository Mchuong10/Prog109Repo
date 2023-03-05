//Number of seconds for each picture to show.
var pictime = 5;

//Image filenames and captions
var images = [
  ["20221012_205126.jpg", "Sunset at Padma River, Bangladesh"],
  ["20220629_154645.jpg", "Rub al-Khali desert in Saudi Arabia"],
  ["20220813_122309.jpg", "Pacific Landscape at Castle in the Forbidden City, Vietnam"],
  [ "20220822_161703.jpg", "Overlook of valley and road leading to Deu, Honduras"],
  ["20221012_181844_03.jpg","Meadow near Grindelwald in the Bernese Alps, Switzerland" ],
  ["20221012_205126.jpg", "Indigenous coastal vegetation of Mauritius"],
];

// You don't really need to change anything below here unless you want to changing styling or something.

//Initialize subscript variable
var subscript = -1;
//Preload images
var temp = new Image();
for (i in images) {
  try {
    temp.src = images[i][0];
  } catch (e) {
    //Do nothing (for bad IE .length)
  }
}

//Fade out the current image, then pause.
function nextimg() {
  var imgtag = document.getElementById("slideimg");
  //Apply the fadeout style class.
  imgtag.className = "fadeout";
  //wait 500ms, then get the new image.
  setTimeout("newimg()", 200);
}
//Calculate and show the next image.
function newimg() {
  //Calculate next image subscript number.
  subscript = subscript >= images.length - 1 ? 0 : subscript + 1;
  //Set next image filename appropriate image name in array.
  try {
    var imagefile = images[subscript][0];
    //This unfortunate try...catch mainly for old IE versions.
  } catch (e) {
    subscript = 0;
    var imagefile = images[subscript][0];
  }
  //Set the image tag's src= and classname= attributes.
  var imgtag = document.getElementById("slideimg");
  imgtag.src = folder + "/" + imagefile;
  document.getElementById("caption").innerHTML = images[subscript][1];
  imgtag.className = "fadein";
}
//Make sure everything is loaded before starting timer.
window.onload = function () {
  newimg();
  var stimer = setInterval("nextimg()", pictime * 1000);
};
