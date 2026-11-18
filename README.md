# 🛡️ Hylian Vault — Catálogo Interativo de Inventário RPG

O **Hylian Vault** é uma aplicação web responsiva desenvolvida como projeto acadêmico de Desenvolvimento de Interfaces. Inspirada na organização de catálogos de jogos (como o inventário de *Blox Fruits*) e ambientada na temática clássica da franquia *The Legend of Zelda*, a plataforma permite explorar equipamentos, filtrar itens por categoria e inspecionar métricas técnicas de acessibilidade visual (**WCAG**).

---

## 🎯 Funcionalidades Implementadas

* **Catálogo Dinâmico de Itens:** Renderização automática de cards via JavaScript (`main.js`) contendo armas, escudos, poções e relíquias, com classificação por raridade (*Comum, Raro, Épico e Lendário*).
* **Sistema de Filtragem por Categoria:** Navegação rápida entre todos os itens ou filtragem específica (*Armas, Escudos, Poções, Relíquias*) sem recarregar a página.
* **Carrossel de Destaques:** Banner interativo no topo da página exibindo os itens lendários do acervo, com controles de navegação adaptados tanto para o tema escuro quanto para o claro.
* **Barra de Acessibilidade Completa:**
  * **Escala de Tipografia (`A-`, `A`, `A+`):** Permite aumentar ou diminuir o tamanho da fonte de toda a interface em tempo real (de 80% a 140%).
  * **Alternância de Tema (Modo Escuro / Modo Claro):** Troca dinâmica de esquema de cores preservando a legibilidade e o conforto visual.
* **Inspeção Técnica WCAG (Modal):** Cada item possui um painel detalhado que exibe sua descrição e a pontuação real de contraste de cores conforme as diretrizes **WCAG AA / AAA**.
* **Interface de Autenticação:** Modal de login acessível integrado à barra de navegação.

---

## 🛠️ Tecnologias Utilizadas

* **HTML5 Semântico:** Estruturação acessível com atributos `aria-label`, roles e hierarquia clara de conteúdo.
* **CSS3 Customizado (`style.css`):** Estilização de cards, efeitos de elevação (*hover*), suporte a variáveis de tema e adaptação de contraste para controles do carrossel.
* **Bootstrap 5.3 & Bootstrap Icons:** Grid responsivo, sistema de modais, carrossel, badges e iconografia vetorial.
* **JavaScript Vanilla (`main.js`):** Manipulação do DOM, renderização dinâmica do catálogo, lógica de filtragem e controles de acessibilidade.
* **Git & GitHub:** Controle de versão e hospedagem do código-fonte.

---

## 📁 Estrutura de Pastas do Projeto

```text
Projeto_DevInterface/
├── index.html          # Estrutura principal, navbar, carrossel e modais
├── css/
│   └── style.css       # Estilos personalizados, temas e ajustes de contraste
├── js/
│   └── main.js         # Base de dados dos itens, filtros e lógica de acessibilidade
└── README.md           # Documentação do projeto