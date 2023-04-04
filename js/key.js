class Key {

    htmlNode = null
    className = ''
    value = 0

    onClickCallback = null

    constructor(value, className) {
        this.value = value
        this.className = className
        this.htmlNode = this.createNode()
    }

    createNode() {
        const node = document.createElement('button')
        node.classList.add(this.className)
        node.innerText = this.value

        node.addEventListener('click', this.onClick.bind(this))

        return node
    }

    getHtmlComponent() {
        return this.htmlNode
    }

    getValue() {
        return this.value
    }

    onClick() {
        if(this.onClickCallback) {
            this.onClickCallback(this.getValue())
        }
    }
}