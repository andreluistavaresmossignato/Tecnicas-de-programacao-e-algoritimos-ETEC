var idade = parseFloat(prompt("Sua idade: "));

var mensagem;

if(idade <5){
    mensagem = "Não tem idade";
}
else if(idade < 7){
    mensagem = "infantil A";
}
else if(idade < 10){
    mensagem = "infantil B";
}
else if(idade < 13){
    mensagem = "juvenil A";
}
else if(idade <17){
    mensagem = "juvenil B";
}
else{
    mensagem = "senior"
}

document.write("Resultado: "+mensagem);