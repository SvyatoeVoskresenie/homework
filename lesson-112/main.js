const modal = document.querySelector('.modal')
const modalWindow = document.querySelector('.modal__window')
const btnOpen = document.querySelector('.btn__open')
const btnClosed = document.querySelector('.modal__btn-closed')

btnOpen.addEventListener('click', () => {
    modal.classList.add('modal--open')
})

modal.addEventListener('click', event => {
    const target = event.target
    if (target && target.classList.contains('modal') || target.classList.contains('modal__btn-closed')) {
        modal.classList.remove('modal--open')
    }
})





// let openBtnIsUnclicked = false
// let closeBtnIsClicked = false

// btnOpen.addEventListener('click', () => {
//     if(btnOpen){
//     modalWindow.style.opacity = '1'
//     modalMain.style.backgroundColor = '#864486c1'
//     openBtnIsUnclicked = false
//     }
//     else {
//     modalWindow.style.opacity = '0'
//     openBtnIsUnclicked = true
//     }
// })

// btnClosed.addEventListener('click', () => {
//     modalWindow.style.opacity = '0'
//     modalMain.style.backgroundColor = '#864486'
//     closeBtnIsClicked = true
// })

