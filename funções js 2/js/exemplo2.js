//função com retorno e com parâmetros
function somar(a,b){
    return a+b;
}

function subtrair(a,b){
    return a-b;
}

function dividir(a,b){
    return a/b;
}

function multiplicar(a,b){
    return a*b;
}

var n1 = parseInt(prompt("Informe um número inteiro"));
var n2 = parseInt(prompt("Informe outro inteiro"));

document.write("A subtração dos número é:"+ subtrair(n1,n2)+"<br>");
document.write("A soma dos números é: "+ somar(n1,n2)+"<br>");
document.write("A divisão dos números é: "+ dividir(n1,n2)+"<br>");
document.write("A multiplicação dos números é: "+ multiplicar(n1,n2));