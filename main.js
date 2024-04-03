const botoes = document.querySelectorAll(".botao");//variável que armazena todos os itens com a classe botão
const textos = document.querySelector(".aba-conteudo")//variável que armazena todos os itens com a classe aba conteudo

for (let i = 0; i < botoes.length; i++) {//loop que executa enquanto i<quantidade de botoes
    botoes[i].onclick = function () {//cria uma função

        for (let j = 0; j < botoes.length; j++) { //loop que executa j<quantidade de botoes
            botoes[j].classList.remove("ativo");//remove a palavra ativo da classe.
            textos[j].classList.remove("ativo");//remove a palavra ativo da classe.
        }

        botoes[i].classList.add("ativo");//adiciona a palavra ativo da classe.
        textos[i].classList.add("ativo");//adiciona a palavra ativo da classe.
    }
    console.log();

    const contadores = document.querySelectorAll(".contador");

    const tempoObejetivol = new Data("24-10-06T00:00:00");
    let tempoAtual = new Date();
    contadores[0].textContent = tempoObejetivol - tempoAtual;


}
