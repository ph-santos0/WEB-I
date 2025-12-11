export function criarLinhaTabela(usuario) {
    const tr = document.createElement('tr');
    
    const idDisplay = usuario.id ? usuario.id : Math.floor(Math.random() * 1000) + 100;

    tr.innerHTML = `
        <td>${idDisplay}</td>
        <td>${usuario.nome}</td>
        <td>
            <button class="btn-excluir" style="cursor:pointer; color:white; background:red;">
                Excluir
            </button>
        </td>
    `;
    return tr;
}

export function limparTabela(elementoTbody) {
    elementoTbody.innerHTML = '';
}