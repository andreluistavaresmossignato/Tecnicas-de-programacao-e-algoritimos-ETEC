var peso = parseFloat(prompt("Informe seu peso"));
var altura = parseFloat(prompt("Informe sua altura"));

var imc = peso / (Math.pow(altura,2));
var mensagem; 

if(imc<20){
    mensagem = "Abaixo do peso";
}
else if(imc<25){
    mensagem = "Peso ideal";
}
else{
    mensagem = "Acima do peso";
}
document.write("Valor do IMC: "+imc+"<br>");
document.write("Resultado: "+mensagem);