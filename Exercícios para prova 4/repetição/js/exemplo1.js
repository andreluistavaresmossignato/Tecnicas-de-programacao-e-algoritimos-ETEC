//exibindo os números de 1 a 100
for(var n=1; n<= 100; n++){
    document.write(n+"-"+"<br>");
}

document.write("<br><br>");

//exibindo os números de 100 a 1
for (var n=100; n>=1; n--){
    document.write(n+"-"+"<br>")
}

document.write("<br><br>");

//exibindo os números de pares de 0 a 200
for(var x=0; x<=200; x+=2){
    document.write(x+"-"+"<br>");
}

document.write("<br><br>");

//exibindo os números de ímpares de 0 a 101 (começando no 0)
for(var x=0; x<=101; x++){
    if(x % 2 != 0){
        document.write(x+"-"+"<br>")
    }
}