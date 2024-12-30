document.getElementById('search-btn').addEventListener('click', function () {
    const query = document.getElementById('search-bar').value.trim();
    fetch('data/recycling_info.json')
        .then(response => response.json())
        .then(data => {
            const result = data.find(item => item.item === query);
            if (result) {
                document.getElementById('app').innerHTML = `
                    <div class="alert alert-success">${result.item}: ${result.info}</div>
                `;
            } else {
                document.getElementById('app').innerHTML = `
                    <div class="alert alert-danger">검색 결과가 없습니다.</div>
                `;
            }
        });
});

let score = 0;

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        const isCorrect = button.getAttribute('data-correct') === 'true';
        if (isCorrect) {
            score += 10;
            alert('정답입니다!');
        } else {
            alert('틀렸습니다!');
        }
        document.getElementById('score-board').textContent = `현재 점수: ${score}`;
    });
});