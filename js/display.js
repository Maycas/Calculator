class Display {
    constructor() {
        this._html = this.createNode('display')
        
        this.onKeyboardPressedCallback = null
    }

    createNode(containerId) {
        const node = document.createElement('input')
        node.setAttribute('id', containerId)
        node.setAttribute('type', 'text')

        node.addEventListener('keyup', this.onKeyboardPressed.bind(this))
    
        return node
    }

    get html() {
        return this._html
    }

    get value() {
        return this._html.value
    }

    set value(value) {
        this._html.value = value
    }

    onKeyboardPressed(event) {
        if(this.onKeyboardPressedCallback) {
            this.onKeyboardPressedCallback(event, this.value)
        }
    }
}