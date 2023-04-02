class Calculator {

    containerId = ''
    keys = [
        {
            value: 7,
            className: 'number'
        },
        {
            value: 8,
            className: 'number'
        },
        {
            value: 9,
            className: 'number'
        },
        {
            value: '+',
            className: 'operator'
        },
        {
            value: '-',
            className: 'operator'
        },
        {
            value: 4,
            className: 'number'
        },
        {
            value: 5,
            className: 'number'
        },
        {
            value: 6,
            className: 'number'
        },
        {
            value: '*',
            className: 'operator'
        },
        {
            value: '/',
            className: 'operator'
        },
        {
            value: 1,
            className: 'number'
        },
        {
            value: 2,
            className: 'number'
        },
        {
            value: 3,
            className: 'number'
        },
        {
            value: 'DEL',
            className: 'action'
        },
        {
            value: 'CE',
            className: 'action'
        },
        {
            value: 0,
            className: 'number'
        },
        {
            value: 00,
            className: 'number'
        },
        {
            value: '.',
            className: 'number'
        },
        {
            value: '=',
            className: 'equal'
        },
        
    ]

    constructor(containerId) {
        this.containerId = containerId
        this.keys = this.keys.map(key => new Key(key.value, key.className))
    }

    renderDisplay(calculatorContainer) {
        const display = new Display('display')
        calculatorContainer.appendChild(display.createNode())
        return display
    }

    renderKeys(calculatorContainer) {
        const keysContainer = document.createElement('div')
        keysContainer.setAttribute('id', 'keys')
        this.keys.map(key => {
            keysContainer.appendChild(key.createNode())
        })
        calculatorContainer.appendChild(keysContainer)       
    }

    render() {
        const calculator = document.getElementById(this.containerId)

        // Render display
        this.renderDisplay(calculator)

        // Render keys
        this.renderKeys(calculator)

        // Capture elements events
        calculator.addEventListener('click', (event) => {
            console.log(event.target.innerText || event.target.value)
        })
    }
}

const calculator = new Calculator('calculator')
calculator.render()