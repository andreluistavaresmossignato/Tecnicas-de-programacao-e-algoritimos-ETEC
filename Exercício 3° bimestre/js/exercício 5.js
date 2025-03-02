var a = parseFloat(prompt("Informe o lado 1"))
var b = parseFloat(prompt("Informe o lado 2"))
var c = parseFloat(prompt("Informe o lado 3"))

var resultado 

if(a == b == c){
    resultado = "Equilátero"
    document.write("Seu  triângulo é: "+ resultado)
} 
else if (a == b || a == c || b == c ){
    resultado = "Isósceles"
    document.write("Seu triângulo é: "+ resultado)
}
else{
    resultado = "Escaleno"
    document.write("Seu triângulo é: "+ resultado)
}
