let debounceTimeout;

function buscar() {
    const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase().trim();
    filtrarResultados(campoPesquisa);
    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(() => {
        const campoPesquisa = document.getElementById("campo-pesquisa").value.toLowerCase().trim();
        filtrarResultados(campoPesquisa);
    }, 300); // Atraso de 300ms
}

function filtrar(categoria) {
    const categoriaLower = categoria.toLowerCase();
    const campoPesquisa = categoriaLower === 'geral' ? '' : categoriaLower;
    document.getElementById("campo-pesquisa").value = '';
    filtrarResultados(campoPesquisa);
}

function filtrarResultados(query) {
    const section = document.getElementById("resultados-pesquisa");
    let resultados = "";

    if (query === "") { // Se for filtro geral
        dados.forEach(dica => {
            resultados += criarItemResultado(dica);
        });
    } else if (!query) { // Pesquisa vazia
        section.innerHTML = "<h3>Pesquisa vazia! Tente novamente.</h3>";
        return;
    } else {
        dados.forEach(dica => {
            const area = dica.area.toLowerCase();
            const descricao = dica.descricao.toLowerCase();
            const tags = dica.tags.toLowerCase();

            if (area.includes(query) || descricao.includes(query) || tags.includes(query)) {
                resultados += criarItemResultado(dica);
            }
        });
    }

    if (!resultados) {
        resultados = "<h3>Nenhuma dica encontrada.</h3>";
    }

    section.innerHTML = resultados;
}

function criarItemResultado(dica) {
    return `
        <div class="item-resultado">
            <h2>${dica.area}</h2>
            <p>${dica.descricao}</p>
            <a href="${dica.link}" target="_blank">Mais detalhes</a>
        </div>
    `;
}



