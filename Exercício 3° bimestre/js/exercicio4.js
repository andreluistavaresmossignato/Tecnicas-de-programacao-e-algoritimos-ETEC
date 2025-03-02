function mostrar(){
    //entrada de dados
    var time = document.getElementById("txtTime").value;
    var timeM = time.toUpperCase();

    switch(timeM){
        case "CORINTHIANS":
        case "PALMEIRAS":
        case "SÃO PAULO":
        case "SANTOS":
            document.getElementById("resultado").innerHTML = "É um clube paulista";
            break;
        case "FLAMENGO":
        case "FLUMINENSE":
        case "VASCO":
        case "BOTAFOGO":
            document.getElementById("resultado").innerHTML = "É um clube carioca";
            break;
        default:
            document.getElementById("resultado").innerHTML = "É um de outro estado";
            break;
    }
}