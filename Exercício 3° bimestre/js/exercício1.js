function calcular(){
    var cateto1 = parseInt(document.getElementById("txtCateto1").value)
    var cateto2 = parseInt(document.getElementById("txtCateto2").value);
    var h = Math.pow(cateto1,2)+Math.pow(cateto2,2)
    document.write("Hipotenusa:"+h);

}





