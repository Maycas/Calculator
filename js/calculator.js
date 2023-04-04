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
            value: '00',
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
    display = null
    displayValue = '0'

    constructor(containerId) {
        this.containerId = containerId
        this.display = new Display(this.displayValue)
        this.keys = this.keys.map(key => new Key(key.value, key.className))
    }

    renderDisplay(calculatorContainer) {
        this.display.setValue(this.displayValue)
        calculatorContainer.appendChild(this.display.getHtmlComponent())

    }

    renderKeys(calculatorContainer) {
        const keysContainer = document.createElement('div')
        keysContainer.setAttribute('id', 'keys')
        this.keys.map(key => {
            keysContainer.appendChild(key.getHtmlComponent())
            key.onClickCallback = this.setDisplayValue.bind(this)
        })
        calculatorContainer.appendChild(keysContainer)       
    }

    render() {
        const calculator = document.getElementById(this.containerId)
        this.renderDisplay(calculator)
        this.renderKeys(calculator)
    }

    performOperation(value) {
        // Clean display for the first leading '0'
        if(this.displayValue === '0') {
            this.displayValue = ''
        }

        console.log('Before', this.displayValue)

        switch(value) {
            case '=':
                this.displayValue = String(eval(this.displayValue))
                break
            case 'CE':
                this.displayValue = '0'
                break
            case 'DEL':
                // Set a '0' if we are removing last character
                if(this.displayValue.length <= 1) {
                    this.displayValue = '0'
                } 
                // Remove last character in display
                if(this.displayValue !== '0') {
                    this.displayValue = this.displayValue.substring(0, this.displayValue.length - 1)
                } 
                break
            default:
                this.displayValue += value
                break
        }
        
        console.log('After', this.displayValue)
    }

    setDisplayValue(value) {
        this.performOperation(value)
        this.display.setValue(this.displayValue)
    }
}

const calculator = new Calculator('calculator')
calculator.render()