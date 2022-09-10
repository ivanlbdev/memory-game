import { PopUp } from "./popUp";

const popUpData = {
    baseClass: 'pop-window',
    innerElem: {
        tag: 'iframe',
        class: 'game-frame',
        attributes: [
            {
                name: 'src',
                value: 'game.html'
            }
        ],
    }
}

window.addEventListener('load', () => {
    document.querySelector('.a-button-large__button').addEventListener(('click'), () => {
        const pop = new PopUp(popUpData)
    })
})