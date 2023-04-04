class Display {

    htmlNode = null

    constructor(displayValue) {
        this.htmlNode = this.createNode('display')
        this.displayValue = displayValue
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

    setValue(value) {
        this.getHtmlComponent().value = value
    }
}