class Display {

    containerId = ''

    constructor(containerId) {
        this.containerId = containerId
    }

    createNode() {
        const display = document.createElement('input')
        display.setAttribute('id', this.containerId)
        display.setAttribute('type', 'text')

        return display
    }

}