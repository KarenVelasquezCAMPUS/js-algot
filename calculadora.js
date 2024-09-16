// suma básica con js
function suma() {
  resultado = 5 + 6;
  console.log(resultado);
}

suma();

// resta básica con js
function resta() {
  resultado = 5 - 6;
  console.log(resultado);
}

resta();

// multiplicacion básica con js
function multiplicacion() {
  resultado = 5 * 6;
  console.log(resultado);
}

multiplicacion();

// division básica con js
function division() {
  resultado = 5 / 6;
  console.log(resultado);
}

division();

// Calculadora en node.js
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculadora(num1, operador, num2) {
  let resultado;
  switch (operador) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      resultado = num1 / num2;
      break;
  }
  console.log(resultado);
  rl.close();
}

rl.question("Ingrese el primer número: ", (num1) => {
  rl.question("Elija operador: +, -, *, /: ", (operador) => {
    rl.question("Ingrese el segundo número: ", (num2) => {
      calculadora(parseInt(num1), operador, parseInt(num2));
    });
  });
});
