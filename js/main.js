const swiper = new Swiper('.projects__slider', {
	effect: "fade",
	fadeEffect: {
		crossFade: true
	},
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
});



// Открыть/закрыть меню при клике на кнопку
$('.header__menu-btn').on('click', function (event) {
	event.stopPropagation(); // Останавливаем всплытие события
	$('.header__menu').toggleClass('active');
});


$('.header__menu').on('click', function (event) {
	event.stopPropagation(); // Останавливаем всплытие события
});


$(document).on('click', function () {
	$('.header__menu').removeClass('active');
});


// Модальное окно при клике на "Закажите консультацию"

const dialog = document.querySelector('.dialog')
const openModals = document.querySelectorAll('.open-modal');
const closeModal = dialog.querySelector('.close-modal')

function openModalAndBlockScroll() {
	dialog.showModal()
	document.body.classList.add('scroll-block')
}

function returnScroll() {
	document.body.classList.remove('scroll-block')
}

function close() {
	dialog.close()
	returnScroll()
}

function closeOnOverlayClick({ currentTarget, target}) {
	const dialog = currentTarget
	const isOnOverlayClick = target === dialog
	if (isOnOverlayClick) {
		close()
	}
}

openModals.forEach((openModal) => {
  openModal.addEventListener('click', openModalAndBlockScroll)
})

closeModal.addEventListener('click', () => {
	close()
})

dialog.addEventListener('click', closeOnOverlayClick)
dialog.addEventListener('cancel', () => {
	returnScroll()
});



// Стрелочка вверх, которая появляется при скролле
const scrollToTopButton = document.getElementById('scrollToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopButton.style.display = 'flex';
  } else {
    scrollToTopButton.style.display = 'none';
  }
});

scrollToTopButton.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});
