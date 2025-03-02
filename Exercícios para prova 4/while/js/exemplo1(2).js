var i = 1;
var contaPar = 0;
var contaImpar = 0;

while(i <=500){

    if(i % 5 == 0){
        document.write(i+ "<br>");

        if(i % 2 == 0){
            contaPar++;
        }
        else{
            contaImpar++;
        }
    }

    i++;
}
document.write("Total de números pares: "+contaPar+"<br>");
document.write("Total de números ímpares: "+contaImpar);