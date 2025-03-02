function calcular(){
    var nota1 = parseFloat(document.getElementById("txtNota1").value);
    var nota2 = parseFloat(document.getElementById("txtNota2").value);

    var media = (nota1+nota2)/2;

    if(media>=6){
        document.getElementById("resultado").innerHTML = "APROVADO";
    }
    else{
         document.getElementById("resultado").innerHTML = "REPROVADO";
    }
}