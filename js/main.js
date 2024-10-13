const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    spaceBetween: 0,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    breakpoints: {
        576: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        1025: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
    },
    on: {
        init: function () {
            updateSlideCounter(this);
        },
        slideChange: function () {
            updateSlideCounter(this);
        }
    }
});

function updateSlideCounter(swiper) {
    const currentSlideElem = document.getElementById('current-slide');
    const totalSlidesElem = document.getElementById('total-slides');

    currentSlideElem.textContent = swiper.realIndex + 1;
    totalSlidesElem.textContent = swiper.slides.length;
}