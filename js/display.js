class Display {
    constructor() {
        this._html = this.createNode('display')
        this.onKeyboardPressCallback = null
        this.onClickCallback = null
    }

    createNode(containerId) {
        const node = document.createElement('input')
        node.setAttribute('id', containerId)
        node.setAttribute('type', 'text')

        node.addEventListener('keyup', this.onKeyboardPressed.bind(this))
        node.addEventListener('click', this.onClick.bind(this))

        return node
    }

    get html() {
        return this._html
    }

    get displayValue() {
        return this._html.value
    }

    set displayValue(value) {
        this._html.value = value
    }

    onKeyboardPressed(event) {
        if(this.onKeyboardPressCallback) {
            this.onKeyboardPressCallback(event, this.displayValue)
        }
    }

    onClick() {
        if(this.displayValue === '0') {
            this.displayValue = ''
        }
    }
}