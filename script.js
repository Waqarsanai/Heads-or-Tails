document.addEventListener('DOMContentLoaded', function () {
    const headsBtn = document.getElementById('headsBtn');
    const tailsBtn = document.getElementById('tailsBtn');
    const result = document.getElementById('result');

    headsBtn.addEventListener('click', function () {
        playGame('heads');
    });

    tailsBtn.addEventListener('click', function () {
        playGame('tails');
    });

    function playGame(userChoice) {
        const coinFlip = Math.random() < 0.5 ? 'heads' : 'tails';

        if (userChoice === coinFlip) {
            result.textContent = `Congratulations! It's ${coinFlip}. You win!`;
        } else {
            result.textContent = `Sorry, it's ${coinFlip}. You lose. Better luck next time!`;
        }

        result.style.display = 'block';
    }
});
