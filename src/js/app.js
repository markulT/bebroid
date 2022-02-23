import * as flsFunctions from './modules/functions.js'
import Swiper, { Navigation, Pagination } from 'swiper'
import bootstrap from 'bootstrap'


console.log('Gulp works')
flsFunctions.isWebp();

// Shit legacy code

// Hover menu
// const menuElements = document.querySelectorAll('.header__element-title')
// menuElements.forEach(elem => {
//     elem.addEventListener('pointerover', (e) => {
//         let hoveredElement = e.target
//         console.log(hoveredElement.nextElementSibling)
//     })
//     elem.addEventListener('onpointerout', (e) => {
//         let unHoveredElement = e.target
//         console.log(unHoveredElement.nextElementSibling)
//     })
// })