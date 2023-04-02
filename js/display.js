class Display {

    htmlNode = null
    id = 'display'
    displayValue = ''

    constructor() {
        this.htmlNode = this.createNode(this.id)
    }

    createNode(containerId) {
        const node = document.createElement('input')
        node.setAttribute('id', containerId)
        node.setAttribute('type', 'text')

        return node
    }

    getHtmlComponent() {
        return this.htmlNode
    }

    getValue() {
        return this.displayValue
    }

    setValue(value) {
        this.displayValue = value
        this.htmlNode.innerHTML = this.displayValue
    }

}