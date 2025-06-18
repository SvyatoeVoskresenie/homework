
// ||||||||||||||||||||||
console.log(14 % 4)
(function () {


        new Swiper('.hero__swiper', {
        spaceBetween: 40,
        slidesPerView: 1,
        // centeredSlides: true,
    
        navigation: {
            nextEl: '.hero__next',
            prevEl: '.hero__prev',
        },

        
        breakpoints: {
            901: {
                slidesPerView: 1.5,
            },
            1201: {
                slidesPerView: 2.1,
            }
        }

        
    });
    
}) ()

console.log(14 % 4)