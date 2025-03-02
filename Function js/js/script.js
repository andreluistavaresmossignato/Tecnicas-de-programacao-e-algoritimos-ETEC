function mostrar(){
    //Pegar o dado do html
    var placa = parseInt(document.getElementById("txtPlaca").value);

    switch(placa){
        case 1:
        case 2:
            document.getElementById("resultado").innerHTML =
            "Rodizio de carro na segunda-feira";
            break;
        case 3:
        case 4:
            document.getElementById("resultado").innerHTML =
            "Rodizio de carro na terça-feira";
            break;
        case 5:
        case 6:
            document.getElementById("resultado").innerHTML =
            "Rodizio de carro na quarta-feira";
            break;
        case 7:
        case 8:
            document.getElementById("resultado").innerHTML =
            "Rodizio de carro na quinta-feira";
            break;
        case 9:
        case 0:
            document.getElementById("resultado").innerHTML =
            "Rodizio de carro na sexta-feira";
            break;
        default:
            document.getElementById("resultado").innerHTML =
            "ATENÇÃO - Valor digitado inválido"
    }
}