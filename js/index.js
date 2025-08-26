let currentCardIndex = 0;
const cardElement = document.querySelector('.card');
const currentCardElement = document.getElementById('current-card');
const totalCardsElement = document.getElementById('total-cards');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const odsButtonsContainer = document.querySelector('.ods-buttons');

const odsCards = [
    {
        id: 1,
        title: "Erradicação da Pobreza",
        description: "Acabar com a pobreza em todas as suas formas, em todos os lugares. Meta inclui reduzir pelo menos à metade a proporção de pessoas que vivem na pobreza.",
        image: "https://placehold.co/600x400/e5243b/white?text=ODS+1",
        difficulty: "Alta",
        impact: "Máximo",
        urgency: "Crítica",
        deadline: "2030",
        colorClass: "ods-1"
    },
    {
        id: 2,
        title: "Fome Zero e Agricultura Sustentável",
        description: "Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição e promover a agricultura sustentável.",
        image: "https://placehold.co/600x400/dda63a/white?text=ODS+2",
        difficulty: "Alta",
        impact: "Máximo",
        urgency: "Crítica",
        deadline: "2030",
        colorClass: "ods-2"
    },
    {
        id: 3,
        title: "Saúde e Bem-Estar",
        description: "Assegurar uma vida saudável e promover o bem-estar para todos, em todas as idades.",
        image: "https://placehold.co/600x400/4c9f38/white?text=ODS+3",
        difficulty: "Alta",
        impact: "Máximo",
        urgency: "Alta",
        deadline: "2030",
        colorClass: "ods-3"
    },
    {
        id: 4,
        title: "Educação de Qualidade",
        description: "Assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todos.",
        image: "https://placehold.co/600x400/c5192d/white?text=ODS+4",
        difficulty: "Média",
        impact: "Alto",
        urgency: "Alta",
        deadline: "2030",
        colorClass: "ods-4"
    },
    {
        id: 5,
        title: "Igualdade de Gênero",
        description: "Alcançar a igualdade de gênero e empoderar todas as mulheres e meninas.",
        image: "https://placehold.co/600x400/ff3a21/white?text=ODS+5",
        difficulty: "Alta",
        impact: "Alto",
        urgency: "Alta",
        deadline: "2030",
        colorClass: "ods-5"
    },
    {
        id: 6,
        title: "Água Potável e Saneamento",
        description: "Garantir disponibilidade e manejo sustentável da água e saneamento para todos.",
        image: "https://placehold.co/600x400/26bde2/white?text=ODS+6",
        difficulty: "Média",
        impact: "Alto",
        urgency: "Alta",
        deadline: "2030",
        colorClass: "ods-6"
    },
    {
        id: 7,
        title: "Energia Limpa e Acessível",
        description: "Garantir acesso à energia barata, confiável, sustentável e renovável para todos.",
        image: "https://placehold.co/600x400/fcc30b/black?text=ODS+7",
        difficulty: "Média",
        impact: "Alto",
        urgency: "Alta",
        deadline: "2030",
        colorClass: "ods-7"
    },
    {
        id: 8,
        title: "Trabalho Decente e Crescimento Econômico",
        description: "Promover o crescimento econômico sustentado, inclusivo e sustentável, emprego pleno e produtivo e trabalho decente para todos.",
        image: "https://placehold.co/600x400/a21942/white?text=ODS+8",
        difficulty: "Alta",
        impact: "Alto",
        urgency: "Média",
        deadline: "2030",
        colorClass: "ods-8"
    },
    {
        id: 9,
        title: "Indústria, Inovação e Infraestrutura",
        description: "Construir infraestruturas resilientes, promover a industrialização inclusiva e sustentável e fomentar a inovação.",
        image: "https://placehold.co/600x400/fd6925/white?text=ODS+9",
        difficulty: "Alta",
        impact: "Alto",
        urgency: "Média",
        deadline: "2030",
        colorClass: "ods-9"
    },
    {
        id: 10,
        title: "Redução das Desigualdades",
        description: "Reduzir a desigualdade dentro dos países e entre eles.",
        image: "https://placehold.co/600x400/dd1367/white?text=ODS+10",
        difficulty: "Alta",
        impact: "Alto",
        urgency: "Alta",
        deadline: "2030",
        colorClass: "ods-10"
    },
    {
        id: 11,
        title: "Cidades e Comunidades Sustentáveis",
        description: "Tornar as cidades e os assentamentos humanos inclusivos, seguros, resilientes e sustentáveis.",
        image: "https://placehold.co/600x400/fd9d24/black?text=ODS+11",
        difficulty: "Alta",
        impact: "Alto",
        urgency: "Alta",
        deadline: "2030",
        colorClass: "ods-11"
    },
    {
        id: 12,
        title: "Consumo e Produção Responsáveis",
        description: "Assegurar padrões de produção e de consumo sustentáveis.",
        image: "https://placehold.co/600x400/bf8b2e/white?text=ODS+12",
        difficulty: "Média",
        impact: "Alto",
        urgency: "Alta",
        deadline: "2030",
        colorClass: "ods-12"
    },
    {
        id: 13,
        title: "Ação Contra a Mudança Global do Clima",
        description: "Tomar medidas urgentes para combater a mudança do clima e seus impactos.",
        image: "https://placehold.co/600x400/3f7e44/white?text=ODS+13",
        difficulty: "Alta",
        impact: "Máximo",
        urgency: "Crítica",
        deadline: "2030",
        colorClass: "ods-13"
    },
    {
        id: 14,
        title: "Vida na Água",
        description: "Conservação e uso sustentável dos oceanos, dos mares e dos recursos marinhos para o desenvolvimento sustentável.",
        image: "https://placehold.co/600x400/0a97d9/white?text=ODS+14",
        difficulty: "Alta",
        impact: "Alto",
        urgency: "Alta",
        deadline: "2030",
        colorClass: "ods-14"
    },
    {
        id: 15,
        title: "Vida Terrestre",
        description: "Proteger, recuperar e promover o uso sustentável dos ecossistemas terrestres, gerir de forma sustentável as florestas, combater a desertificação, deter e reverter a degradação da terra e deter a perda de biodiversidade.",
        image: "https://placehold.co/600x400/56c02b/white?text=ODS+15",
        difficulty: "Alta",
        impact: "Alto",
        urgency: "Alta",
        deadline: "2030",
        colorClass: "ods-15"
    },
    {
        id: 16,
        title: "Paz, Justiça e Instituições Eficazes",
        description: "Promover sociedades pacíficas e inclusivas para o desenvolvimento sustentável, proporcionar o acesso à justiça para todos e construir instituições eficazes, responsáveis e inclusivas em todos os níveis.",
        image: "https://placehold.co/600x400/00689d/white?text=ODS+16",
        difficulty: "Alta",
        impact: "Alto",
        urgency: "Alta",
        deadline: "2030",
        colorClass: "ods-16"
    },
    {
        id: 17,
        title: "Parcerias e Meios de Implementação",
        description: "Fortalecer os meios de implementação e revitalizar a parceria global para o desenvolvimento sustentável.",
        image: "https://placehold.co/600x400/19486a/white?text=ODS+17",
        difficulty: "Alta",
        impact: "Alto",
        urgency: "Média",
        deadline: "2030",
        colorClass: "ods-17"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    totalCardsElement.textContent = odsCards.length;
    createOdsButtons();
    showCard(currentCardIndex);
    setupEventListeners();
});

function createOdsButtons() {
    odsCards.forEach((card, index) => {
        const button = document.createElement('button');
        button.className = `ods-btn ${card.colorClass}`;
        button.textContent = card.id;
        button.title = card.title;
        button.addEventListener('click', () => showCard(index));
        odsButtonsContainer.appendChild(button);
    });
}

function setupEventListeners() {
    // Virar a carta ao clicar
    cardElement.addEventListener('click', () => {
        cardElement.style.transform = cardElement.style.transform === 'rotateY(180deg)' ? 'rotateY(0deg)' : 'rotateY(180deg)';
    });

    // Navegação entre cartas
    prevBtn.addEventListener('click', () => {
        if (currentCardIndex > 0) {
            showCard(currentCardIndex - 1);
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentCardIndex < odsCards.length - 1) {
            showCard(currentCardIndex + 1);
        }
    });

    // Navegação por teclado
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft' && currentCardIndex > 0) {
            showCard(currentCardIndex - 1);
        } else if (e.key === 'ArrowRight' && currentCardIndex < odsCards.length - 1) {
            showCard(currentCardIndex + 1);
        }
    });
}

function showCard(index) {
    cardElement.style.transform = 'rotateY(0deg)';
    
    currentCardIndex = index;
    
    const cardData = odsCards[index];
    
    // Atualizar contador
    currentCardElement.textContent = index + 1;
    
    // Atualizar botões de navegação
    prevBtn.disabled = index === 0;
    nextBtn.disabled = index === odsCards.length - 1;
    
    // Atualizar botões de seleção de ODS
    document.querySelectorAll('.ods-btn').forEach((btn, i) => {
        if (i === index) {
            btn.classList.add('current');
        } else {
            btn.classList.remove('current');
        }
    });
    
    // carta
    const cardHTML = `
        <div class="card-front">
            <div class="card-header ${cardData.colorClass}">
                <div class="card-title">${cardData.title}</div>
                <div class="card-badge">ODS ${cardData.id}</div>
            </div>
            <div class="card-image">
                <img src="${cardData.image}" alt="${cardData.title}" class="card-img">
            </div>
            <div class="card-content">
                <div class="card-description">
                    ${cardData.description}
                </div>
                <div class="card-stats">
                    <div class="stat">
                        Dificuldade
                        <div class="stat-value">${cardData.difficulty}</div>
                    </div>
                    <div class="stat">
                        Impacto
                        <div class="stat-value">${cardData.impact}</div>
                    </div>
                    <div class="stat">
                        Urgência
                        <div class="stat-value">${cardData.urgency}</div>
                    </div>
                    <div class="stat">
                        Prazo
                        <div class="stat-value">${cardData.deadline}</div>
                    </div>
                </div>
            </div>
            <div class="card-footer">
                ODS - Objetivos de Desenvolvimento Sustentável
            </div>
        </div>
        <div class="card-back">
            <div class="logo">LIMBO</div>
            <div class="card-back-pattern"></div>
        </div>
    `;
    
    // Atualizar o conteúdo da carta
    cardElement.innerHTML = cardHTML;
}