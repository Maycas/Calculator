class Display {

    htmlNode = null
    onKeyboardPressCallback = null
    onClickCallback = null

    constructor(displayValue) {
        this.htmlNode = this.createNode('display')
        this.displayValue = displayValue
    }

    createNode(containerId) {
        const node = document.createElement('input')
        node.setAttribute('id', containerId)
        node.setAttribute('type', 'text')

        node.addEventListener('keyup', this.onKeyboardPressed.bind(this))

        node.addEventListener('click', this.onClick.bind(this))

        return node
    }

    getHtmlComponent() {
        return this.htmlNode
    }

    setValue(value) {
        this.displayValue = value
        this.getHtmlComponent().value = value
    }

    getValue() {
        return this.getHtmlComponent().value
    }

    onKeyboardPressed(event) {
        if(this.onKeyboardPressCallback) {
            this.onKeyboardPressCallback(event, this.getValue())
        }
    }

    onClick() {
        if(this.getValue() === '0') {
            this.setValue('')
        }
    }
}