const corPreta = document.getElementById('black-box');
const corRosa = document.getElementById('pink-box');
const corAmarela = document.getElementById('yellow-box');
const corLaranja = document.getElementById('orange-box');
const pixelBoard = document.querySelectorAll('.pixel');

function selecionarCor(event) {
    const selected = document.querySelector('.selected');
    selected.classList.remove('selected');
    event.target.classList.add('selected');    
}

corPreta.addEventListener('click', selecionarCor);
corRosa.addEventListener('click', selecionarCor);
corAmarela.addEventListener('click', selecionarCor);
corLaranja.addEventListener('click', selecionarCor);

function pigmentar(events) {
    const selected = document.querySelector('.selected');
    if (selected === corPreta) {
        events.target.style.backgroundColor = 'black';
    } else if (selected === corRosa) {
        events.target.style.backgroundColor = 'pink';
    } else if (selected === corAmarela) {
        events.target.style.backgroundColor = 'yellow';
    } else if (selected === corLaranja) {
        events.target.style.backgroundColor = 'orange';
    }
}

for (let index = 0; index < pixelBoard.length; index += 1) {
    pixelBoard[index].addEventListener('click', pigmentar);
}


const clearBoard = document.getElementById('clear-board');
clearBoard.addEventListener('click', despigmentar); 

function despigmentar(events) {
const pixelBoard = document.querySelectorAll('.pixel');
for (let index = 0; index < pixelBoard.length; index += 1) {
       pixelBoard[index].style.backgroundColor = 'white';    
    }
}

