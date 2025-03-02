var acumulador = 0;
var nota = 0.0;
var media = 0.0;
const numMediaaluno = 4
var contador = 0;

for(var i = 0; i<numMediaaluno; i++){
    contador++;
    nota = parseFloat(prompt("Informe a nota do aluno "+contador+" :"));
    acumulador = acumulador + nota;
}

media = acumulador /numMediaaluno;
document.write("A média da turma é: "+media);