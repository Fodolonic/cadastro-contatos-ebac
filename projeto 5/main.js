const form = document.getElementById('contatoForm');
const corpoTabela = document.getElementById('corpoTabela');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value.trim();
    const telefone = document.getElementById('telefone').value.trim();

    if (!nome || !telefone) {
        alert("Preencha os dois campos!");
        return;
    }

    const duplicado = Array.from(corpoTabela.rows).some(row => {
        const nomeExistente = row.cells[0].textContent;
        const telefoneExistente = row.cells[1].textContent;
        return nomeExistente === nome && telefoneExistente === telefone;
    });

    if (duplicado) {
        alert("Este contato já foi cadastrado.");
        return;
    }

    const novaLinha = document.createElement('tr');
    novaLinha.innerHTML = `<td>${nome}</td><td>${telefone}</td>`;
    corpoTabela.appendChild(novaLinha);

    form.reset();
});