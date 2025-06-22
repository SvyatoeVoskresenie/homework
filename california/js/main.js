
// ||||||||||||||||||||||
(function () {
    
        document.addEventListener('click', burgerIsCooked)

    function burgerIsCooked(e) {
        const target = e.target
        const navMenu = document.querySelector('.body')
        const burgerIsHere = target.closest('.burger-icon')
        const headerNavLink = target.closest('.header__nav-link')

        if (document.documentElement.clientWidth > 945) return

        if (burgerIsHere) {
            navMenu.classList.toggle('body--menu-is-opened')
        }
        if (headerNavLink) {
            navMenu.classList.toggle('body--menu-is-opened')
        }

    }
    
    new Swiper('.hero__swiper', {
        spaceBetween: 200,
        slidesPerView: 1,
        // centeredSlides: true,
        
        navigation: {
            nextEl: '.hero__next',
            prevEl: '.hero__prev',
        },
        
        
        breakpoints: {
            // 901: {
            //     slidesPerView: 1.5,
            // },
            // 1201: {
            //     slidesPerView: 2.1,
            // },
            1496: {
                slidesPerView: 1,
            }
        }
        
        
    });
    console.log(14 % 4)
    
}) ()

// console.log(14 % 4)