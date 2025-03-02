var n1 = parseFloat(prompt("Nota 1: "));
var n2 = parseFloat(prompt("Nota 2: "));

var media = (n1 + n2) / 2;
var mensagem;



if(media < 7){
    mensagem = "Reprovado";
}
else if(media >= 7 && media <10){
    mensagem = "Aprovado";
}
else if(media = 10){
    mensagem = "Aprovado com Distinção";
}
document.write("Média: "+media+"<br>");
document.write("Estado: "+mensagem+"<br>");