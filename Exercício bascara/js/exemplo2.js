var nome = prompt("Informe o nome do aluno: ");
var n1 = parseFloat(prompt("Informe a nota 1:"))
var n2 = parseFloat(prompt("Informe a nota 2:"))

var media = (n1+n2)/2
var conceito;
if(media<4){
    conceito = "I";
}
else if(media<6){
    conceito = "R";
}
else if(media<8.5){
    conceito = "B";
}
else{
    conceito = "MB";
}

document.write("Aluno: "+nome+"<br>");
document.write("Média: "+media+"<br>");
document.write("Conceito Final: "+conceito);