let toggleEl = document.getElementById('toggle-menu');
let closeEl = document.getElementById('menu-close');
let dropdownBtn = document.getElementById('dropdown');
let dropdownCont = document.getElementById('sub-menu');
let bookEl = document.querySelectorAll('.button');
let formClose = document.getElementById('modal-close');
let modalEl = document.getElementById('modal');
let formEl = document.getElementById('form-submit');

toggleEl.addEventListener('click', showMenu);
closeEl.addEventListener('click', closeMenu);
dropdownBtn.addEventListener('mouseover', dropdown);
dropdownCont.addEventListener('mouseleave', dropdownOut);
formClose.addEventListener('click', modalClose);
for(let i = 0; i < bookEl.length; i++){
  bookEl[i].addEventListener('click', modal);
}
formEl.addEventListener('click', formValidation);


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

function modal(e){
  e.preventDefault();
  modalEl.style.display = 'block';
}

function modalClose(){
  modalEl.style.display = 'none';
}

function formValidation (e){
  e.preventDefault();
  let validate = true;
  let roomEl = document.getElementById('room-type').value;
  let firstDayEl = document.getElementById('first-day').value;
  let lastDayEl = document.getElementById('last-day').value;
  let nameEl = document.getElementById('name').value.trim();
  let emailEl = document.getElementById('email').value.trim();
  let phoneEl = document.getElementById('phone-number').value.trim();
  let errorMsg = document.getElementsByClassName('error');
  let emailValidationRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  let firstDay = Number(new Date(firstDayEl));
  let lastDay = Number(new Date(lastDayEl));


  if (firstDay > lastDay){
    alert('The last day cannot be before the first one!');
  }

  if (!firstDayEl){
    errorMsg[0].style.display = 'block';
  } else {
    errorMsg[0].style.display = 'none';
  }
  if (!lastDayEl){
    errorMsg[1].style.display = 'block';
  } else {
    errorMsg[1].style.display = 'none';
  }
  if (nameEl == ''){
    errorMsg[2].style.display = 'block';
  } else {
    errorMsg[2].style.display = 'none';
  }
  if (emailEl == '' || !emailEl.match(emailValidationRegex) ){
    errorMsg[3].style.display = 'block';
  } else {
    errorMsg[3].style.display = 'none';
  }
  if (!phoneEl || isNaN(phoneEl) || phoneEl.length != 10){
    errorMsg[4].style.display = 'block';
  } else {
    errorMsg[4].style.display = 'none';
  }

  if (!firstDayEl || !lastDayEl || nameEl =='' || emailEl == '' || !emailEl.match(emailValidationRegex) || !phoneEl || isNaN(phoneEl) || phoneEl.length != 10){
    validate = false;
    return validate;
  }

  if(validate = true){
    const p = document.createElement('p');
    let output = `The room you want is ${roomEl} from the date ${firstDayEl} up to ${lastDayEl}. We will contact you via your phone ${phoneEl} or via email ${emailEl}. Have a great day!`;
    let formEl = document.querySelector('form');
    let modalEl = document.getElementById('modal');

    modalEl.appendChild(p);
    p.innerHTML = output;
    p.className = 'success';
    formEl.style.display = 'none';
  }
}