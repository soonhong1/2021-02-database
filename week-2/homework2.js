const range = document.getElementById("js-range");
const title = document.querySelector("js-title");
const guessForm = document.getElementById("js-guess");
const result = document.getElementById("js-result");

const handleRangeChange = (e) => {
    const selectedRange = title.querySelector("span");
    selectedRange.innerHTML = range.ariaValueMax;
};

function handleGuessSubmit(e) {
    e.preventDefault();
    const guessInput = guessForm.querySelector("input");
    if (guessInput.value === "") {
        return;
    }
    const max = range.value;
    const random = Math.ceil(Math.random() * max);
    const userGuess = parseInt(guessInput.value, 10);
    const resultspan = result.querySelector("span");
    const span = $('span').remove();
    resultspan.innerHTML = `
    You choose: ${userGuess},
    the machine chose: ${random}.<br/>
    <strong>${userGuess > random ? "You won!" : "You lost!"}</strong>
    `;
}

guessForm.addEventListener("submit", handleGuessSubmit);
range.addEventListener("input", handleRangeChange);