class Key {

    value = ''
    type = ''

    constructor(value, type) {
        this.value = value
        this.type = type
    }

    createNode() {
        const node = document.createElement('button')
        node.classList.add(this.type)
        node.innerText = this.value

        return node
    }
}