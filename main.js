const botoes = document.querySelectorAll(".botao");//variável que armazena todos os itens com a classe botão
const textos = document.querySelector(".aba-conteudo")//variável que armazena todos os itens com a classe aba conteudo

for (let i = 0; i < botoes.length; i++) {//loop que executa enquanto i<quantidade de botoes
    botoes[i].onclick = function ()  { //cria uma função

        for (let j = 0; j < botoes.length; j++) { //loop que executa j<quantidade de botoes
            botoes[j].classList.remove("ativo");//remove a palavra ativo da classe.
            textos[j].classList.remove("ativo");//remove a palavra ativo da classe.
        }

        botoes[i].classList.add("ativo");//adiciona a palavra ativo da classe.
        textos[i].classList.add("ativo");//adiciona a palavra ativo da classe.
    }
}

const contadores = document.querySelectorAll(".contador");

const tempoObejetivo1 = new Data("2024-10-06T00:00:00");
const tempoObejetivo2 = new Data("2024-10-06T00:00:00");
const tempoObejetivo3 = new Data("2024-10-06T00:00:00");
const tempoObejetivo4 = new Data("2024-10-06T00:00:00");

const tempos[tempoObejetivo1,tempoObejetivo2,tempoObejetivo3,tempoObejetivo4]

for (let i=0;i<contadores.length;i++)
{
    contadores[i].textContent = calculaTempo(tempos[i]);
}


function calculaTempo(tempoObejetivo) {

    let tempoAtual = new Date();
    let tempofinal = tempoObejetivol - tempoAtual;
    let segndos = math.floor(tempofinal / 1000);
    let minutos = math.floor(segundos / 60);
    let horas = math.floor(minutos / 60);
    let dias = math.floor(horas / 24);
    segundos%=60;
    minutos%=60;
    horas%=24;
    return[ dias + "dias" + horas + "horas" + minutos + "minutos" + segundos + "segundos"];
    //print(dias);

}


