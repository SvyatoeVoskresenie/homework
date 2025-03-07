// Modal

const modalIsOpening = document.querySelector('.about__img-button')
const modalIsOpened = document.querySelector('.body')
const modalIsClosed = document.querySelector('.modal__cancel')

modalIsOpening.addEventListener('click', () => {
    modalIsOpened.classList.add('body--opened-modal')
}
)

modalIsClosed.addEventListener('click', () => {
    modalIsOpened.classList.remove('body--opened-modal')
}
)
// modalIsOpening.addEventListener('click', () => {
//     modalIsOpened.classList.add('body--opened-modal')
// }
// )
// modalIsClosed.addEventListener('click', () => {
//     modalIsOpened.classList.remove('body--opened-modal')
// }
// )

    // Хэдер

    (function () {

        document.addEventListener('click', burgerIsCooked)

        function burgerIsCooked(e) {
            const target = e.target
            const navMenu = document.querySelector('.body')
            const burgerIsHere = target.closest('.burger-icon')
            const headerNavLink = target.closest('.header__nav-link')

            if (document.documentElement.clientWidth > 900) return

            if (burgerIsHere) {
                navMenu.classList.toggle('body--menu-is-opened')
            }
            if (headerNavLink) {
                navMenu.classList.toggle('body--menu-is-opened')
            }

        }


    })()

