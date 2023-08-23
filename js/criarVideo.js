import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario]');

async function criarVideo(evento) {
    evento.preventDefault();

    const url = document.querySelector('[data-url]').value;
    const imagem = document.querySelector('[data-imagem]').value;
    const titulo = document.querySelector('[data-titulo]').value;
    const descricao = Math.floor(Math.random() * 10).toString();

    try {
        await conectaApi.criaVideo(titulo, descricao, url, imagem);
        window.location.href = '../pages/envio-concluido.html';
    }
    catch (er) {
        alert(er);
    }
}

formulario.addEventListener("submit", evento => criarVideo(evento));