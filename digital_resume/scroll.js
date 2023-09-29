const lastSlidePage = 7;
const firstSlidePage = 1;

let slidePage = firstSlidePage;

document.addEventListener('DOMContentLoaded', function() 
{
  for (let i = 2; i <= lastSlidePage; i++) 
{
  document.getElementById("slide_" + i).style.display = "none";
}
});

document.addEventListener('keydown', function(event) 
{
  switch (event.key) 
  {
    case 'ArrowLeft':
      if (slidePage > firstSlidePage)
      {
        updateSlide(slidePage, "none"); // Hide the current slide
        slidePage--;
        nextSlide(slidePage, "block"); // Show the next slide
      }
      break;

    case 'ArrowRight':

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
