class Key {

    htmlNode = null
    value = 0
    className = ''

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
        console.log(this)
    }


}