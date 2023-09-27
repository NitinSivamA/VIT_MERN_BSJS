
function reverseNumber(inputNumber) {
    const numStr = Math.abs(inputNumber).toString();
    const reversedStr = numStr.split('').reverse().join('');
    const reversedNumber = parseFloat(reversedStr);
  
    if (inputNumber < 0) {
      return reversedNumber * -1;
    } else {
      return reversedNumber;
    }
  }
  
  
  const userInput = prompt("Enter a number:");
  const userNumber = parseFloat(userInput);
  
  if (!isNaN(userNumber)) {
    const reversed = reverseNumber(userNumber);
    alert(`Original: ${userNumber}\nReversed: ${reversed}`);
  } else {
    alert("Invalid input. Please enter a valid number.");
  }
  
  