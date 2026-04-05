var slides = document.querySelectorAll(".slide");
var index = 0;

function showSlide(i) {
    slides.forEach(slide => slide.classList.remove("active"));
    if (slides[i]) {
        slides[i].classList.add("active");
    }
}

const nextSlideButton = document.querySelector(".next");
const prevSlideButton = document.querySelector(".prev");

if (nextSlideButton && prevSlideButton && slides.length > 0) {
    nextSlideButton.onclick = () => {
        index = (index + 1) % slides.length;
        showSlide(index);
    };

    prevSlideButton.onclick = () => {
        index = (index - 1 + slides.length) % slides.length;
        showSlide(index);
    };
}

if (slides.length > 0) {
    setInterval(() => {
        index = (index + 1) % slides.length;
        showSlide(index);
    }, 3500);
}

const mobileMenu = document.getElementById('mobilemenu');
const mobileMenuOverlay = document.getElementById('mobileMenuOverlay');

function openMenu() {
    if (mobileMenu) mobileMenu.classList.add('open');
    if (mobileMenuOverlay) mobileMenuOverlay.classList.add('active');
}

function closeMenu() {
    if (mobileMenu) mobileMenu.classList.remove('open');
    if (mobileMenuOverlay) mobileMenuOverlay.classList.remove('active');
}

if (mobileMenuOverlay) {
    mobileMenuOverlay.addEventListener('click', closeMenu);
}


