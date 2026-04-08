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

const productSearchInput = document.getElementById('productSearchInput');
const productSearchButton = document.getElementById('productSearchButton');
const searchMessage = document.getElementById('searchMessage');
const productCards = Array.from(document.querySelectorAll('.product-card'));
const productSections = Array.from(document.querySelectorAll('.product-section'));

function filterProducts() {
    if (!productSearchInput) return;
    const query = productSearchInput.value.trim().toLowerCase();
    let visibleCount = 0;

    productCards.forEach(card => {
        const title = card.querySelector('h3')?.textContent.toLowerCase() || '';
        const price = card.querySelector('p')?.textContent.toLowerCase() || '';
        const matches = query === '' || title.includes(query) || price.includes(query);
        card.style.display = matches ? '' : 'none';
        if (matches) visibleCount += 1;
    });

    productSections.forEach(section => {
        const visibleCard = section.querySelector('.product-card:not([style*="display: none"])');
        section.style.display = visibleCard ? '' : 'none';
    });

    if (searchMessage) {
        searchMessage.textContent = visibleCount === 0 && query !== '' ? 'No products matched your search.' : '';
    }
}

if (productSearchInput) {
    productSearchInput.addEventListener('input', filterProducts);
}

if (productSearchButton) {
    productSearchButton.addEventListener('click', filterProducts);
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


