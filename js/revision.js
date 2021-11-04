var i = 0;
var slidImages = [
  "Images/work1.webp",
  "Images/work2.webp",
  "Images/work3.webp",
];
function myNext() {
  if (i < slidImages.length - 1) {
    i++;
  } else {
    i = 0;
  }
}
function myPrev() {
    if (i > 0) {
      i--;
    } else {
      i = (slidImages.length-1);
    }
  }

var slidShow = function () {
  document.slideImageShow.src = slidImages[i];

  setTimeout("slidShow()", 0);
};
slidShow();
