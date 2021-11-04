var i = 0,
  j = 0;
var arrImages = [
  "media/main-banner-1-1600x700.jpg",
  "media/main-banner-2-1600x700.jpg",
];

function myNext() {
  if (i < arrImages.length - 1) {
    i++;
  } else {
    i = 0;
  }
  setTimeout("showImage()", 500);
}
function myPrev() {
  if (i > 0) {
    i--;
  } else {
    i = arrImages.length - 1;
  }
  setTimeout("showImage()", 500);
}
var myinfinite = function () {
    document.sliderImage.src = arrImages[i];
    if (i < arrImages.length - 1) {
      i++;
    } else {
      i = 0;
    }

  setTimeout("myinfinite()", 11000);
};

var showImage = function () {
  document.sliderImage.src = arrImages[i];
  setTimeout("showImage()", 1000);
};
showImage();
myinfinite();
