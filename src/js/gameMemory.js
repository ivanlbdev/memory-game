export class GameMemory {
    #currentChoice = []
    #findValues = []
    #lock = 0
    luckClick = 0
    badClick = 0

    constructor(settings) {
        this.countItemsInRow = settings.countItemsInRow || 4
        this.marginBlocks = settings.marginBlocks || 10
        this.baseClass = settings.baseClass || 'game'
        this.classItem = `${settings.baseClass}__item` || 'game__item'
        this.frontClass = `${settings.baseClass}__front` || 'game__front'
        this.backClass = `${settings.baseClass}__back` || 'game__back'
        this.winClass = `${settings.baseClass}__win` || 'game__win'
        this.values = this.#shakeArrayAndMulti(settings.listImages) || []
        this.blockGame = document.querySelector(`.${settings.baseClass}__container`)
        this.parentNodeGame = document.querySelector(`.${settings.baseClass}`)
        this.headerGame = document.querySelector(`.${settings.baseClass}__header`) || 0
        this.#makeGame()
        this.nodesItems = this.blockGame.querySelectorAll(`.${this.classItem}`)
        this.#clickHandler()
    }

    #shakeArrayAndMulti(arr) {
        return [...arr, ...arr].sort(() => Math.random() - 0.5)
    }

    #checkSize() {
        const workWidth = this.parentNodeGame.offsetWidth
        const workHeight = this.parentNodeGame.offsetHeight - (this.headerGame?.offsetHeight || 0)

        const base = workHeight > workWidth ? workWidth : workHeight
        const result = Math.floor(base / this.countItemsInRow - this.marginBlocks * this.countItemsInRow - 1)
        return {
            card: result,
            container: result * this.countItemsInRow + this.countItemsInRow * this.marginBlocks
        }
    }

    #makeElem(element, className = '', inner = [], nodes = [], style = []) {
        const elem = document.createElement(element)
        elem.className = className
        let content = ''
        inner.map(item => content += item)
        elem.innerHTML = inner
        nodes.map(item => elem.append(item))
        return elem
    }

    #makeGame() {
        const sizes = this.#checkSize()
        const itemSize = sizes.card
        this.blockGame.style.width = `${sizes.container}px`

        this.values.map((item) => {
            const backButtonItem = this.#makeElem('div', this.backClass, [`<img src="./images/${item}.jpg">`])
            const frontButtonItem = this.#makeElem('div', this.frontClass, [`<svg class="a-logo" width="${Math.floor(itemSize*0.6)}px" height="${Math.floor(itemSize*0.2)}px"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo" /> </svg> <svg class="a-logo-quest" height="${Math.floor(itemSize*0.4)}px" width="${Math.floor(itemSize*0.1)}px"> <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#logo-quest" /> </svg>`])
            const buttonItem = this.#makeElem('div',this.classItem, [], [frontButtonItem, backButtonItem])
            buttonItem.classList.add(this.classItem + '-open')
            buttonItem.style.height = `${itemSize}px`
            buttonItem.style.width = `${itemSize}px`

            buttonItem.setAttribute('data-value', item)

            this.blockGame.append(buttonItem)

            setTimeout(() => {
                buttonItem.classList.remove( `${this.classItem}-open`)
            }, 3000)
        })
    }

    resizeBlocks() {
        const sizes = this.#checkSize()
        const itemSize = sizes.card
        this.blockGame.style.width = `${sizes.container}px`

        for (let item of this.nodesItems) {
            item.style.height = `${itemSize}px`
            item.style.width = `${itemSize}px`
            item.querySelector('.a-logo').setAttribute('width', `${Math.floor(itemSize*0.6)}px`)
            item.querySelector('.a-logo').setAttribute('height', `${Math.floor(itemSize*0.2)}px`)
            item.querySelector('.a-logo-quest').setAttribute('width', `${Math.floor(itemSize*0.1)}px`)
            item.querySelector('.a-logo-quest').setAttribute('height', `${Math.floor(itemSize*0.4)}px`)
        }
    }

    #clickHandler() {
        for (let node of this.nodesItems) {
            node.addEventListener('click', (event) => {
                this.#clickElem(event.currentTarget)
            })
        }
    }

    #clickElem(elem) {
        !this.#lock && this.#openItem(elem);
    }

    #openItem(elem) {
        console.log(elem.classList.contains(this.classItem + '-open'))
        if (!elem.classList.contains(`${this.classItem}-open`)) {
            const value = elem.getAttribute('data-value')
            elem.classList.add(`${this.classItem}-open`)
            this.#currentChoice.push(value)
            this.#currentChoice.length === 2 ? this.#checkCurrentValues() : 0
        }
    }

    #closeItems() {
        for (let node of this.nodesItems) {
            const value = node.getAttribute('data-value')
            !this.#findValues.includes(value) && node.classList.contains(`${this.classItem}-open`)
                ? node.classList.remove(`${this.classItem}-open`)
                : 0
        }
    }

    #checkCurrentValues() {
        this.#currentChoice[0] === this.#currentChoice[1] && !this.#findValues.includes(this.#currentChoice[0])
            ? this.#isWinAndPush(this.#currentChoice[0])
            : this.#lockItems()
        this.#currentChoice = []
    }

    #lockItems() {
        this.badClick += 1
        this.#lock = 1
        setTimeout(() => {
            this.#closeItems()
            this.#lock = 0
        }, 1000)
    }

    #isWinAndPush(value) {
        this.#findValues.push(value)
        this.luckClick += 1
        if (this.#findValues.length === 8) {
            console.log({
                'Удачные попытки': this.luckClick,
                'Неудачные попытки': this.badClick
            })
        }
        this.#findValues.length === 8 ? this.#renderWin() : 0
    }

    #renderWin() {
        const header = this.#makeElem('p', `${this.winClass}-big`, ['Ура! Ты выиграл'])
        const image = this.#makeElem('img')
        image.setAttribute('src', './images/win.png')
        const textHref = this.#makeElem('a', '',  ['Скачать стикерпак'])
        const container = this.#makeElem('div', `${this.winClass}`, [], [header, image, textHref])

        window.scrollTo(0, 0)
        this.parentNodeGame.innerHTML = ''
        this.parentNodeGame.append(container)
        document.body.style.overflow = 'hidden'
    }

}