class Key {
    constructor(value, className) {
        this._keyValue = value
        this._className = className
        this._html = this.createNode()

        this.onClickCallback = null
    }

    createNode() {
        const node = document.createElement('button')
        node.classList.add(this._className)
        node.innerText = this._keyValue

        node.addEventListener('click', this.onClick.bind(this))

        return node
    }

    get html() {
        return this._html
    }

    get keyValue() {
        return this._keyValue
    }

    onClick() {
        if(this.onClickCallback) {
            this.onClickCallback(this._keyValue)
        }
    }
}