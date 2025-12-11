import { buscarUsuariosExternos } from './api.js';
import { criarLinhaTabela, limparTabela } from './ui.js';

const form = document.getElementById('form-usuario');
const corpoTabela = document.getElementById('corpo_tabela');
const btnCarregar = document.getElementById('bt-carregar-api');
const inputNome = document.getElementById('nome');

async function inicializar() {
    const usuarios = await buscarUsuariosExternos();
    usuarios.forEach(usuario => {
        const tr = criarLinhaTabela(usuario);
        corpoTabela.appendChild(tr);
    });
}
corpoTabela.addEventListener('click', (event) => {
    if (event.target.classList.contains('btn-excluir')) {
        const linha = event.target.closest('tr');
        const nome = linha.children[1].innerText;

        if (confirm(`Tem certeza que deseja excluir ${nome}?`)) {
            linha.remove();
        }
    }
});

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const novoUsuario = {
        id: null,
        nome: inputNome.value
    };

    const tr = criarLinhaTabela(novoUsuario);
    corpoTabela.appendChild(tr);
    
    inputNome.value = '';
    inputNome.focus();
});

btnCarregar.addEventListener('click', () => {
    limparTabela(corpoTabela);
    inicializar();
});

window.addEventListener('load', inicializar);