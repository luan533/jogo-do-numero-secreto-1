let listaDeNumerosSorteados = [ ]; // variável da lista dos numeros sorteados pra evitar repetição
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio ( );
let tentativas = 1;

function exibirTextoNaTela (tag, texto){
    let campo = document.querySelector (tag); //aqui a função define o campo pra alteração (tag)
    campo.innerHTML = texto // aqui texto é definido como uma variavel que executa a alteração
    responsiveVoice.speak (texto, 'Brazilian Portuguese Female', {rate : 1.2}) // função speak utilizada pra pegar um link dentro do html (linha 7) que traz um comando de voz, nele há opções de linguagem, comando rate pra definir uma velocidade no audio
}

function mensagemInicial () {
exibirTextoNaTela ('h1', 'jogo do numero secreto'); //h1 é o campo de alteração, em seguida vem a alteração
exibirTextoNaTela ('p', 'escolha um numero de 1 a 10'); //p campo de alteração, depois da virgula alteração
}

mensagemInicial ()

function verificarChute () {
    let chute = document.querySelector ('input').value; // variavel dentro da função para pegar especificamente o valor da tag input
        
    if (chute==numeroSecreto){
        let palavraTentativas = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `parabéns! você acertou o numero secreto com ${tentativas} ${palavraTentativas}!`;
        exibirTextoNaTela ('h1', 'Acertou!');
        exibirTextoNaTela ('p', mensagemTentativas);
        document.getElementById ("reiniciar").removeAttribute ('disabled');
    }  else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela ('p', `o numero secreto é menor que ${chute}`);
        } else exibirTextoNaTela ('p',`o numero secreto é maior que ${chute}`);
         
    } 

     tentativas ++ 
     limparCampo () // função aplicada para limpar o campo
}

function gerarNumeroAleatorio ( ){
    let numeroEscolhido = parseInt(Math.random() * numeroLimite + 1); //alteração feita pra retornar o valor do numero aleatorio na variavel pra poder usar no comando da lista 
    let quantidadeDeElementos = listaDeNumerosSorteados.length // length tras a quantidade de elementos para a variavel

    if (quantidadeDeElementos == numeroLimite) { //se os numeros sorteados chegam ao limite
      listaDeNumerosSorteados = [ ]  // a lista é resetada
    }

    if (listaDeNumerosSorteados.includes(numeroEscolhido)) { // se o numero aleatorio esta incluido na lista
        return gerarNumeroAleatorio ( ); //gerar um novo numero aleatorio
    } else {
        listaDeNumerosSorteados.push(numeroEscolhido); //se não, gerar um novo numero aleatorio e adiciona-lo na lista
        return numeroEscolhido;
    }
     
    
}

function limparCampo ( ){
 chute = document.querySelector ('input'); // função criada para pegar o campo da tag input e coloca um valor vazio
 chute.value = ''
}


function reiniciarJogo (){  // função chamada dentro do HTML na linha 28 
    numeroSecreto = gerarNumeroAleatorio ();
    limparCampo ( );
    tentativas = 1;
    mensagemInicial ( );
    document.getElementById("reiniciar").setAttribute('disabled', true); // exemplos de como alterar elementos dentro do HTML
}



console.log (numeroSecreto);

