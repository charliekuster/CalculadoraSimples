import {Calculadora, Display, LogicaInterna} from'./calculadora.js'
// Para declarar e instanciar as variáveis

const calculadora = new Calculadora(
    new Display(document.querySelector("#displayinput")), new LogicaInterna(), 
    document.querySelectorAll(".calc"),
    document.querySelectorAll(".oper"),
    document.querySelector(".ponto"),
    document.querySelector(".igual")
);

// Eventos

calculadora.numeros.forEach((botao) => {
    botao.addEventListener("click", function(){
        calculadora.AdicionarNumeroNaCalculadora(botao.textContent);
    });
})

calculadora.operacoes.forEach((botao)=>{
    botao.addEventListener("click", function(){
        calculadora.AdicionarOperacaoNaCalculadora(botao.textContent);
        
    })
})

// let num1 = "";
// let num2 = "";
// let operacao = "";
// let result = "";

// ClearDisplay();



// num.forEach((botao) => {
//     botao.addEventListener("click", function(){
//         AtualizarDisplay(botao.textContent);
//     });
// })

// operador.forEach((botao) => {
//     botao.addEventListener("click", function(){
//         operacao = botao.textContent;
//         if (num1 === ""){
//             num1 = display.textContent;
//             ClearDisplay();
//         }
//         else{
//             num2 = display.textContent;
//             ClearDisplay();
//             calcular();
//         }
//     })
// })


// function resultado(){
//     ClearDisplay();
//     num2 = "";
//     num1 = result.toString();
//     AtualizarDisplay(num1);
//     ClearDisplay();
// }

// function calcular(){
//     let operador1 = parseFloat(num1);
//     let operador2 = parseFloat(num2);

//     switch (operacao) {
//         case "+":
//             result = operador1 + operador2;
//             break;
//         case "-":
//             result = operador1 - operador2;
//             break;
//         case "*":
//             result = operador1 * operador2; 
//             break;
//         case "/":
//             result = operador2 !== 0 ? operador1 / operador2 : "Erro";
//             break;
//         default:
//             result = "Inválido";
//     }
//     resultado();
// }





