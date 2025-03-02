function Mostrar(){
    var n = document.getElementById("txtproduto").value

    if(n == 1){
        document.getElementById("resultado").innerHTML = "Alimento não perecível"
    }
    else if(n == 2 || n == 3 || n == 4){
        document.getElementById("resultado").innerHTML = "Alimento perecível"
    }
    else if(n == 5 || n == 6){
        document.getElementById("resultado").innerHTML = "Vestuário"
    }
    else if(n == 7){
        document.getElementById("resultado").innerHTML = "Higiene pessoal"
    }
    else if(n == 8 || n == 9){
        document.getElementById("resultado").innerHTML = "Limpeza e Utensílios domésticos"
    }
    else{
        alert("Valor inválido")
    }
}