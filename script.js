
const startText = document.querySelector('.startText');
const infoContainer = document.querySelector('.infoContainer');
const code = document.querySelector('.code');
const key = document.querySelector('.key');
const keyCode = document.querySelector('.keyCode');


document.addEventListener('keydown', e => {
    startText.textContent = 'You Pressed'
    key.textContent = e.key;
    keyCode.textContent = e.keyCode;
    code.textContent = e.code;
    infoContainer.style.display = 'flex';
})