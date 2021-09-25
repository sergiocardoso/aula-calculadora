/**
 * Definicao de Variaveis
 */

// special elements
const result = document.getElementById("calc-result");
const btnEqual = document.getElementById("btnEqual");
const btnAC = document.getElementById("btnAC");

// buttons
const buttons = document.getElementsByClassName("btn");

/**
 * Lógica da Calculadora
 */
let value1 = 0;
let operator = null;
let finish = false;
const limite = 10;

// loop de evento click button
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", () => {
    //verifica se o limitador não foi atingido
    if (result.innerHTML.length < limite) {
      // verifica se o numero clicado é um numero
      if (buttons[i].className.includes("button_numbers")) {
        // reseta o visor de result
        if (finish == true) {
          result.innerHTML = "";
          finish = false;
        }

        if (result.innerHTML == "0") {
          result.innerHTML = buttons[i].innerHTML;
        } else {
          result.innerHTML += buttons[i].innerHTML;
        }
      }
    }

    // verifica se o numero clicado é um operador matemático
    if (buttons[i].className.includes("btnOperador")) {
      // salva o primeiro valor e zera o result innerHTML
      value1 = parseInt(result.innerHTML);
      result.innerHTML = "0";

      operator = buttons[i].innerHTML;
    }
  });
}

// evento de click do botao igual
btnEqual.addEventListener("click", () => {
  finish = true;
  const value2 = parseInt(result.innerHTML);
  let resultCount = 0;

  // multiplicacao
  if (operator == "×") {
    resultCount = value1 * value2;
  }

  // divisao
  if (operator == "÷") {
    resultCount = value1 / value2;
  }

  // soma
  if (operator == "+") {
    resultCount = value1 + value2;
  }

  // subtracao
  if (operator == "-") {
    resultCount = value1 - value2;
  }

  result.innerHTML = resultCount;
});

btnAC.addEventListener("click", () => {
  finish = false;
  result.innerHTML = "0";
  value1 = 0;
});
