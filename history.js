document.addEventListener('DOMContentLoaded', () => {
    const historyList = document.getElementById('history-list');
    const backButton = document.getElementById('back');
    const ctx = document.getElementById('history-chart').getContext('2d');

    backButton.addEventListener('click', () => {
        window.location.href = 'index.html';
    });

    const history = JSON.parse(localStorage.getItem('calculatorHistory')) || [];

    history.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.expression} = ${item.result}`;
        historyList.appendChild(li);
    });

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: history.map((_, index) => index + 1),
            datasets: [{
                label: '计算结果',
                data: history.map(item => item.result),
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
});