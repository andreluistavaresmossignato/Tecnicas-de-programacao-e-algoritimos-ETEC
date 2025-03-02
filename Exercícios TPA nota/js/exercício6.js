var somaPositivo
var somaNegativo

for (var i = 0; i <= 20; i++) {
    var numero = parseFloat(prompt("digite um número: " ));

    if (numero > 0){
        somaPositivo == numero;
    }
    else if (numero < 0){
        somaNegativo++;
    }
}

document.write("A soma dos números positivos é: "+ numero +"<br>");
document.write("O total de números negativos é:"+ somaNegativo);