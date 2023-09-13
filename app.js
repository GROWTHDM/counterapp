const people = document.getElementById('count-el');
const saveEl = document.getElementById('save-el');
const btn2 = document.getElementById('btn2');


// inicializa o contador como 0.
let count = 0;


//função que aumenta o contador em 1 e modifica o texto do incrementador no html para cada nª que subir.
let increment = () => {
    count++;
    people.textContent = count;
    btn2.onclick = () => {
        let countTwo = count + " - ";
        saveEl.textContent += countTwo;
        count = 0;
        people.textContent = count;
    }
}


