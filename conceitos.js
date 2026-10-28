
const concepts = [
    {
        number: "01",
        title: "Atenção",
        category: "A mente",
        definition:
            "A capacidade de selecionar aquilo que recebe nossos recursos mentais em meio a inúmeros estímulos.",
        explanation:
            "Aquilo a que prestamos atenção ganha espaço na nossa experiência, enquanto outras coisas permanecem em segundo plano.",
        example:
            "Ler um livro com o celular ao lado e perceber que cada notificação interrompe o raciocínio.",
        reflection:
            "O que tem recebido a maior parte da sua atenção — e por quê?"
    },
    {
        number: "02",
        title: "Distração",
        category: "A mente",
        definition:
            "O desvio da atenção de uma atividade ou intenção para outro estímulo ou pensamento.",
        explanation:
            "Nem toda distração vem de fora. Às vezes, nossa própria mente procura escapar de uma tarefa difícil ou desconfortável.",
        example:
            "Abrir uma rede social durante os estudos sem perceber o momento em que decidiu fazê-lo.",
        reflection:
            "Você escolhe aquilo que consome ou apenas acompanha o próximo estímulo?"
    },
    {
        number: "03",
        title: "Sobrecarga cognitiva",
        category: "A mente",
        definition:
            "Uma situação em que as exigências sobre a memória de trabalho ultrapassam sua capacidade disponível.",
        explanation:
            "Tentar processar muitas informações ao mesmo tempo pode prejudicar a compreensão, a retenção e a tomada de decisões.",
        example:
            "Assistir a uma aula, responder mensagens e tentar memorizar o conteúdo simultaneamente.",
        reflection:
            "Você está aprendendo de fato ou apenas acumulando informações?"
    },
    {
        number: "04",
        title: "Solidão",
        category: "Existência",
        definition:
            "A experiência subjetiva de sentir falta de conexão significativa com outras pessoas.",
        explanation:
            "A solidão não depende apenas da quantidade de pessoas ao redor, mas da qualidade dos vínculos e da sensação de pertencimento.",
        example:
            "Estar em uma reunião cheia de pessoas e sentir que ninguém conhece aquilo que realmente importa para você.",
        reflection:
            "Em quais relações você consegue existir sem precisar representar um papel?"
    },
    {
        number: "05",
        title: "Finitude",
        category: "Existência",
        definition:
            "A condição de tudo aquilo que possui limites, duração e um término.",
        explanation:
            "Reconhecer que o tempo é limitado pode alterar nossas prioridades e tornar nossas escolhas mais conscientes.",
        example:
            "Perceber que adiar continuamente uma conversa importante também significa deixar passar parte do tempo disponível.",
        reflection:
            "Se o seu tempo não fosse infinito, o que deixaria de tratar como secundário?"
    },
    {
        number: "06",
        title: "Liberdade",
        category: "Existência",
        definition:
            "A possibilidade de agir e escolher, dentro de condições e limites concretos.",
        explanation:
            "Ser livre não significa necessariamente poder fazer tudo, mas compreender as condições das próprias escolhas e assumir responsabilidades.",
        example:
            "Escolher estudar em vez de continuar distraído, mesmo quando a segunda opção parece mais confortável.",
        reflection:
            "Quais escolhas são realmente suas e quais você faz por hábito ou pressão?"
    },
    {
        number: "07",
        title: "Possibilidade",
        category: "Existência",
        definition:
            "Aquilo que pode acontecer ou vir a ser, embora ainda não seja uma realidade concreta.",
        explanation:
            "As possibilidades ampliam o horizonte da vida, mas imaginar todos os caminhos também pode dificultar a decisão de seguir um deles.",
        example:
            "Passar tanto tempo imaginando diferentes carreiras que você nunca começa a explorar nenhuma delas.",
        reflection:
            "Em que momento considerar possibilidades se transforma em fugir de uma escolha?"
    },
    {
        number: "08",
        title: "Identidade",
        category: "Existência",
        definition:
            "O conjunto de características, experiências, valores e narrativas por meio dos quais alguém compreende quem é.",
        explanation:
            "A identidade possui continuidades, mas também se transforma com o tempo, as relações e as experiências.",
        example:
            "Reavaliar uma opinião antiga depois de conhecer argumentos e experiências que você desconhecia.",
        reflection:
            "Você mantém uma convicção porque acredita nela ou porque ela faz parte da imagem que construiu de si?"
    },
    {
        number: "09",
        title: "Pensamento crítico",
        category: "Conhecimento",
        definition:
            "A prática de examinar informações, argumentos e pressupostos antes de aceitar uma conclusão.",
        explanation:
            "Pensar criticamente não é discordar de tudo, mas avaliar evidências, reconhecer limites e considerar alternativas.",
        example:
            "Antes de compartilhar uma notícia, procurar a fonte original e verificar se ela sustenta a afirmação.",
        reflection:
            "Você aplica aos próprios argumentos o mesmo rigor que aplica aos argumentos dos outros?"
    },
    {
        number: "10",
        title: "Viés de confirmação",
        category: "Conhecimento",
        definition:
            "A tendência de favorecer informações que confirmam crenças anteriores e desconsiderar evidências contrárias.",
        explanation:
            "Uma ideia familiar pode parecer verdadeira não porque foi bem demonstrada, mas porque combina com aquilo que já pensamos.",
        example:
            "Ler apenas opiniões que concordam com você sobre um assunto político.",
        reflection:
            "Qual evidência faria você reconsiderar uma convicção importante?"
    },
    {
        number: "11",
        title: "Economia da atenção",
        category: "Sociedade",
        definition:
            "Um modelo em que a atenção humana se torna um recurso disputado por serviços, plataformas e produtores de conteúdo.",
        explanation:
            "Quando o tempo de permanência influencia o lucro, certos produtos são desenhados para manter o usuário engajado pelo maior período possível.",
        example:
            "Continuar rolando uma página de vídeos curtos mesmo depois de decidir que já era hora de parar.",
        reflection:
            "Os serviços que você utiliza respeitam seus objetivos ou competem por seu tempo?"
    },
    {
        number: "12",
        title: "Metacognição",
        category: "Conhecimento",
        definition:
            "A capacidade de observar, compreender e regular os próprios processos de pensamento e aprendizagem.",
        explanation:
            "É pensar sobre como você pensa: reconhecer o que compreendeu, onde errou e qual estratégia pode funcionar melhor.",
        example:
            "Depois de estudar, tentar explicar o assunto sem consultar o material para identificar lacunas na compreensão.",
        reflection:
            "Como você distingue a sensação de ter aprendido da capacidade de realmente explicar?"
    }
];

const grid = document.querySelector("#concept-grid");
const searchInput = document.querySelector("#search-input");
const count = document.querySelector("#concept-count");
const emptyState = document.querySelector("#empty-state");
const clearSearchButton = document.querySelector("#clear-search");
const filterButtons = document.querySelectorAll(".filter-button");

let activeCategory = "Todos";
let searchTerm = "";

function normalizeText(text) {
    return text
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase();
}

function createCard(concept) {
    const card = document.createElement("article");
    card.className = "concept-card";

    const top = document.createElement("div");
    top.className = "card-top";

    const number = document.createElement("span");
    number.className = "card-number";
    number.textContent = concept.number;

    const category = document.createElement("span");
    category.className = "card-category";
    category.textContent = concept.category;

    top.append(number, category);

    const title = document.createElement("h3");
    title.textContent = concept.title;

    const definition = document.createElement("p");
    definition.className = "card-definition";
    definition.textContent = concept.definition;

    const explanation = document.createElement("p");
    explanation.className = "card-example";
    explanation.textContent = concept.explanation;

    const example = document.createElement("div");
    example.className = "card-example";

    const exampleLabel = document.createElement("strong");
    exampleLabel.textContent = "No cotidiano";

    const exampleText = document.createElement("p");
    exampleText.textContent = concept.example;

    example.append(exampleLabel, exampleText);

    const toggle = document.createElement("button");
    toggle.className = "reflection-toggle";
    toggle.type = "button";
    toggle.setAttribute("aria-expanded", "false");

    const toggleText = document.createElement("span");
    toggleText.textContent = "Uma pergunta para pensar";

    const toggleIcon = document.createElement("span");
    toggleIcon.setAttribute("aria-hidden", "true");
    toggleIcon.textContent = "+";

    toggle.append(toggleText, toggleIcon);

    const reflection = document.createElement("p");
    reflection.className = "reflection-answer";
    reflection.textContent = concept.reflection;
    reflection.hidden = true;

    toggle.addEventListener("click", () => {
        const isExpanded = toggle.getAttribute("aria-expanded") === "true";

        toggle.setAttribute("aria-expanded", String(!isExpanded));
        reflection.hidden = isExpanded;
        toggleIcon.textContent = isExpanded ? "+" : "−";
    });

    card.append(
        top,
        title,
        definition,
        explanation,
        example,
        toggle,
        reflection
    );

    return card;
}

function renderConcepts() {
    const filtered = concepts.filter((concept) => {
        const matchesCategory =
            activeCategory === "Todos" ||
            concept.category === activeCategory;

        const searchableContent = normalizeText([
            concept.title,
            concept.category,
            concept.definition,
            concept.explanation,
            concept.example,
            concept.reflection
        ].join(" "));

        const matchesSearch =
            searchableContent.includes(normalizeText(searchTerm));

        return matchesCategory && matchesSearch;
    });

    grid.replaceChildren();

    filtered.forEach((concept) => {
        grid.appendChild(createCard(concept));
    });

    count.textContent =
        `${filtered.length} ${filtered.length === 1 ? "conceito" : "conceitos"}`;

    emptyState.hidden = filtered.length !== 0;
    grid.hidden = filtered.length === 0;
}

filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
        activeCategory = button.dataset.category;

        filterButtons.forEach((item) => {
            const isActive = item === button;
            item.classList.toggle("active", isActive);
            item.setAttribute("aria-pressed", String(isActive));
        });

        renderConcepts();
    });

    button.setAttribute(
        "aria-pressed",
        String(button.dataset.category === activeCategory)
    );
});

searchInput.addEventListener("input", (event) => {
    searchTerm = event.target.value.trim();
    renderConcepts();
});

clearSearchButton.addEventListener("click", () => {
    searchInput.value = "";
    searchTerm = "";
    activeCategory = "Todos";

    filterButtons.forEach((button) => {
        const isActive = button.dataset.category === "Todos";
        button.classList.toggle("active", isActive);
        button.setAttribute("aria-pressed", String(isActive));
    });

    renderConcepts();
    searchInput.focus();
});

// Atalho "/" para focar a busca sem interferir na digitação.
document.addEventListener("keydown", (event) => {
    const target = event.target;
    const isTyping =
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target.isContentEditable;

    if (
        event.key === "/" &&
        !isTyping &&
        !event.ctrlKey &&
        !event.metaKey &&
        !event.altKey
    ) {
        event.preventDefault();
        searchInput.focus();
    }

    if (event.key === "Escape" && document.activeElement === searchInput) {
        searchInput.value = "";
        searchTerm = "";
        renderConcepts();
        searchInput.blur();
    }
});

renderConcepts();
