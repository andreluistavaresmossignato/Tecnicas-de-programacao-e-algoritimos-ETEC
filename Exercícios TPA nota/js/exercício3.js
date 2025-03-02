var votosCandidato1 = 0;
var votosCandidato2 = 0;
var votosNulos = 0;
var votosBrancos = 0;
var totalVotos = 0;
 
while (true) {
    var voto = parseInt(prompt("Digite o código do voto (1 para Candidato 1, 2 para Candidato 2, 3 para nulo, 4 para branco, 0 para encerrar):"));
    
    if (voto === 0) break;
 
    totalVotos++;
 
    if (voto === 1) {
        votosCandidato1++;
    } else if (voto === 2) {
        votosCandidato2++;
    } else if (voto === 3) {
        votosNulos++;
    } else if (voto === 4) {
        votosBrancos++;
    } else {
        alert("Código inválido. Tente novamente.");
        totalVotos--;
    }
}
 
if (totalVotos > 0) {
    var percentualCandidato1 = (votosCandidato1 / totalVotos) * 100;
    var percentualCandidato2 = (votosCandidato2 / totalVotos) * 100;
    var percentualNulos = (votosNulos / totalVotos) * 100;
    var percentualBrancos = (votosBrancos / totalVotos) * 100;
 
    alert(
        "Resultado da votação:\n" +
        "Candidato 1: " + percentualCandidato1.toFixed(2) + "%\n" +
        "Candidato 2: " + percentualCandidato2.toFixed(2) + "%\n" +
        "Votos nulos: " + percentualNulos.toFixed(2) + "%\n" +
        "Votos em branco: " + percentualBrancos.toFixed(2) + "%"
    );
} else {
    alert("Nenhum voto foi registrado.");
}
