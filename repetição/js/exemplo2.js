//exibindo os numeros pares de  a 200
for(var x=0; x<=200; x+=2){
    document.write(x+"<br>");
}

document.write("<br><br>")

//exibindo os números ímpares de 1 a 100, porém x iniciando em 0
for(var x=0; x<= 101; x++){
    if(x % 2 != 0){
        document.write(x+"<br>")
    }
}