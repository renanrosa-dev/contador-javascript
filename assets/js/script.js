var currentNumberWrapper = document.getElementById("currentNumber");
var btnDecrement = document.querySelector("button[name='subtrair']");
var btnIncrement = document.querySelector("button[name='adicionar']");
var currentNumber = 0;

function updateCounter() {
    currentNumberWrapper.innerHTML = currentNumber;

    // Mudar cor para vermelho se for negativo
    currentNumberWrapper.style.color = currentNumber < 0 ? "red" : "black";

    // Desativar botões ao atingir os limites
    btnDecrement.disabled = currentNumber <= -10; // Agora permite números negativos até -10
    btnIncrement.disabled = currentNumber >= 10;
}

function decrement() {
    currentNumber--; // Agora decrementa corretamente de 1 em 1
    updateCounter();
}

function increment() {
    currentNumber++; // Agora incrementa corretamente de 1 em 1
    updateCounter();
}

// Adicionando eventos aos botões
btnDecrement.addEventListener("click", decrement);
btnIncrement.addEventListener("click", increment);

// Atualiza o estado inicial dos botões
updateCounter();
