import './styles/game.scss'
import { GameMemory } from './js/gameMemory'

let game
const gameSettings = {
    listImages: ['image_1','image_2','image_3','image_4','image_5','image_6','image_7','image_8']
}

window.addEventListener('load', () => {
    game = new GameMemory(gameSettings)
})

window.addEventListener('resize', () => {
    game.resizeBlocks()
})
