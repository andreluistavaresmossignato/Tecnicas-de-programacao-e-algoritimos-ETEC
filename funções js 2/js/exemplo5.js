function calcularAreaRetangulo(larg,alt){
    return larg*alt;
}

var largura = parseFloat(prompt("informe a largura do retângulo"));
var altura = parseFloat(prompt("informe a altura do retângulo"));
var resultado =calcularAreaRetangulo(largura,altura)
document.write("A área do retângulo é: "+resultado);