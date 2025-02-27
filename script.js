// Function to append values to the display
function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    // Prevent multiple decimal points in the same number
    if (value === '.' && display.value.includes('.')) {
        return;
    }
    
    display.value += value;
}

// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.value = '';
}

// Function to evaluate the expression safely
function calculate() {
    const display = document.getElementById('display');
    try {
        // Replace any non-mathematical symbols that could cause errors
        let result = display.value.replace(/[^-()\d/*+.]/g, ''); // Allow only numbers, operators, and parentheses
        
        // Evaluate the expression and update the display with the result
        result = Function('return ' + result)(); // Safely evaluate the expression
        
        // If the result is a number, show it. Otherwise, show "Error"
        display.value = isNaN(result) ? 'Error' : result;
    } catch (error) {
        display.value = 'Error';
    }
}
