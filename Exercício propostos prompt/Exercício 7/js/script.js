var p = (prompt("Turno que você estuda: m = matutino, v = vesperino e n = noturno "));
var periodo;
var mensagem;

if(p == "m"){
    periodo = "matutino";
    mensagem = "Bom Dia!";
}
else if(p == "v"){
    periodo = "vesperino";
    mensagem = "Boa Tarde!";
}
else if(p == "n"){
    periodo = "noturno";
    mensagem = "Boa Noite!";
}
else{
    mensagem = "Valor inválido";
}
document.write("Período: "+periodo+"<br>");
document.write("Etec Pedro Ferreira Alves: "+mensagem);