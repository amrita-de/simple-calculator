function appendToDisplay(displayValue, value) {
    return displayValue === '0' ? value : displayValue + value;
  }
  
  function clearDisplay() {
    return '0';
  }
  
  function calculate(expression) {
    try {
      return eval(expression).toString();
    } catch (e) {
      return 'Error';
    }
  }
  
  module.exports = { appendToDisplay, clearDisplay, calculate };
  