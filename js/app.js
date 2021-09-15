const images = [
  'images/image-1.jpg',
  'images/image-2.jpg',
  'images/image-3.jpg',
  'images/image-4.jpg',
  'images/image-5.jpg',
  'images/image-6.jpg',
  'images/image-7.jpg'
  

];
let imgIndex = 0;
const imgSlider = document.getElementById('slider-img');

setInterval(() => {
  if (imgIndex >= images.length) {
    imgIndex = 0;
  }
  const imgUrl = images[imgIndex];
  imgSlider.setAttribute('src', imgUrl)
  imgIndex++;
}, 1500);