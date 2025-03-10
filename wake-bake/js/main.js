// Modal

// const modalIsOpening = document.querySelector('.about__img-button')
// const modalIsOpened = document.querySelector('.body')
// const modalIsClosed = document.querySelector('.modal__cancel')

// modalIsOpening.addEventListener('click', () => {
//     modalIsOpened.classList.add('body--opened-modal')
// }
// )

// modalIsClosed.addEventListener('click', () => {
//     modalIsOpened.classList.remove('body--opened-modal')
// }
// )

// ||||||||||||||||||||||

(function () {

    // |||||||| header ||||||||||

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

    // |||||||| tabs ||||||||||


    const tabControls = document.querySelector('.tab-controls')

    tabControls.addEventListener('click', toggleTab)

    function toggleTab(e) {

        const tabControl = e.target.closest('.tab-controls__link')

        if (!tabControl) return
        e.preventDefault()
        if (tabControl.classList.contains('tab-controls__link--active')) return


        const tabContendID = tabControl.getAttribute('href')

        document.querySelector('.tab-content--show').classList.remove('tab-content--show')
        document.querySelector(tabContendID).classList.add('tab-content--show')

        document.querySelector('.tab-controls__link--active').classList.remove('tab-controls__link--active')
        tabControl.classList.add('tab-controls__link--active')

    }

    ///////////////////acording


    const accordingLists = document.querySelectorAll('.according-list')

    accordingLists.forEach(el => {

        el.addEventListener('click', (e) => {

            const accordingControl = e.target.closest('.according-list__control')
            if (!accordingControl) return
            const accordingItem = accordingControl.parentElement
            const accordingContent = accordingControl.nextElementSibling

            accordingItem.classList.toggle('according-list__item--opened')

            if (accordingItem.classList.contains('according-list__item--opened')) {
                accordingContent.style.maxHeight = accordingContent.scrollHeight + 'px'
            } else {
                accordingContent.style.maxHeight = null
            }
        })
    })




    // const accordingLists = document.querySelectorAll('.according-list')

    // accordingLists.forEach(el => {
    //     el.addEventListener('click', (e) => {
    //         const accordingControl = e.target.closest('.according-list__control')
    //         if (!accordingControl) return
    //         const accordingItem = accordingControl.parentElement
    //         const accordingContent = accordingControl.nextElementSibling

    //         accordingItem.classList.toggle('according-list__item--opened')

    //         if (accordingItem.classList.contains('according-list__item--opened')) {
    //             accordingContent.style.maxHeight = accordingContent.scrollHeight + 'px'
    //         } else {
    //             accordingContent.style.maxHeight = null
    //         }
    //     })
    // })
}) ()


// *************если аккордионова вкладка открыта на дизе ИЗНАЧАЛЬНО

// const accordingLists = document.querySelectorAll('.according-list')

//     accordingLists.forEach(el => {

//         document.querySelector('.according-list__item--opened .according-list__content').style.maxHeight = document.querySelector('.according-list__item--opened .according-list__content').scrollHeight + 'px'
        
//         el.addEventListener('click', (e) => {


//             const accordingControl = e.target.closest('.according-list__control')
//             if (!accordingControl) return
//             const accordingItem = accordingControl.parentElement
//             const accordingContent = accordingControl.nextElementSibling

//             accordingItem.classList.toggle('according-list__item--opened')

//             if (accordingItem.classList.contains('according-list__item--opened')) {
//                 accordingContent.style.maxHeight = accordingContent.scrollHeight + 'px'
//             } else {
//                 accordingContent.style.maxHeight = null
//             }
//         })
//     })