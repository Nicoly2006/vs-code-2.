const botoes = document.querySelectorAll(".botao");
const botoes = document.querySelectorAll(".aba-conteudo");

for(let i=0;i <botoes.length;i++){
    botoes[i].onclick = function(){
        
        for(let j=0;j<botoes.length;j++){
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
            
        }

        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
const contadores = document.querySelectorAll(".contador");
const tempoObjetivo1 = new Date ("2024-07-15T00:00:00")
let tempoAtual = new Date("2024-03-13T09:51:00")

contadores[0].textContent = tempoObjetivo1 = tempoAtual

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo2 = new Date ("2024-11-29T00:00:00")
let tempoAtual = new Date("2024-03-13T09:51:00")

contadores[0].textContent = tempoObjetivo1 = tempoAtual

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo3 = new Date ("2024-10-06T00:00:00")
let tempoAtual = new Date("2024-03-13T09:51:00")

contadores[0].textContent = tempoObjetivo1 = tempoAtual

const contadores = document.querySelectorAll(".contador");
const tempoObjetivo4 = new Date ("2024-12-21T00:00:00")
let tempoAtual = new Date("2024-03-13T09:51:00")

contadores[0].textContent = tempoObjetivo1 = tempoAtual