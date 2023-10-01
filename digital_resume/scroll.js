const lastSlidePage = 7;
const firstSlidePage = 1;

let slidePage = firstSlidePage;

document.addEventListener('DOMContentLoaded', function() 
{
  for (let i = 2; i <= lastSlidePage; i++) 
  {
    hideSlide(i);
  }

  updateButtons();
});

document.addEventListener('keydown', function(event) 
{
  switch (event.key) 
  {
    case 'ArrowLeft':
      navigateLeft();
      break;

    case 'ArrowRight':
      navigateRight();
      break;
  }
});

function navigateRight() 
{
  if (slidePage < lastSlidePage) 
  {
    hideSlide(slidePage);
    slidePage++;
    showSlide(slidePage);
    updateButtons();
  }
}

function navigateLeft() 
{
  if (slidePage > firstSlidePage) 
  {
    hideSlide(slidePage);
    slidePage--;
    showSlide(slidePage);
    updateButtons();
  }
}

function updateSlide(id, displayStyle) 
{
  const slide = document.getElementById("slide_" + id);
  if (slide) 
  {
    slide.style.display = displayStyle;
  }
}

function hideSlide(id) 
{
  updateSlide(id, "none");
}

function showSlide(id) 
{
  updateSlide(id, "block");
}

function updateButtons() 
{
  const previousButton = document.getElementById("buttonPrevious");
  const nextButton = document.getElementById("buttonNext");
  
  if (firstSlidePage < slidePage && slidePage < lastSlidePage) 
  {
    previousButton.style.display = "inline";
    nextButton.style.display = "inline";
  } 
  else if (slidePage === firstSlidePage) 
  {
    previousButton.style.display = "none";
  } 
  else 
  {
    nextButton.style.display = "none";
  }
}
