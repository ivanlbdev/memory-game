export class PopUp {
    constructor(settings) {
        this.baseClass = settings.baseClass
        this.innerTag = settings.innerElem?.tag || 'div'
        this.innerTagClass = settings.innerElem?.class || ''
        this.innerTagAtr = settings.innerElem?.attributes || []
        this.makePopUp()
        this.closeEvent()
    }

    makePopUp() {
        const container = document.createElement('div')
        container.className = this.baseClass

        const content = document.createElement('div')
        content.className = `${this.baseClass}__content`

        const closer = document.createElement('div')
        closer.className = `${this.baseClass}__close`
        closer.innerHTML = '<svg class="a-cross"><use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#cross" /></svg>'

        const frame = document.createElement(this.innerTag)
        frame.className = this.innerTagClass
        this.innerTagAtr.map((item) => {
            frame.setAttribute(item.name, item.value)
        })

        content.append(closer)
        content.append(frame)
        container.append(content)

        document.body.append(container)

    }

    closeEvent() {
        const block = document.querySelector(`.${this.baseClass}`)
        const closer = block.querySelector(`.${this.baseClass}__close`)
        closer.addEventListener(('click'), () => {
            this.destroyPopUp()
        })
    }

    destroyPopUp() {
        document.querySelector(`.${this.baseClass}`).remove()
    }
}