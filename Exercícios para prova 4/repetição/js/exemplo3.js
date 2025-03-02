//exibindo a tabuada de 0 10 10 do número
//informado para o usuário

var num = parseInt(prompt("Informe o número para calcular a sua tabuada:"));

for(var i=0; i<=10; i++){
    document.write(num + " X " + i + " = " + i*num + "<br>")
}