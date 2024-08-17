    // 1. idade
    let idade = 26
    document.write("<p> 1.   Minha idade é " + idade + " anos.</p><br>")

    // 2. soma
    let x = 15
    let y = 26
    let z = x + y
    document.write("<p>2.   O resultado da soma de x e y é " + z + "</p><br>")

    // 3. compra
    let valorCompra = 300
    let quantidadeDeParcelas = 5
    let valorDaParcela = valorCompra / quantidadeDeParcelas
    document.write("<p>3.   O valor total da compra foi R$ " + valorCompra +",00<br>Forma de pagamento: " + quantidadeDeParcelas + "x de R$ " + valorDaParcela + ",00 </p><br>")

    // 4. x segundos em x minutos
    let minutos = 47
    let minutosEmSegundos = minutos * 60
    document.write("<p>4.   " + minutos + " minutos equivale à " + minutosEmSegundos + " segundos! </p><br>")

    // 5. media de nota do aluno
    let aluno = "maria"
    let nota01 = 10
    let nota02 = 8
    let nota03 = 9
    let notaMedia = (nota01 + nota02 + nota03) / 3
    document.write("<p>5.   O aluno "+ aluno + " ficou com média "+ notaMedia +",00 </p><br>")

    // 6. troca de valores de variaveis
    let A = 10
    let B = 20
    let C = A
    A = B
    B = C
    document.write("<p>6.   valor da variável A " + A + " valor da variável B " + B + "</p><br>")

    // 7. eleição
    let brancos = 21081
    let nulos = 15626
    let validos = 75223
    let eleitores = brancos + nulos + validos
    let porcentagemVotosBrancos = brancos * 100 / eleitores
    let porcentagemVotosNulos = nulos * 100 / eleitores
    let porcentagemVotosValidos = validos * 100 / eleitores
    document.write("<p>7.   A porcentagem de votos em Branco foi de " + porcentagemVotosBrancos.toFixed(2) + "% <br> A porcentagem de votos em Nulos foi de " + porcentagemVotosNulos.toFixed(2) + "% <br> A porcentagem de votos em Validos foi de " + porcentagemVotosValidos.toFixed(2) + "% </p><br>")
    
    // 8. comparação de numeros 
    let numero01 = 20
    let numero02 = 30
    if(numero01 > numero02){
        document.write("<p>8.   Primeiro é maior</p><br>")
    }else if(numero01 < numero02) {
        document.write("<p>8.   Segundo é maior</p><br>")
    }else {
        document.write("<p>8.   Numeros iguais</p><br>")
    }

    // 9. valor das maçãs
    let macas = 100
    if(macas >= 12){
        macas = macas * 0.25
        document.write("<p>9.    Valor total da compra R$ " + macas + ",00 </p><br>")
    }else{
        macas = macas * 0.30
        document.write("<p>9.    Valor total da compra R$ " + macas + ",00 </p><br>")
    }

    // 10. nome e idade do usuario com ano de nascimento
    let nomeUsuario = "marcela"
    let idadeUsuario = 27
    let anoDeNascimento = 2024 - idadeUsuario
    document.write("<p>10.    Nome: " + nomeUsuario + " <br>Idade: " + idadeUsuario + " <br>Ano de nascimento: " + anoDeNascimento + "</p><br>")

    // 11. numero par ou impar
    let parOuImpar = 11
    if(parOuImpar % 2 != 0){
        document.write("<p>11.    Numero impar </p><br>")
    }else{
        document.write("<p>11.    Numero Par </p><br>")
    }

    // 12. pode ou não votar este ano?
    let anoAtual = 2024
    let anoQueNascel = 2008
    if(anoAtual - anoQueNascel < 16){
        document.write("<p>12.    voçê não poderá votar este ano!</p>")
    }else{
        document.write("<p>12.    voçê poderá votar este ano!</p>")
    }