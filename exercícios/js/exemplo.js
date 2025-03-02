var num = parseInt(Math.random()*10);
var numDigitado = 0;
var numTentativas = 0;

do{
    numDigitado = parseInt(prompt("Qual é o número?"));

    if(numDigitado == num){
        alert("Parabéns, você ganhou!");
    }
    else if(num > numDigitado){
        alert("O número é maior!");
    }
    else{
        alert("O número é menor!");
    }
numTentativas++
}while(num != numDigitado);

document.write("Você acertou em "+numTentativas+" tentativas");