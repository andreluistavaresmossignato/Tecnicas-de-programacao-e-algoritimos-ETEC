var a = parseFloat(prompt("Informe o valor de a:"));
var b = parseFloat(prompt("Informe o valor de b"));
var c = parseFloat(prompt("Informe o valor de c"));

var delta = Math.pow(b,2) - (4 * a * c);
var x1 = -b + Math.sqrt(delta) / (2 * a);
var x2 = -b - Math.sqrt(delta) / (2 * a);

if (delta<0){
    document.write("Delta: "+delta+"<br>")
    document.write("Valor de x1 e x2: "+x1+"<br>")
}
else if(delta==0){
    document.write("Delta: "+delta+"<br>")
    document.write("Valor de x1 e x2: "+x1+"<br>")  
}
else{
    document.write("Delta: "+delta+"<br>")
    document.write("Valor de x1: "+x1+"<br>")
    document.write("Valor de x2: "+x2+"<br>")
}