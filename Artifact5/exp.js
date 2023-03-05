var pictime = 5;
var images = [
  ["https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20220618_124212.jpg", "Dress-Up"],
  ["https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20220629_154645.jpg", "Ducks"],
  ["https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20220813_122309.jpg", "Fun in the Sun"],
  ["https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20220822_161703.jpg", "Siblings"],
  ["https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20221012_181844_03.jpg","Fun at the Park" ],
  ["https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20221012_205126.jpg", "Chloe"],
];
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
        //This unfortunate try...catch mainly for old IE versions.
      } catch (e) {
        subscript = 0
        var imagefile = images[subscript][0];
      }
      //Set the image tag's src= and classname= attributes.
      var imgtag = document.getElementById('slideimg');
      imgtag.src = "/" + imagefile;
      document.getElementById('caption').innerHTML = images[subscript][1];
      imgtag.className = 'fadein';
    }
    //Make sure everything is loaded before starting timer.
    window.onload = function () {
      newimg()
      var stimer = setInterval('nextimg()', pictime * 1000);

    }
