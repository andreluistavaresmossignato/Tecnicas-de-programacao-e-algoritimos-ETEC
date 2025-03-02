        var quantidade = parseInt(prompt("Quantos números você quer inserir?"));
        var numeros = []; // Array para armazenar os números

        for (var i = 0; i < quantidade; i++) {
            var numero = parseInt(prompt("Insira o número " + (i + 1) + ":"));
            numeros.push(numero); // Adiciona o número ao array
        }

        
        var produtoImpares = 1;
        var somaPares = 0;
        var encontrouImpar = false;
        for (var j = 0; j < numeros.length; j++) {
            if (numeros[j] % 2 === 0) {
                somaPares += numeros[j];
            } else {
                produtoImpares *= numeros[j]; 
                encontrouImpar = true;
            }
        }
        if (!encontrouImpar) {
            produtoImpares = 0; // Se não houver ímpares, produto deve ser 0
        }

        // Exibe os resultados
        document.write("<p>Produto dos números ímpares: " + produtoImpares + "</p>");
        document.write("<p>Soma dos números pares: " + somaPares + "</p>");