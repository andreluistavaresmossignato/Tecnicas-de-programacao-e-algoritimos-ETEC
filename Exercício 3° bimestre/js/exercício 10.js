var n = parseInt(prompt("Informe um número"))
alert("1 = Raiz quadrada  2 = A metade 3 = 10% do número 4 = O dobro 5 = Sucessor 6 = Antecessor ")
var escolha = parseInt(prompt("Escolha o que você quer fazer"))
var resultado

if(escolha == 1){
    resultado = Math.sqrt(n)
    document.write("Resultado: "+ resultado)
}
else if(escolha == 2){
    resultado = n / 2
    document.write("Resultado: "+ resultado)
}
else if(escolha == 3){
    resultado = n / 10
    document.write("Resultado: "+ resultado)
}
else if(escolha == 4){
    resultado = n * 2
    document.write("Resultado: "+ resultado)
}
else if(escolha == 5){
    resultado = n + 1
    document.write("Resultado: "+ resultado)
}
else if(escolha == 6){
    resultado = n - 1
    document.write("Resultado: "+ resultado)
}
else{
    alert("Valor inválido!")
}
