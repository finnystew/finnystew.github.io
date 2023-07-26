//About Overlay On

function on() {
  document.getElementById('AboutOverlay').style.display = 'block'
  document.getElementById('AboutText').style.display = 'block'
}

// About Overlay Off
function off() {
  document.getElementById('AboutOverlay').style.display = 'none'
  document.getElementById('AboutText').style.display = 'none'
}

//Slideshow setup
let sliderImages = document.querySelectorAll('.slide'),
  prevImage = document.querySelector('#PrevImage'),
  nextImage = document.querySelector('#NextImage'),
  current = 0;

// console.log(sliderImages.length);
// console.log(current);

function blackBG() {
    document.getElementById("BlackOverlay").style.display = 'block';
}

function whiteBG() {
    document.getElementById("BlackOverlay").style.display = 'none';
}

//Clear all images
function reset() {
  for (let i = 0; i < sliderImages.length; i++) {
    sliderImages[i].style.display = 'none';
  }
}

// Initialise Slider
function startSlide() {
  reset();
  sliderImages[0].style.display = 'block';
}

function prevSlide() {
  reset();
  sliderImages[current - 1].style.display = 'block';
  current--;
}

function nextSlide() {
  reset();
  sliderImages[current + 1].style.display = 'block';
  current++;
}

//
prevImage.addEventListener('click', function() {
  if (current === 0) {
    current = sliderImages.length;
  }
  console.log(current);
  if (current > 8) {
    blackBG();
  }
  if (current < 9) {
    whiteBG()
  }
  prevSlide();
});


nextImage.addEventListener('click', function() {
  if (current === sliderImages.length - 1) {
    current = -1;
  }
  //current slide
  console.log(current);
  if (current > 6) {
    blackBG();
  }
  if (current < 6) {
    whiteBG()
  }
  nextSlide();
});

startSlide();
