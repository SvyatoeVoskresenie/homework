
// Хэдер

(function () {

    document.addEventListener('click', burgerIsCooked) 

        function burgerIsCooked(e) {
            const target = e.target
            const navMenu = document.querySelector('.body')
            const burgerIsHere = target.closest('.burger-icon')
            const headerNavLink = target.closest('.header__nav-link')

            if(document.documentElement.clientWidth > 900) return

            if(burgerIsHere){
                navMenu.classList.toggle('body--menu-is-opened')
            }
            if(headerNavLink){
                navMenu.classList.toggle('body--menu-is-opened')
            }

        }


})()

