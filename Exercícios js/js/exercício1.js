function maiorNumero(num1,num2){
    if (num1>num2){
        return alert("O primeiro número maior "+num2);
    }
    else if(num1<num2){
        return alert("O primeiro número menor "+num1);
    }
    else{
        return alert("São iguais")
    }
}

var num1 = parseFloat(prompt("Informe um número: "));
var num2 = parseFloat(prompt("Informe outro número: "));
maiorNumero(num1,num2)

