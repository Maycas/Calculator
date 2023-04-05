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
        this._containerId = containerId
        this._display = new Display()
        this._displayValue = '0'
        this.keys = this.keys.map(key => new Key(key.value, key.className))
    }

    renderDisplay(calculatorContainer) {
        this._display.value = this._displayValue
        this._display.onKeyboardPressedCallback = this.updateDisplayValueFromKeyboard.bind(this)
        calculatorContainer.appendChild(this._display.html)
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
        const calculator = document.getElementById(this._containerId)
        this.renderDisplay(calculator)
        this.renderKeys(calculator)
    }

    evalOperation() {
        try {
            this._displayValue
            this._displayValue = String(eval(this._displayValue))
        } catch (error) {
            this._displayValue = 'ERROR'
        } 
    }

    clearDisplay() {
        this._displayValue = '0'
    }
    
    deleteLastDisplayValueCharacter() {
        // Set a '0' if we are removing last character
        if(this._displayValue.length < 1) {
            this._displayValue = '0'
        } 
        // Remove last character in display
        if(this._displayValue !== '0') {
            this._displayValue = this._displayValue.substring(0, this._displayValue.length - 1)
        } 
    }

    updateDisplayValueFromKeyboard(event, value) {

        this._displayValue = value      
        // TODO Manage to block calculator input if error is displayed
    }

    updateDisplayValueFromCalculatorKeys(value) {
        // Clean display for leading 0s
        // if(this._displayValue[0] === '0') {
        //     this._displayValue = this._displayValue.replace(/^0+/, '');
        // }
        // console.log(this._displayValue)
        
        // if(this._displayValue === '0') {
        //     //TODO improve to detect if we are adding a number or an operator. Maybe I want to divide 0 by a number
        //     this._displayValue = ''
        // }

        //TODO Manage to block calculator input if error is displayed
        switch(value) {
            case '=':
                this.evalOperation()
                break
            case 'CE':
                this.clearDisplay()
                break
            case 'DEL':
                this.deleteLastDisplayValueCharacter()
                break
            default:
                this._displayValue += value
                break
        }
    }

    setDisplayValue(value) {
        this.updateDisplayValueFromCalculatorKeys(value)
        this._display.value = this._displayValue
    }
}

const calculator = new Calculator('calculator')
calculator.render()