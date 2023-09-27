<!DOCTYPE html>
<html>
<head>
    <title>Multiply and Divide</title>
</head>
<body>
    <label for="firstNumber">Enter 1st Number:</label>
    <input type="number" id="firstNumber" placeholder="Enter first number">
    <br>
    <label for="secondNumber">Enter 2nd Number:</label>
    <input type="number" id="secondNumber" placeholder="Enter second number">
    <br>
    <button id="multiplyBtn">Multiply</button>
    <button id="divideBtn">Divide</button>
    <br>
    <p id="result"></p>

    <script>
        // Function to perform multiplication
        function multiply() {
            const firstNumber = parseFloat(document.getElementById("firstNumber").value);
            const secondNumber = parseFloat(document.getElementById("secondNumber").value);
            const result = firstNumber * secondNumber;
            document.getElementById("result").textContent = `Result: ${result}`;
        }

        // Function to perform division
        function divide() {
            const firstNumber = parseFloat(document.getElementById("firstNumber").value);
            const secondNumber = parseFloat(document.getElementById("secondNumber").value);
            
            if (secondNumber === 0) {
                document.getElementById("result").textContent = "Cannot divide by zero";
            } else {
                const result = firstNumber / secondNumber;
                document.getElementById("result").textContent = `Result: ${result}`;
            }
        }

        // Attach event listeners to the buttons
        document.getElementById("multiplyBtn").addEventListener("click", multiply);
        document.getElementById("divideBtn").addEventListener("click", divide);
    </script>
</body>
</html>
