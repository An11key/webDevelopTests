
let textElement = document.querySelector('.horizontal-swiper .swiper-wrapper');
let n = 3;
let s = '';
for (let i = 1; i <= n; i++) {
    s += `<div class = "swiper-slide"><div class = "image"><img src="/images/img${i}_horizontal.jpg"></div></div>`;
}
textElement.innerHTML = s;


textElement = document.querySelector('.vertical-swiper .swiper-wrapper');
n = 2;
s = '';
for (let i = 1; i <= n; i++) {
    s += `<div class = "swiper-slide"><div class = "image"><img src="/images/img${i}_vertical.jpg"></div></div>`;
}
textElement.innerHTML = s;


new Swiper('.horizontal-swiper', {
    loop: true,

    autoplay: {
        delay: 0,
        stopOnLastSlide: false,
    },

    speed: 3000,

    direction: 'horizontal',
});

new Swiper('.vertical-swiper', {
    loop: true,

    autoplay: {
        delay: 0,
        stopOnLastSlide: false,
    },

    speed: 3000,

    direction: 'vertical',
});






