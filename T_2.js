
function sortStringAlphabetically(inputString) {
    
    const charArray = inputString.split('');
  
  
    const sortedArray = charArray.sort();
  
    
    const sortedString = sortedArray.join('');
  
    return sortedString;
  }
  
  
  const userInput = prompt("Enter a string:");
  if (userInput !== null) {
    const sortedResult = sortStringAlphabetically(userInput);
    alert(`Original: ${userInput}\nAlphabetically Sorted: ${sortedResult}`);
  } else {
    alert("No input provided.");
  }
  