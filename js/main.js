// Base de dados simulada dos itens do inventário RPG
const inventoryItems = [
    {
        id: 1,
        name: "Master Sword",
        category: "armas",
        rarity: "Lendário",
        rarityBadge: "bg-warning text-dark",
        icon: "bi-sword",
        description: "A espada lendária que bane a escuridão.",
        contrastScore: "12.4:1 (Passa WCAG AAA)"
    },
    {
        id: 2,
        name: "Hylian Shield",
        category: "escudos",
        rarity: "Raro",
        rarityBadge: "bg-info text-dark",
        icon: "bi-shield-fill",
        description: "Um escudo tradicional com altíssima durabilidade.",
        contrastScore: "8.1:1 (Passa WCAG AAA)"
    },
    {
        id: 3,
        name: "Poção de Vida Maior",
        category: "pocoes",
        rarity: "Comum",
        rarityBadge: "bg-secondary text-white",
        icon: "bi-cup-straw",
        description: "Restaura os pontos de vida completamente.",
        contrastScore: "4.8:1 (Passa WCAG AA)"
    },
    {
        id: 4,
        name: "Orbe Ancestral",
        category: "reliquias",
        rarity: "Épico",
        rarityBadge: "bg-purple text-white",
        icon: "bi-gem",
        description: "Brilha com uma energia misteriosa de eras passadas.",
        contrastScore: "7.2:1 (Passa WCAG AAA)"
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
                            Ver WCAG & Contraste
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        gridContainer.appendChild(colDiv);
    });
}

// Função para abrir o Modal com os dados do item clicado
function openItemModal(id) {
    const item = inventoryItems.find(i => i.id === id);
    if (!item) return;

    // Preenche os elementos do modal com as informações do item
    document.getElementById('modal-item-name').textContent = item.name;
    document.getElementById('modal-item-desc').textContent = item.description;
    document.getElementById('modal-item-contrast').textContent = item.contrastScore;
    
    const iconElement = document.getElementById('modal-item-icon');
    iconElement.innerHTML = `<i class="bi ${item.icon}"></i>`;

    const badgeElement = document.getElementById('modal-item-rarity');
    badgeElement.className = `badge mb-2 ${item.rarityBadge}`;
    badgeElement.textContent = item.rarity;

    // Dispara o componente Modal do Bootstrap via JavaScript
    const modalElement = document.getElementById('itemModal');
    const modal = new bootstrap.Modal(modalElement);
    modal.show();
}

// Configuração dos botões de filtro de categoria
function setupFilters() {
    const filterButtons = document.querySelectorAll('[role="group"] button');

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            filterButtons.forEach(btn => {
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

// Executa assim que a página carregar
document.addEventListener('DOMContentLoaded', () => {
    renderInventory(inventoryItems);
    setupFilters();
});