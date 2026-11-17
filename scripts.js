let tg = window.Telegram.WebApp;
tg.expand();

let balance = 1000;
const balanceEl = document.getElementById('balance');
const openCaseBtn = document.getElementById('openCaseBtn');
const resultEl = document.getElementById('result');

openCaseBtn.addEventListener('click', () => {
    if (balance < 100) {
        resultEl.innerText = "Недостаточно средств!";
        return;
    }
    balance -= 100;
    balanceEl.innerText = balance;
    resultEl.innerText = "Открытие хранилища...";
    
    setTimeout(() => {
        const prizes = [
            { name: "Крипто-ключ", reward: 150 },
            { name: "Энерго-кристалл", reward: 300 },
            { name: "Пустой сектор", reward: 0 },
            { name: "Сундук с золотом", reward: 500 }
        ];
        const won = prizes[Math.floor(Math.random() * prizes.length)];
        balance += won.reward;
        balanceEl.innerText = balance;
        
        if (won.reward > 0) {
            resultEl.innerHTML = `🎉 Вы выиграли: <b>${won.name}</b> (+${won.reward} 🪙)!`;
        } else {
            resultEl.innerHTML = `❌ Пустой сектор. Попробуйте еще раз!`;
        }
        if (tg.HapticFeedback) tg.HapticFeedback.notificationOccurred('success');
    }, 1000);
});

function claimBonus() {
    balance += 250;
    balanceEl.innerText = balance;
    resultEl.innerHTML = `🎁 Бонус получен: <b>+250 🪙</b>!`;
    if (tg.HapticFeedback) tg.HapticFeedback.impactOccurred('medium');
}
