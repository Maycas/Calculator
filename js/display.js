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
        node.addEventListener('keydown', this.preventWrongCharacters.bind(this))
    
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

    preventWrongCharacters(event) {
        // Control input of only numbers and math symbols
        const allowedKeys = [
            8, // backspace
            37, 38, 39, 40, // arrow keys
            48, 49, 50, 51, 52, 53, 54, 55, 56, 57, // digits 0-9
            107, 109, 106, 111, 221, 189, 187, // plus, minus, multiply, divide
            190, // decimal point
            40, 41 // opening and closing parenthesis
        ];

        //TODO: Allow Cmd+R to refresh
        const notAllowedKey = !allowedKeys.includes(event.keyCode)
        const isEqualSign = (event.key == '=')
        
        if(isEqualSign || notAllowedKey) {
            event.preventDefault()
        }
    }
}