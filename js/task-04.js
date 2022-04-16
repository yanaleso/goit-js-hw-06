let counterValue = 0;

const decrementBtn = document.querySelector('[data-action="decrement"]');
const value = document.querySelector('#value');
const incrementBtn = document.querySelector('[data-action="increment"]');

decrementBtn.addEventListener('click', () => {
    counterValue -= 1;
    return value.textContent = counterValue;
});

incrementBtn.addEventListener('click', () => {
    counterValue += 1;
    return value.textContent = counterValue;
});