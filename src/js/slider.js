const prev = document.getElementById('btn-prev'),
			next = document.getElementById('btn-next'),
			slides = document.querySelectorAll('.Slider-item'),
			dots = document.querySelectorAll('.Slider-switcher-item');

let index = 0;

// добавляем класс active к видимому слайду
const activeSlide = n => {
	for(slide of slides) {
		slide.classList.remove('active');
	}
	slides[n].classList.add('active');
}

const activeDot = n => {
	for(dot of dots) {
		dot.classList.remove('active');
	}
	dots[n].classList.add('active');
}

const prepareCurrentSlide = ind => {
	activeSlide(ind);
	activeDot(ind)
}

const nextSlide = () => {
	if (index === slides.length - 1) { //проверяем, не последний ли слайд
		index = 0; // если последний, то перекидываем на нулевой
		prepareCurrentSlide(index);
	} else {
		index++; // если не последний, то перекидываем на следующий
		prepareCurrentSlide(index);
	}
}

const prevSlide = function() {
	if (index === 0) { // проверяем, не нулевой ли слайд
		index = slides.length - 1 // если нулевой, то перекидываем на предпоследний
		prepareCurrentSlide(index);
	} else {
		index--; // если не нулевой, то перекидываем на предыдущий
		prepareCurrentSlide(index);
	}
}

dots.forEach((item, indexDot) => {
	item.addEventListener('click', () => {
		index = indexDot;
		prepareCurrentSlide(index);
	});
});

next.addEventListener('click', nextSlide);
prev.addEventListener('click', prevSlide);

setInterval(nextSlide, 2500);