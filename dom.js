const display = document.querySelector("#displayinput");
const operador = document.querySelectorAll(".oper");
const num = document.querySelectorAll(".calc");
const Ponto = document.querySelector(".ponto");
const Igual = document.querySelector(".igual");

let num1 = "";
let num2 = "";
let Operando = "";
let result = "";


function ClearDisplay(){
    display.textContent = "";
}

function AtualizarDisplay(valor){
    display.textContent += valor; 
}

ClearDisplay();

num.forEach((botao) => {
    botao.addEventListener("click", function(){
        AtualizarDisplay(botao.textContent);
    });
})

operador.forEach((botao) => {
    botao.addEventListener("click", function(){
        Operando = botao.textContent;
        if (num1 === ""){
            num1 = display.textContent;
            ClearDisplay();
        }
        else{
            num2 = display.textContent;
            ClearDisplay();
            calcular();
        }
    })
})


function resultado(){
    ClearDisplay();
    num2 = "";
    num1 = result.toString();
    AtualizarDisplay(num1);
    ClearDisplay();
}

function calcular(){
    let operador1 = parseFloat(num1);
    let operador2 = parseFloat(num2);

    switch (Operando) {
        case "+":
            result = operador1 + operador2;
            break;
        case "-":
            result = operador1 - operador2;
            break;
        case "*":
            result = operador1 * operador2; 
            break;
        case "/":
            result = operador2 !== 0 ? operador1 / operador2 : "Erro";
            break;
        default:
            result = "Inválido";
    }
    resultado();
}





