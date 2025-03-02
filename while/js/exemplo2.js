const totalAlunos = 40;
var i = 1;
var tSeries = 0;
var tFilmes = 0;
var tPodcasts = 0;
var tDoc = 0;

while(i <= totalAlunos){
    var opcao = parseInt(
    prompt("Qual a sua preferência? \n 1 - Séries \n 2- Filmes \n 3- Podcast \n 4- Documentários"));

        switch(opcao){
            case 1:
                tSeries++;
                break;
            case 2:
                tFilmes++;
                break;
            case 3:
                tPodcasts++;
                break;
            case 4:
                tDoc++;
                break;
            default:
                alert("Código inválido");
                continue; //volta para o while (da a chance de colocar novamente)
        }
    i++; //i = i+1
}

document.write("Total de alunos que gostam mais de séries: "+tSeries+"<br>")
document.write("Total de alunos que gostam mais de filmes: "+tFilmes+"<br>")
document.write("Total de alunos que gostam mais de podcast: "+tPodcasts+"<br>")
document.write("Total de alunos que gostam mais de documentário: "+tDoc)
