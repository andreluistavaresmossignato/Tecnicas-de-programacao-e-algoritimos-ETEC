var acumulador = 0;
var nota = 0.0;
var media = 0.0;

for(var i = 0; i<40; i++){
    nota = parseFloat(prompt("Informe a nota do aluno"));
    acumulador = acumulador + nota
}

media = acumulador / 40
document.write("A média da turma é: "+media)