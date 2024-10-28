let minusculas = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let maiusculas = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
let all = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

//Ao abrir a página, o script irá produzir um número aleatório através do Math.random armazenado na variável numRand (neste caso, um valor entre 1 e 3)

let numRand = Math.floor(Math.random() * 18);
let sorteio = "";
let resposta = window.document.getElementById("resposta");
let imagem = document.getElementById("imagemForca");
let forca = 0;
let aux = 0;
let usadas = document.getElementById("usadas");
let palavraCompleta = 0;
let indiceAlfa = 0;
let letreiro = document.getElementById("letreiro");
let primeiraMetade = $("#primeira-metade"); 
//A estrutura de decisão switch a seguir comparará o valor da variável numRand com um dos casos enumerados abaixo, produzindo uma palavra que será armazenada na variável 'sorteio' e alterando o texto do elemento de id 'resposta' armazenado numa variável de mesmo nome

switch (numRand) {
    case 1:
        sorteio = "HORRIPILANTE";
        resposta.innerHTML = "_ _ _ _ _ _ _ _ _ _ _ _";
    break
    case 2:
        sorteio = "MASSACRE";
        resposta.innerHTML = "_ _ _ _ _ _ _ _";
    break
    case 3:
        sorteio = "CATACLISMO";
        resposta.innerHTML = "_ _ _ _ _ _ _ _ _ _";
    break
    case 4:
        sorteio = "USURPAVEL";
        resposta.innerHTML = "_ _ _ _ _ _ _ _ _";
    break
    case 5:
        sorteio = "REGALIA";
        resposta.innerHTML = "_ _ _ _ _ _ _";
    break
    case 6:
        sorteio = "FRENESI";
        resposta.innerHTML = "_ _ _ _ _ _ _";
    break
    case 7:
        sorteio = "MIASMA";
        resposta.innerHTML = "_ _ _ _ _ _";
    break
    case 8:
        sorteio = "CICLOPIANO";
        resposta.innerHTML = "_ _ _ _ _ _ _ _ _ _";
    break
    case 9:
        sorteio = "ENXERTO";
        resposta.innerHTML = "_ _ _ _ _ _ _";
    break
    case 10:
        sorteio = "PESTILENCIA";
        resposta.innerHTML = "_ _ _ _ _ _ _ _ _ _ _";
    break
    case 11:
        sorteio = "TUMBA";
        resposta.innerHTML = "_ _ _ _ _";
    break
    case 12:
        sorteio = "MORBIDEZ";
        resposta.innerHTML = "_ _ _ _ _ _ _ _";
    break
    case 13:
        sorteio = "MORIBUNDO";
        resposta.innerHTML = "_ _ _ _ _ _ _ _ _";
    break
    case 14:
        sorteio = "NEFASTO";
        resposta.innerHTML = "_ _ _ _ _ _ _";
    break
    case 15:
        sorteio = "FERAL";
        resposta.innerHTML = "_ _ _ _ _";
    break
    case 16:
        sorteio = "FERRENHO";
        resposta.innerHTML = "_ _ _ _ _ _ _ _";
    break
    default:
        sorteio = "EMBASBACADO";
        resposta.innerHTML = "_ _ _ _ _ _ _ _ _ _ _";
    break
}

let segue = resposta.innerText.split(" ");

//A função abaixo valida a letra enviada pelo usuário, no caso de presença da letra, utilizando o método .split() e uma estrutura de repetição 'for', a resposta será fragmentada numa cadeia de caracteres que será salva em um array, pelo qual o laço de repetição irá 'ciclar', comparando cada caracter salvo no array com o valor armazenado na variável 'letra', que contém a letra enviada pelo usuário

function enviarLetra () {
    let letra = $("#letra").val();
    let verificarTipo = 0;
    for (g = 0; g < all.length; g++) {
        if (letra == all[g]) {
            verificarTipo++;
        }
    }
    if (letra == "" || verificarTipo == 0) {
        alert("Favor, envie uma letra.");
        $("#letra").val("");
        document.getElementById("letra").focus();
    } else {
        palavraCompleta = 0;
        /*  
        Verificando se a letra enviada pelo usuário é minúscula ou maiúscula: 
        */
        for (h = 0; h < minusculas.length; h++) {
            if (letra == minusculas[h]) {
                letra = maiusculas[h];
            }
        }
        aux = 0;
        resposta.innerText = "";
        for (i = 0; i < sorteio.length ; i++) {
            if (letra == sorteio[i]) {
                segue[i] = letra;
            }
            resposta.innerHTML += "<ins>" + segue[i] + "</ins>\u00A0";
        }
        /* O código abaixa verifica se a letra enviada já foi enviada anteriormente, através da variável 'aux'. Se a letra já tiver sido usada, a variável sofrerá um incremento dentro do loop abaixo. Se mesmo após o looping ela continuar valendo 0, a letra enviada será introduzida no HTML correspondente, mostrando a letra enviada. */
        let usadasTexto = usadas.innerText;
        for (j = 0; j < usadasTexto.length; j++) {
            if (usadasTexto[j] == letra) {
                aux++;
            }
        }
        if (aux == 0) {
            usadas.innerHTML += letra + "-";
        }
        //No caso de erro, haverá troca da imagem do boneco na forca, através de uma variável (que sofre auto-incrementação) concatenada ao 'src' da imagem para efeito de mudança 
        if (sorteio.indexOf(letra) == -1 && usadasTexto.includes(letra) == false) {
            forca++;
            imagem.setAttribute("src","./src/imgs/forca" + forca + ".png");
            switch (forca) {
                case 1:
                    letreiro.innerHTML = "&CloseCurlyDoubleQuote;Quando a cabeça não pensa, o corpo padece&CloseCurlyDoubleQuote; <p id='cursor'>|</p>";
                break
                case 2:
                    letreiro.innerHTML = "&CloseCurlyDoubleQuote;O corpo é limitado, mas a mente é?&CloseCurlyDoubleQuote; <p id='cursor'>|</p>";
                    primeiraMetade.css({
                        "background-image": "url('src/imgs/bg-letras1.jpg')" 
                    });
                break
                case 3:
                    letreiro.innerHTML = "&CloseCurlyDoubleQuote;O seu braço direito pode ser o braço esquerdo de um canhoto&CloseCurlyDoubleQuote; <p id='cursor'>|</p>";
                break
                case 4:
                    letreiro.innerHTML = "&CloseCurlyDoubleQuote;O seu braço direito pode ser o braço esquerdo de um canhoto&CloseCurlyDoubleQuote; <p id='cursor'>|</p>";
                    primeiraMetade.css({
                        "background-image": "url('src/imgs/bg-letras2.jpg')" 
                    });
                break
                case 5:
                    letreiro.innerHTML = "&CloseCurlyDoubleQuote;Se correr o bicho pega, se ficar o bicho come&CloseCurlyDoubleQuote; <p id='cursor'>|</p>";
                    break
                default:
                    $(".visibilidade").css({
                        visibility: "hidden"
                    });
                    document.getElementById("formulario").innerHTML += "<div style='position: absolute;'><p class='rubik-wet-paint-regular'>É O SEU FIM...</p></div>";
                    letreiro.innerHTML = "&CloseCurlyDoubleQuote;Cair não é um fracasso. O fracasso vem quando você fica onde caiu&CloseCurlyDoubleQuote; <p id='cursor'>|</p>";
                    let botoes = document.getElementsByClassName("btnEnvio");
                    botoes[0].disabled = true;
                    botoes[1].disabled = true;
                break
            }
        }    
        $("#letra").val("");
    
        /* 
        Abaixo, haverá uma validação para vitória por completar as letras da palavra sorteada:
        */
        for (checarUnderline = 0; checarUnderline < resposta.innerText.length; checarUnderline++) {
            if (resposta.innerText[checarUnderline] == '_') {
                palavraCompleta++;
            }
        }
    
        if(palavraCompleta == 0 && forca < 6) {
            $(".visibilidade").css({
                visibility: "hidden"
            });
            document.getElementById("formulario").innerHTML += "<div style='position: absolute;'><p class='rubik-wet-paint-regular'>PARABÉNS!</p><p class='rubik-wet-paint-regular'>VOCÊ ESCAPOU DESTA VEZ...</p></div>"; 
            let botoes = document.getElementsByClassName("btnEnvio");
            botoes[0].disabled = true;
            botoes[1].disabled = true;
        } 
        document.getElementById("letra").focus();
    }
}

/* Função no clicar do botão ENVIAR palavra */

function enviarPalavra() {
    let palavra = $("#palavra").val();
    let montarPalavra = "";

    if (palavra.length < 2) {
        alert("Favor, enviar a palavra completa.");
    } else {
        for (f = 0; f < palavra.length; f++) {
            for (g = 0; g < minusculas.length; g++) {
                if (palavra[f] == maiusculas[g]) {
                    montarPalavra += maiusculas[g];
                }
                if (palavra[f] == minusculas[g]) {
                    montarPalavra += maiusculas[g];
                }
            }
        }
        if (montarPalavra == sorteio) {
            $(".visibilidade").css({
                visibility: "hidden"
            });
            document.getElementById("formulario").innerHTML += "<div style='position: absolute;'><p class='rubik-wet-paint-regular'>PARABÉNS!</p><p class='rubik-wet-paint-regular'>VOCÊ ESCAPOU DESTA VEZ...</p></div>";
        } else {
            imagem.setAttribute("src","./src/imgs/forca6.png");
            primeiraMetade.css({
                "background-image": "url('src/imgs/bg-letras2.jpg')" 
            });
            $(".visibilidade").css({
                visibility: "hidden"
            });
            document.getElementById("formulario").innerHTML += "<div style='position: absolute;'><p class='rubik-wet-paint-regular'>É O SEU FIM...</p></div>";
            letreiro.innerHTML = "&CloseCurlyDoubleQuote;Cair não é um fracasso. O fracasso vem quando você fica onde caiu&CloseCurlyDoubleQuote; <p id='cursor'>|</p>";
            let botoes = document.getElementsByClassName("btnEnvio");
            botoes[0].disabled = true;
            botoes[1].disabled = true;
            letreiro.innerHTML = "&CloseCurlyDoubleQuote;Cair não é um fracasso. O fracasso vem quando você fica onde caiu&CloseCurlyDoubleQuote; <p id='cursor'>|</p>";
        }
    }
}

function reiniciar() {
    window.location.reload();
}
