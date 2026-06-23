//Seleções de elementos

const multiplicationForm = document.querySelector("#multiplication-form")
const numberInput = document.querySelector("#number")
const multiplicationInput = document.querySelector("#multiplicator")
const multiplicationTitle = document.querySelector("#multiplication-title span")
const multiplicationTable = document.querySelector("#multiplicator-operations")

//Funções

const createTable = (number, multiplicatorNumber) => {

    multiplicationTable.innerHTML = " ";

    for (i = 1; i <= multiplicatorNumber; i++) {
        const result = number * i;

        const templateHTML = `<div class= "row">
        <div class = "operation"> ${number} x ${i} = </div>
        <div class = "result"> ${result} </div>
        </div>`;

        //este objeto recebe todo o template HTML criado na const acima
        const parser = new DOMParser();

        //varíavel recebe os dados do objeto parser e insere todo o template no HTML
        const htmlTemplate = parser.parseFromString(templateHTML, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerText = number;
}

//Eventos
multiplicationForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // recebe e aloca em uma variável o número que se deseja construir a tabuada
    const multiplicationNumber = +numberInput.value;

    //recebe e aloca em uma variável o número 10
    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) return;

    createTable(multiplicationNumber, multiplicatorNumber)

});
