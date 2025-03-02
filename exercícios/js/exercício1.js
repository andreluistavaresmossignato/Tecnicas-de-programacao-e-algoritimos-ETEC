var vitoria = 0;
var vitoria2 = 0;

// Captura as escolhas dos jogadores e converte para maiúsculas
var escolha = prompt("Jogador 1: Escolha entre Tesoura, Papel ou Pedra").toUpperCase();
var escolha2 = prompt("Jogador 2: Escolha entre Tesoura, Papel ou Pedra").toUpperCase();

// Verifica se as escolhas são válidas
var escolhasValidas = ["TESOURA", "PAPEL", "PEDRA"];
if (!escolhasValidas.includes(escolha) || !escolhasValidas.includes(escolha2)) {
    alert("Escolha inválida! Por favor, escolha entre Tesoura, Papel ou Pedra.");
} else {
    // Verifica as condições de vitória
    if (escolha == escolha2) {
        alert("Empate! Ambos escolheram " + escolha);
    } else if (escolha == "TESOURA" && escolha2 == "PAPEL") {
        alert("Jogador 1 venceu! Tesoura corta Papel");
        vitoria++;
    } else if (escolha == "PAPEL" && escolha2 == "TESOURA") {
        alert("Jogador 2 venceu! Tesoura corta Papel");
        vitoria2++;
    } else if (escolha == "PAPEL" && escolha2 == "PEDRA") {
        alert("Jogador 1 venceu! Papel cobre Pedra");
        vitoria++;
    } else if (escolha == "PEDRA" && escolha2 == "PAPEL") {
        alert("Jogador 2 venceu! Papel cobre Pedra");
        vitoria2++;
    } else if (escolha == "PEDRA" && escolha2 == "TESOURA") {
        alert("Jogador 1 venceu! Pedra quebra Tesoura");
        vitoria++;
    } else if (escolha == "TESOURA" && escolha2 == "PEDRA") {
        alert("Jogador 2 venceu! Pedra quebra Tesoura");
        vitoria2++;
    }
    
    // Exibe o número de vitórias
    document.write("Jogador 1 venceu " + vitoria + " vez(es) <br>");
    document.write("Jogador 2 venceu " + vitoria2 + " vez(es)");
}
