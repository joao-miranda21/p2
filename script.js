// Abrir trailer em modal
function abrirTrailer(url) {
    const modal = document.createElement('div');
    modal.innerHTML = `
        <div class="modal">
            <iframe width="560" height="315" src="${url}" frameborder="0" allowfullscreen></iframe>
            <button onclick="this.parentElement.remove()">Fechar</button>
        </div>
    `;
    document.body.appendChild(modal);
}

// Detalhes do personagem
function detalhesPersonagem(nome) {
    const personagens = {
        vi: {
            nome: 'Vi',
            imagem: 'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/7c4fc4c9-f4c7-4e16-b325-8fb01eb28fb1/dev7n7g-b5e1d291-d127-45dd-9bac-52a0710f8a30.jpg/v1/fill/w_749,h_1067,q_70,strp/violet_by_lordeimos_dev7n7g-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTIwMCIsInBhdGgiOiJcL2ZcLzdjNGZjNGM5LWY0YzctNGUxNi1iMzI1LThmYjAxZWIyOGZiMVwvZGV2N243Zy1iNWUxZDI5MS1kMTI3LTQ1ZGQtOWJhYy01MmEwNzEwZjhhMzAuanBnIiwid2lkdGgiOiI8PTg0MyJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.kEq2sCXFqbyQ_mLZyJ6Aj5TIys4j-uEp2HF5Rcvbei4',
            descricao: 'Vi não tem muitas lembranças de sua infância em Zaun e o pouco que lembra, preferiria esquecer. Ela se aliou às gangues de arruaceiros, com quem logo aprendeu a usar sua astúcia e seus punhos para sobreviver....',
        },
        jinx: {
            nome: 'Jinx',
            imagem: 'https://i.pinimg.com/736x/18/3f/bc/183fbc59efd79a339ffa32eee63715fc.jpg',
            descricao: 'Jinx é uma criminosa desequilibrada e impulsiva da Subferia, Jinx é atormentada pelas consequências de seu passado, mas isso não a impede de deixar sua marca caótica de pandemônio em Piltover e Zaun....',
        },
        ekko: {
            nome: 'Ekko',
            imagem: 'https://i.pinimg.com/736x/42/a9/d6/42a9d6b48e39644303a5ff136ebacbdc.jpg',
            descricao: 'Nascido com o intelecto de um gênio, Ekko construía máquinas simples antes mesmo de conseguir engatinhar. Seus pais, Inna e Wyeth, juraram prover um bom futuro para seu filho, mas Zaun, com toda sua poluição e criminalidade, só reprimiria Ekko, e eles sentiam que aquela criança merecia a prosperidade e as oportunidades de Piltover....',
        },
    };

    const personagem = personagens[nome];
    localStorage.setItem('detalhesPersonagem', JSON.stringify(personagem));
    window.location.href = 'detalhes.html';
}

// Preencher os detalhes na página de detalhes
if (window.location.pathname.includes('detalhes.html')) {
    const detalhes = JSON.parse(localStorage.getItem('detalhesPersonagem'));
    document.getElementById('nome-personagem').innerText = detalhes.nome;
    document.getElementById('imagem-personagem').src = detalhes.imagem;
    document.getElementById('descricao-personagem').innerText = detalhes.descricao;
}
// Seleciona o botão e o body
const themeToggleButton = document.getElementById('theme-toggle');
const body = document.body;

// Adiciona o evento de clique ao botão
themeToggleButton.addEventListener('click', () => {
    // Alterna a classe "dark-theme"
    body.classList.toggle('dark-theme');
    
    // Altera o texto do botão conforme o tema
    if (body.classList.contains('dark-theme')) {
        themeToggleButton.textContent = 'Trocar para Tema Escuro';
    } else {
        themeToggleButton.textContent = 'Trocar para Tema Claro';
    }
});
