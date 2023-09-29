const lastSlidePage = 5;
const firstSlidePage = 1;

let slidePage = firstSlidePage;

document.addEventListener('DOMContentLoaded', function() {
  for (let i = 2; i <= lastSlidePage; i++) 
{
  document.getElementById("slide_" + i).style.display = "none";
}
});

console.log(2);

document.addEventListener('keydown', function(event) {
  console.log(3);
  switch (event.key) {
    case 'ArrowUp':
      console.log(4);

      if (slidePage > firstSlidePage) 
      {
        updateSlide(slidePage, "none"); // Hide the current slide
        slidePage--;
        nextSlide(slidePage, "block"); // Show the next slide
      }
      break;

    case 'ArrowDown':

      if (slidePage < lastSlidePage) 
      {
        updateSlide(slidePage, "none"); // Hide the current slide
        slidePage++;
        nextSlide(slidePage, "block"); // Show the next slide
      }
      break;
  }
});

function updateSlide(id, displayStyle) 
{
  const slide = document.getElementById("slide_" + id);
  if (slide) {
    slide.style.display = displayStyle;
  }
}

function nextSlide(id, displayStyle) {
  const slide = document.getElementById("slide_" + id);
  if (slide) {
    slide.style.display = displayStyle;
  }
}
