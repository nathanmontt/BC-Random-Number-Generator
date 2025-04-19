const random01 = document.getElementById('random01');
const btnRandom01 = document.getElementById('btn-random-01');

btnRandom01.onclick = function () {
    random01.textContent = Math.round(Math.random() * 100) + 1;
}