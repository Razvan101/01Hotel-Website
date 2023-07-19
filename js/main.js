let toggleEl = document.getElementById('toggle-menu');
let closeEl = document.getElementById('menu-close');
let dropdownBtn = document.getElementById('dropdown');
let dropdownCont = document.getElementById('sub-menu');

toggleEl.addEventListener('click', showMenu);
closeEl.addEventListener('click', closeMenu);
dropdownBtn.addEventListener('mouseover', dropdown);
dropdownCont.addEventListener('mouseleave', dropdownOut);


function showMenu (){
  let menuEl = document.getElementById('menu');
  menuEl.style.display = 'flex';
}

function closeMenu(){
  let menuEl = document.getElementById('menu');
  menuEl.style.display = 'none';
}

function dropdown () {
  let dropdownEl = document.getElementById('sub-menu');
  dropdownEl.style.display = 'block';
}

function dropdownOut (){
  let dropdownEl = document.getElementById('sub-menu');
  dropdownEl.style.display = 'none';
}

function slideshow(){

  let slides = document.getElementsByClassName('slides');
  let slideIndex = 0;
  slides[slideIndex].style.display = 'block';

  let plusEl = document.querySelector('.plus');
  let minusEl = document.querySelector('.minus');
  
  plusEl.addEventListener('click', plusSlide);
  minusEl.addEventListener('click', minusSlide);

  function plusSlide(){
    slideIndex++;
    if (slideIndex >= slides.length){slideIndex = 0}
    for(let i = 0; i < slides.length; i++){
      slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
  }

  function minusSlide(){
    slideIndex--;
    if (slideIndex < 0){slideIndex = 2}
    for(let i = 0; i < slides.length; i++){
      slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
  }
  
}

slideshow();

function testimonial (){
  let slides = document.getElementsByClassName('testimonial-item');
  let slideIndex = 0;
  slides[slideIndex].style.display = 'block';

  let plus = document.querySelectorAll('.next');
  let minus = document.querySelectorAll('.prev');

  plus[0].addEventListener('click', plusSlide);
  minus[0].addEventListener('click', minusSlide);

  function plusSlide(){
    slideIndex++;
    if (slideIndex > 3){slideIndex = 0}
    for(let i = 0; i < slides.length; i++){
      slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
  }

  function minusSlide(){
    slideIndex--;
    if(slideIndex < 0){slideIndex = 3}
    for(let i = 0; i < slides.length; i++){
      slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
  }
}

testimonial ();

function currentSlide(){
  let dot = document.querySelectorAll('.line');
  for(let i = 0; i < dot.length; i++){
    dot[i].addEventListener('click', showSlide);
  }
  function showSlide(){
    let slideIndex = this.getAttribute('data-target');
    let slides = document.getElementsByClassName('testimonial-item');
    for(let i = 0; i < slides.length; i++){
      slides[i].style.display = 'none';
    }
    slides[slideIndex].style.display = 'block';
  }
}

currentSlide();