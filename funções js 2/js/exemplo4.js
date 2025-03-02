
function verificaParImpar(num){
    if(num % 2 == 0){
        return num+ " é par";
    }
    else{
        return num+ " é impar";
    }
}


var num = parseInt(prompt("informe um número inteiro: "));
document.write(verificaParImpar(num));