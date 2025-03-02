function mostrar(){
    var numero = document.getElementById("txtnumero").value

    switch(numero){
        case "2":
            document.getElementById("resultado").innerHTML = "Moto"
        break;
        case "3":
            document.getElementById("resultado").innerHTML = "Triciclo"
        break;
        case "4":
           document.getElementById("resultado").innerHTML = "Carro"
        break;
        case "8":
            document.getElementById("resultado").innerHTML = "Caminhão"
        break;
        case "18":
            document.getElementById("resultado").innerHTML = "Treminhão"
        break;
        default:
            alert("Veículo não identificado");
        break;
    }
}
