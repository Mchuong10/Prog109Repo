 var num = 0;
 
//Replace with: relative pathes to your images, alt text, caption
imgArray = [
  ["https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20220618_124212.jpg", "Dress-Up"],
  ["https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20220629_154645.jpg", "Ducks"],
  ["https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20220813_122309.jpg", "Fun in the Sun"],
  ["https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20220822_161703.jpg", "Siblings"],
  ["https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20221012_181844_03.jpg","Fun at the Park" ],
  ["https://github.com/Mchuong10/Prog109Repo/blob/main/Artifact5/20221012_205126.jpg", "Chloe"],
];

 
 //Replace with your IDs of image and caption
function slideshow(slide_num) {
document.getElementById('slide').src=imgArray[slide_num][0];
document.getElementById('slide').alt=imgArray[slide_num][1];
}

//next button
 function next(){
 if (imgArray.length == index+1)
 index=0;
 else
 index++;
 updateImage();
} 

//previous button
function back(){
 if (index===0)
 index=imgArray.length-1;
 else
 index--;
 
 updateImage();
} 


//autoplay
function playImageArray(){
	if (num==imgArray.length){
		num=0;
		}
	document.getElementById('slide').src=imgArray[num][0];
	num=num+1;
	}
