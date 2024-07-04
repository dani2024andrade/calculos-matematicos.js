let name = prompt("Qual o seu nome?")
alert(`Olá ${name}, vamos para os cálculos matemáticos:`)

let numberOne = prompt("Digite o primeiro número: ")
let numberTwo = prompt("Digite o segundo número: ")

numberOne = Number(numberOne)
numberTwo = Number(numberTwo)

const sum = numberOne + numberTwo
const sub = numberOne - numberTwo
const mult = numberOne * numberTwo
const div = numberOne / numberTwo
const restdiv = numberOne % numberTwo
const parImpar = sum % 2


alert(`O resultado da soma é :${sum}`)
alert(`O resultado da subtração é:  ${sub}`)
alert(`O resultado da multiplicação é:  ${mult}`)
alert(`O resultado da divisão é:  ${div}`)
alert(`O resultado da resto da divisão é:  ${restdiv}`)


if(parImpar == 0) {
 alert(`A soma dos dois números é par: ${sum}`)
}
else {
  alert(`A soma do dois número é impar: ${sum}`)
}

if (numberOne == numberTwo) {
  alert("Os dois números são iguais")
}
else {
 alert ("Os dois números são diferentes")
}