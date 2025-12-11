export async function buscarUsuariosExternos() {
    try {
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!resposta.ok) {
            throw new Error('Falha na comunicação com a API');
        }

        const dados = await resposta.json();
        
        return dados.map(user => ({
            id: user.id,
            nome: user.name
        }));

    } catch (erro) {
        console.error("Erro no Fetch:", erro);
        alert('Não foi possível carregar os dados da API.');
        return [];
    }
}