var slider = document.querySelector('.advantages__wrapper');


var slides = new Array(slider.querySelector('.advantages__item--fast'),
					   slider.querySelector('.advantages__item--cool'),
					   slider.querySelector('.advantages__item--price'));
var toggles = new Array(slider.querySelector('.slider__toggle--1'),
 						slider.querySelector('.slider__toggle--2'),
 						slider.querySelector('.slider__toggle--3'));

slider.classList.remove('slider--nojs');
toggles[0].addEventListener('click', function(evt){
	evt.preventDefault();
	for(i = 0; i < 3; i++ ){
		slides[i].classList.remove("slider__item--current");
		toggles[i].classList.remove("slider__toggle--current");
	}
	
	slides[0].classList.add("slider__item--current");
	toggles[0].classList.add("slider__toggle--current");
});

toggles[1].addEventListener('click', function(evt){
	evt.preventDefault();
	for(var i = 0; i < 3; i++ ){
		slides[i].classList.remove("slider__item--current");
		toggles[i].classList.remove("slider__toggle--current");
	}
	
	slides[1].classList.add("slider__item--current");
	toggles[1].classList.add("slider__toggle--current");
});

toggles[2].addEventListener('click', function(evt){
	evt.preventDefault();
	for(var i = 0; i < 3; i++ ){
		slides[i].classList.remove("slider__item--current");
		toggles[i].classList.remove("slider__toggle--current");
	}
	
	slides[2].classList.add("slider__item--current");
	toggles[2].classList.add("slider__toggle--current");
});

