class Display {

    htmlNode = null
    id = 'display'

    constructor(displayValue) {
        this.htmlNode = this.createNode(this.id)
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