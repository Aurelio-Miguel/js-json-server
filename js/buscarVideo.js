import { conectaApi } from "./conectaApi.js";
import criarCards from "./mostrarVideos.js";

const btnPesquisa = document.querySelector('[data-btnPesquisa]');

async function buscarVideo(evento) {
    evento.preventDefault();
    const dadosPesquisa = document.querySelector('[data-pesquisa]').value;
    const busca = await conectaApi.buscaVideo(dadosPesquisa);

    const lista = document.querySelector("[data-lista]");

    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }

    busca.forEach(elemento => lista.appendChild(criarCards(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)));

    if (busca.length == 0) {
        lista.innerHTML = `<h2 class="mensagem__titulo"> Nenhum vídeo com esse termo no sistema</h2>`;
    }
}

btnPesquisa.addEventListener('click', evento => buscarVideo(evento));