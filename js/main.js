// Base de dados expandida inspirada no universo de Zelda com Status de RPG
const inventoryItems = [
    {
        id: 1,
        name: "Master Sword",
        category: "armas",
        rarity: "Lendário",
        rarityBadge: "bg-warning text-dark",
        icon: "bi-sword",
        description: "A espada lendária que bane a escuridão.",
        stats: [
            { label: "Dano Base", value: "120 ATK" },
            { label: "Taxa de Crítico", value: "25% (+150% Dano Crítico)" },
            { label: "Efeito Especial", value: "Dispara feixes de luz sagrada com a vida cheia." },
            { label: "Passiva", value: "+50% de dano contra inimigos corrompidos pela Malícia." }
        ]
    },
    {
        id: 2,
        name: "Hylian Shield",
        category: "escudos",
        rarity: "Raro",
        rarityBadge: "bg-info text-dark",
        icon: "bi-shield-fill",
        description: "Um escudo tradicional forjado com metal sagrado de altíssima resistência.",
        stats: [
            { label: "Defesa", value: "90 DEF" },
            { label: "Vida Adicional", value: "+150 HP" },
            { label: "Efeito Especial", value: "Reflete projéteis mágicos ao realizar bloqueio perfeito (Parry)." }
        ]
    },
    {
        id: 3,
        name: "Poção de Vida Maior",
        category: "pocoes",
        rarity: "Comum",
        rarityBadge: "bg-secondary text-white",
        icon: "bi-cup-straw",
        description: "Elixir alquímico concentrado preparado com ervas de Hyrule.",
        stats: [
            { label: "Efeito Principal", value: "Restaura 100% dos pontos de vida (HP) instantaneamente." },
            { label: "Efeito Secundário", value: "Concede +20% de regeneração natural por 15 segundos." }
        ]
    },
    {
        id: 4,
        name: "Orbe Ancestral",
        category: "reliquias",
        rarity: "Épico",
        rarityBadge: "bg-purple text-white",
        icon: "bi-gem",
        description: "Relíquia equipada que canaliza a energia mística dos antigos sábios.",
        stats: [
            { label: "Atributos Equipáveis", value: "+35 Inteligência | +200 Mana Máxima" },
            { label: "Bônus de Status", value: "Reduz o tempo de recarga das habilidades em 15%." }
        ]
    },
    {
        id: 5,
        name: "Arco do Herói",
        category: "armas",
        rarity: "Raro",
        rarityBadge: "bg-info text-dark",
        icon: "bi-bullseye",
        description: "Arco élfico de longo alcance com mira estabilizada.",
        stats: [
            { label: "Dano Base", value: "85 ATK" },
            { label: "Taxa de Crítico", value: "35% (Acerto na cabeça garante crítico)" },
            { label: "Efeito Especial", value: "Carrega flechas elementais 30% mais rápido." },
            { label: "Passiva", value: "Aumenta a velocidade de movimento após acertar um alvo." }
        ]
    },
    {
        id: 6,
        name: "Bumerangue Ventoso",
        category: "reliquias",
        rarity: "Comum",
        rarityBadge: "bg-secondary text-white",
        icon: "bi-wind",
        description: "Amuleto e ferramenta aerodinâmica usada pelos exploradores dos céus.",
        stats: [
            { label: "Atributos Equipáveis", value: "+20 Agilidade | +15% Velocidade de Ataque" },
            { label: "Bônus de Status", value: "Aumenta o alcance de coleta de itens e esquiva." }
        ]
    },
    {
        id: 7,
        name: "Túnica dos Zoras",
        category: "escudos",
        rarity: "Épico",
        rarityBadge: "bg-purple text-white",
        icon: "bi-water",
        description: "Armadura leve tecida com escamas abençoadas da família real Zora.",
        stats: [
            { label: "Defesa", value: "65 DEF" },
            { label: "Vida Adicional", value: "+220 HP" },
            { label: "Efeito Especial", value: "Permite respirar embaixo d'água e reduz dano de gelo/água em 40%." }
        ]
    },
    {
        id: 8,
        name: "Fada Engarrafada",
        category: "pocoes",
        rarity: "Lendário",
        rarityBadge: "bg-warning text-dark",
        icon: "bi-heart-fill",
        description: "Espírito luminoso que acompanha e protege o portador em momentos fatais.",
        stats: [
            { label: "Efeito Principal", value: "Ressuscita o jogador automaticamente com 50% de HP ao sofrer dano fatal." },
            { label: "Efeito Secundário", value: "Limpa todos os efeitos negativos (veneno, queimadura e maldição) ao ativar." }
        ]
    }
];

// Função para renderizar os cards no HTML
function renderInventory(itemsToRender) {
    const gridContainer = document.getElementById('inventory-grid');
    gridContainer.innerHTML = '';

    if (itemsToRender.length === 0) {
        gridContainer.innerHTML = `
            <div class="col-12 text-center py-5">
                <p class="text-secondary">Nenhum item encontrado nesta categoria.</p>
            </div>
        `;
        return;
    }

    itemsToRender.forEach(item => {
        const colDiv = document.createElement('div');
        colDiv.className = 'col-12 col-sm-6 col-md-4 col-lg-3';
        
        colDiv.innerHTML = `
            <div class="card h-100 bg-dark text-white border-secondary item-card">
                <div class="card-body text-center d-flex flex-column justify-content-between">
                    <div>
                        <span class="badge ${item.rarityBadge} mb-2">${item.rarity}</span>
                        <div class="display-4 my-3 text-warning">
                            <i class="bi ${item.icon}"></i>
                        </div>
                        <h5 class="card-title fw-bold">${item.name}</h5>
                        <p class="card-text small text-secondary">${item.description}</p>
                    </div>
                    <div class="mt-3">
                        <button class="btn btn-sm btn-outline-warning w-100" onclick="openItemModal(${item.id})">
                            Ver Status & Efeitos
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        gridContainer.appendChild(colDiv);
    });
}

// Função para abrir o Modal com os status de RPG do item clicado
function openItemModal(id) {
    const item = inventoryItems.find(i => i.id === id);
    if (!item) return;

    document.getElementById('modal-item-name').textContent = item.name;
    document.getElementById('modal-item-desc').textContent = item.description;
    
    // Monta a lista formatada de status e efeitos do item
    const statsContainer = document.getElementById('modal-item-stats');
    statsContainer.innerHTML = item.stats.map(stat => `
        <div class="mb-2 border-bottom border-secondary pb-1">
            <span class="text-info fw-bold">${stat.label}:</span> 
            <span>${stat.value}</span>
        </div>
    `).join('');
    
    const iconElement = document.getElementById('modal-item-icon');
    iconElement.innerHTML = `<i class="bi ${item.icon}"></i>`;

    const badgeElement = document.getElementById('modal-item-rarity');
    badgeElement.className = `badge mb-2 ${item.rarityBadge}`;
    badgeElement.textContent = item.rarity;

    const modalElement = document.getElementById('itemModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}

// Configuração dos botões de filtro de categoria
function setupFilters() {
    const filterButtons = document.querySelectorAll('[role="group"] button');

    filterButtons.forEach(button => {
        if(button.id.includes('font')) return;

        button.addEventListener('click', (e) => {
            const group = e.target.closest('.btn-group');
            if(!group) return;

            const buttonsInGroup = group.querySelectorAll('button');
            buttonsInGroup.forEach(btn => {
                btn.classList.remove('btn-primary', 'active');
                btn.classList.add('btn-outline-secondary');
            });

            const clickedButton = e.target;
            clickedButton.classList.remove('btn-outline-secondary');
            clickedButton.classList.add('btn-primary', 'active');

            const categoryText = clickedButton.textContent.trim().toLowerCase();

            if (categoryText === 'todos') {
                renderInventory(inventoryItems);
            } else {
                let categoryKey = '';
                if (categoryText === 'armas') categoryKey = 'armas';
                if (categoryText === 'escudos') categoryKey = 'escudos';
                if (categoryText === 'poções') categoryKey = 'pocoes';
                if (categoryText === 'relíquias') categoryKey = 'reliquias';

                const filtered = inventoryItems.filter(item => item.category === categoryKey);
                renderInventory(filtered);
            }
        });
    });
}

// Funcionalidades de Acessibilidade (Tamanho de Fonte e Tema)
function setupAccessibility() {
    const htmlRoot = document.documentElement;
    let currentFontSize = 100;

    document.getElementById('btn-font-increase').addEventListener('click', () => {
        if (currentFontSize < 140) {
            currentFontSize += 10;
            htmlRoot.style.fontSize = `${currentFontSize}%`;
        }
    });

    document.getElementById('btn-font-decrease').addEventListener('click', () => {
        if (currentFontSize > 80) {
            currentFontSize -= 10;
            htmlRoot.style.fontSize = `${currentFontSize}%`;
        }
    });

    document.getElementById('btn-font-reset').addEventListener('click', () => {
        currentFontSize = 100;
        htmlRoot.style.fontSize = '100%';
    });

    const themeToggleBtn = document.getElementById('btn-theme-toggle');
    const themeIcon = document.getElementById('theme-icon');

    themeToggleBtn.addEventListener('click', () => {
        const currentTheme = htmlRoot.getAttribute('data-bs-theme');
        if (currentTheme === 'dark') {
            htmlRoot.setAttribute('data-bs-theme', 'light');
            themeIcon.className = 'bi bi-moon-fill';
            document.body.className = 'bg-light text-dark';
        } else {
            htmlRoot.setAttribute('data-bs-theme', 'dark');
            themeIcon.className = 'bi bi-sun-fill';
            document.body.className = 'bg-dark text-white';
        }
    });
}

// Executa assim que a página carregar
document.addEventListener('DOMContentLoaded', () => {
    renderInventory(inventoryItems);
    setupFilters();
    setupAccessibility();
});