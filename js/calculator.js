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
            key.onClickCallback = this.updateDisplayValueFromCalculatorKeys.bind(this)
        })
        calculatorContainer.appendChild(keysContainer)       
    }

    render() {
        const calculator = document.getElementById(this._containerId)
        this.renderDisplay(calculator)
        this.renderKeys(calculator)
    }

    clearDisplay() {
        this._displayValue = '0'
    }

    cleanLeadingZeroes() {
        // Remove leading zeros from numbers
        this._displayValue = this._displayValue.replace(/(^|\D)0+(\d)/g, '$1$2');
      
        // Remove leading zeros from decimal points
        this._displayValue = this._displayValue.replace(/(^|\D)0+(\.)/g, '$1$2');
      
        // Remove leading zeros from negative numbers
        this._displayValue = this._displayValue.replace(/(^|\D)\-0+(\d)/g, '$1-$2');
      }

    evalOperation() {
        try {
            this._displayValue = String(math.evaluate(this._displayValue))
        } catch (error) {
            console.error(error)
            this._displayValue = 'ERROR'
            this._display.enabled = false
        } 
    }
    
    deleteLastDisplayValueCharacter() {
        // Set a '0' if we are removing last character
        if(this._displayValue.length <= 1) {
            this._displayValue = '0'
        } 
        // Remove last character in display
        if(this._displayValue !== '0') {
            this._displayValue = this._displayValue.substring(0, this._displayValue.length - 1)
        } 
    }

    updateDisplayValueFromKeyboard(event, value) {
        const isEnterKey = (event.keyCode === 13)
        
        if(isEnterKey) {
            this.evalOperation()
        } else {
            this._displayValue = value
        }
        
        this._display.value = this._displayValue      
    }

    updateDisplayValueFromCalculatorKeys(value) {
        if(value === 'CE') {
            this.clearDisplay()
            this._display.enabled = true
        } else if(this._display.enabled) {
            switch(value) {
                case '=':
                    this.evalOperation()
                    break
                case 'DEL':
                    this.deleteLastDisplayValueCharacter()
                    break
                default:
                    this._displayValue += value
                    break
            } 
        }

        this.cleanLeadingZeroes()
        this._display.value = this._displayValue  
    }
}

const calculator = new Calculator('calculator')
calculator.render()