class Calculator {

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

    constructor(containerId) {
        this.containerId = containerId
        this.display = new Display()
        this.displayValue = '0'
        this.keys = this.keys.map(key => new Key(key.value, key.className))

    }

    renderDisplay(calculatorContainer) {
        this.display.displayValue = this.displayValue
        this.display.onKeyboardPressCallback = this.updateDisplayValueFromKeyboard.bind(this)
        calculatorContainer.appendChild(this.display.html)

        //console.log(this.display)
    }

    renderKeys(calculatorContainer) {
        const keysContainer = document.createElement('div')
        keysContainer.setAttribute('id', 'keys')
        this.keys.map(key => {
            keysContainer.appendChild(key.html)
            key.onClickCallback = this.setDisplayValue.bind(this)
        })
        calculatorContainer.appendChild(keysContainer)       
    }

    render() {
        const calculator = document.getElementById(this.containerId)
        this.renderDisplay(calculator)
        this.renderKeys(calculator)
    }

    updateDisplayValueFromKeyboard(event, value) {
        // TODO control input of letters
        // TODO Manage to block calculator input if error is displayed
        this.displayValue = value
        console.log(event)
    }

    updateDisplayValueFromCalculatorKeys(value) {
        // Clean display for the first leading '0'
        if(this.displayValue === '0') {
            //TODO improve to detect if we are adding a number or an operator. Maybe I want to divide 0 by a number
            this.displayValue = ''
        }

        //TODO Manage to block calculator input if error is displayed

        switch(value) {
            case '=':
                try {
                    this.displayValue = String(eval(this.displayValue))
                } catch (error) {
                    this.displayValue = 'ERROR'
                } 
                break
            case 'CE':
                this.displayValue = '0'
                break
            case 'DEL':
                // Set a '0' if we are removing last character
                if(this.displayValue.length < 1) {
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
    }

    setDisplayValue(value) {
        this.updateDisplayValueFromCalculatorKeys(value)
        this.display.displayValue = this.displayValue
    }
}

const calculator = new Calculator('calculator')
calculator.render()