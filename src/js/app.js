import * as flsFunctions from './modules/functions.js';

flsFunctions.isWebp();
// Modal Header
const iconBtnSelector = document.querySelector('.header__icon');
const iconBtnCloseSelector = document.querySelector('.header__icon-close');
const menuLinkSelectors = document.querySelectorAll('.menu__link');

const modalModySelector = document.querySelector('.header__body');

const openModalMenu = () => {
	modalModySelector.classList.add('_active');
	document.body.classList.add('_lock');
};
const closeModalMenu = () => {
	modalModySelector.classList.remove('_active');
	document.body.classList.remove('_lock');
};
iconBtnSelector.addEventListener('click', openModalMenu);
iconBtnCloseSelector.addEventListener('click', closeModalMenu);
menuLinkSelectors.forEach(link => {
	link.addEventListener('click', e => {
		if (modalModySelector.classList.contains('_active')) {
			closeModalMenu();
		}
	});
});

// Modal Form
const modalBtnSelector = document.querySelector('.promo__btn');
const modalBtnCloseSelector = document.querySelector('.modal-form__close');

const modalFormSelector = document.querySelector('.modal-form');
const dialogFormSelector = document.querySelector('.modal-form__dialog');

const openModalForm = () => {
	modalFormSelector.classList.add('_active');
	dialogFormSelector.classList.add('_active');
	document.body.classList.add('_lock');
};

const closeModalForm = () => {
	modalFormSelector.classList.remove('_active');
	dialogFormSelector.classList.remove('_active');
	document.body.classList.remove('_lock');
};

modalBtnSelector.addEventListener('click', openModalForm);
modalBtnCloseSelector.addEventListener('click', closeModalForm);

const swiper = new Swiper('.quotes__swiper', {
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev'
	}
});

// Anim
const itemRecordingSelectors = document.querySelectorAll('.item-recording');
const imgRecordingSelectors = document.querySelectorAll('.recording__img');
const quotesSelector = document.querySelector('.quotes__container');

const offset = el => {
	const rect = el.getBoundingClientRect();
	const scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
	const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return { top: rect.top + scrollTop, left: rect.left + scrollLeft };
};

// const selectors = [
// 	itemRecordingSelectors,
// 	imgRecordingSelectors,
// 	quotesSelector
// ];

const animOnScroll = (selectors, replay = false) => {
	// if (!selectors.length) {
	// 	console.log('1');
	// 	return;
	// }
	// selectors.forEach(selector => {
	const selectorHeight = selectors.offsetHeight;
	const selectorOffset = offset(selectors).top;
	const selectorStart = 2;

	let selectorPoint = window.innerHeight - selectorHeight / selectorStart;
	if (selectorHeight > window.innerHeight) {
		selectorPoint = window.innerHeight - window.innerHeight / selectorStart;
	}
	if (
		pageYOffset > selectorOffset - selectorPoint &&
		pageYOffset < selectorOffset + selectorHeight
	) {
		selectors.classList.add('_anim');
	} else {
		if (replay) {
			selectors.classList.remove('_anim');
		}
	}
	// });
};

window.addEventListener('scroll', e => {
	animOnScroll(quotesSelector);
	let time = 0.3;
	itemRecordingSelectors.forEach(elem => {
		elem.style.animationDelay = `${time}s`;
		time += 0.3;
		animOnScroll(elem);
	});
	imgRecordingSelectors.forEach(elem => {
		elem.style.animationDelay = `${time}s`;
		time += 0.3;
		animOnScroll(elem);
	});
});
