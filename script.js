document.addEventListener('DOMContentLoaded', () => {
    const expressionInput = document.getElementById('expression');
    const calculateButton = document.getElementById('calculate');
    const resultDiv = document.getElementById('result');
    const historyButton = document.getElementById('history');

    calculateButton.addEventListener('click', () => {
        const expression = expressionInput.value;
        try {
            const result = eval(expression);
            resultDiv.textContent = `结果：${result}`;
            resultDiv.style.color = 'black';
            saveToHistory(expression, result);
        } catch (error) {
            resultDiv.textContent = '输入无效';
            resultDiv.style.color = 'red';
        }
    });

    historyButton.addEventListener('click', () => {
        window.location.href = 'history.html';
    });

    function saveToHistory(expression, result) {
        let history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];
        history.push({ expression, result });
        localStorage.setItem('calculatorHistory', JSON.stringify(history));
    }
});