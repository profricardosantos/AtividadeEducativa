/* ============================================
   ATIVIDADES EDUCACIONAIS — SCRIPT.JS
   ============================================ */

// ── Dados dos jogos ──────────────────────────
const GAMES = [
  {
    id: 1,
    emoji: "🔠",
    title: "Palavras Divertidas",
    desc: "Vamos aprender as sílabas",
    age: "6 a 7 anos",
    stars: 5,
    isNew: true,
    colorFrom: "#FFD94A",
    colorTo: "#FF7B2C",
    btnColor: "#FF7B2C",
    page: "jogos/silabas/Silabas.html",
  },
  {
    id: 2,
    emoji: "🧠",
    title: "Jogo da memória",
    desc: "Teste sua memória nesse jogo divertido!",
    age: "5–8 anos",
    stars: 4,
    isNew: false,
    colorFrom: "#FF7B2C",
    colorTo: "#FF4545",
    btnColor: "#FF4545",
    page: "jogos/memoria/memoria.html",
  },
  {
    id: 3,
    emoji: "🔤",
    title: "Alfabeto Aventura",
    desc: "Descubra cada letra do alfabeto com histórias encantadas.",
    age: "4–6 anos",
    stars: 5,
    isNew: true,
    colorFrom: "#3A9BDC",
    colorTo: "#2EC4B6",
    btnColor: "#3A9BDC",
    page: "jogos/alfabeto-aventura.html",
  },
  {
    id: 4,
    emoji: "📖",
    title: "Leitura Feliz",
    desc: "Forme palavras e frases brincando com sílabas coloridas.",
    age: "6–9 anos",
    stars: 4,
    isNew: false,
    colorFrom: "#2EC4B6",
    colorTo: "#4CC94A",
    btnColor: "#2EC4B6",
    page: "jogos/leitura-feliz.html",
  },
  {
    id: 5,
    emoji: "🌱",
    title: "Mundo das Plantas",
    desc: "Plante, regue e aprenda sobre o ciclo de vida das plantas.",
    age: "5–8 anos",
    stars: 5,
    isNew: false,
    colorFrom: "#4CC94A",
    colorTo: "#2EC4B6",
    btnColor: "#4CC94A",
    page: "jogos/mundo-das-plantas.html",
  },
  {
    id: 6,
    emoji: "🦋",
    title: "Animais do Brasil",
    desc: "Conheça a fauna brasileira em um safari cheio de curiosidades!",
    age: "4–8 anos",
    stars: 5,
    isNew: true,
    colorFrom: "#FF4D8D",
    colorTo: "#7B5EA7",
    btnColor: "#FF4D8D",
    page: "jogos/animais-do-brasil.html",
  },
  {
    id: 7,
    emoji: "🎨",
    title: "Pintando o Sete",
    desc: "Pinte ilustrações incríveis e desperte o artista que há em você!",
    age: "3–8 anos",
    stars: 4,
    isNew: false,
    colorFrom: "#FF4D8D",
    colorTo: "#FF7B2C",
    btnColor: "#FF4D8D",
    page: "jogos/pintando-o-sete.html",
  },
  {
    id: 8,
    emoji: "🎵",
    title: "Ritmo e Música",
    desc: "Toque instrumentos, siga o ritmo e crie suas próprias melodias.",
    age: "4–8 anos",
    stars: 5,
    isNew: false,
    colorFrom: "#7B5EA7",
    colorTo: "#3A9BDC",
    btnColor: "#7B5EA7",
    page: "jogos/ritmo-e-musica.html",
  },
  {
    id: 9,
    emoji: "🧠",
    title: "Jogo da Memória",
    desc: "Vire as cartas e encontre os pares em tempo recorde!",
    age: "4–9 anos",
    stars: 4,
    isNew: false,
    colorFrom: "#3A9BDC",
    colorTo: "#7B5EA7",
    btnColor: "#3A9BDC",
    page: "jogos/jogo-da-memoria.html",
  },
  {
    id: 10,
    emoji: "🔍",
    title: "Encontre as Diferenças",
    desc: "Observe as duas imagens e descubra as diferenças escondidas.",
    age: "5–10 anos",
    stars: 4,
    isNew: true,
    colorFrom: "#FF7B2C",
    colorTo: "#FFD94A",
    btnColor: "#FF7B2C",
    page: "jogos/encontre-as-diferencas.html",
  },
  {
    id: 11,
    emoji: "➗",
    title: "Tabuada Turbo",
    desc: "Treine a tabuada em modo corrida contra o relógio. Vai encarar?",
    age: "7–11 anos",
    stars: 3,
    isNew: false,
    colorFrom: "#FFD94A",
    colorTo: "#4CC94A",
    btnColor: "#4CC94A",
    page: "jogos/tabuada-turbo.html",
  },
  {
    id: 12,
    emoji: "📝",
    title: "Ditado Divertido",
    desc: "Ouça a palavra e escreva corretamente. Quanto você acerta?",
    age: "6–10 anos",
    stars: 4,
    isNew: false,
    colorFrom: "#FF4545",
    colorTo: "#FF4D8D",
    btnColor: "#FF4545",
    page: "jogos/ditado-divertido.html",
  },
  {
    id: 13,
    emoji: "🌍",
    title: "Viagem pelo Mundo",
    desc: "Explore os continentes, países e curiosidades do nosso planeta.",
    age: "6–10 anos",
    stars: 5,
    isNew: false,
    colorFrom: "#2EC4B6",
    colorTo: "#3A9BDC",
    btnColor: "#2EC4B6",
    page: "jogos/viagem-pelo-mundo.html",
  },
  {
    id: 14,
    emoji: "🧩",
    title: "Quebra-Cabeça",
    desc: "Monte peças coloridas e forme imagens lindas sobre natureza.",
    age: "3–8 anos",
    stars: 4,
    isNew: false,
    colorFrom: "#7B5EA7",
    colorTo: "#FF4D8D",
    btnColor: "#7B5EA7",
    page: "jogos/quebra-cabeca.html",
  },
  {
    id: 15,
    emoji: "✏️",
    title: "Escrita Criativa",
    desc: "Complete histórias mágicas e invente seus próprios finais!",
    age: "7–11 anos",
    stars: 5,
    isNew: true,
    colorFrom: "#FF4D8D",
    colorTo: "#3A9BDC",
    btnColor: "#FF4D8D",
    page: "jogos/escrita-criativa.html",
  },
  {
    id: 16,
    emoji: "🔭",
    title: "Astronomia Kids",
    desc: "Explore estrelas, planetas e o universo de forma bem divertida!",
    age: "6–11 anos",
    stars: 5,
    isNew: true,
    colorFrom: "#3A9BDC",
    colorTo: "#7B5EA7",
    btnColor: "#7B5EA7",
    page: "jogos/astronomia-kids.html",
  },
];

// ── Cria as estrelinhas do fundo ──────────────
function createStars() {
  const container = document.getElementById("stars");
  if (!container) return;

  const count = 28;
  const emojis = ["⭐", "✨", "🌟", "💫"];

  for (let i = 0; i < count; i++) {
    const s = document.createElement("span");
    s.classList.add("star");
    s.textContent = emojis[Math.floor(Math.random() * emojis.length)];
    s.style.left = Math.random() * 100 + "vw";
    s.style.top = Math.random() * 100 + "vh";
    s.style.animationDuration = (3 + Math.random() * 4) + "s";
    s.style.animationDelay = (Math.random() * 5) + "s";
    s.style.fontSize = (10 + Math.random() * 12) + "px";
    container.appendChild(s);
  }
}

// ── Gera estrelas de rating ───────────────────
function buildStars(n) {
  let out = "";
  for (let i = 1; i <= 5; i++) {
    out += i <= n ? "★" : "☆";
  }
  return out;
}

// ── Abre o jogo ───────────────────────────────
function openGame(id) {
  const game = GAMES.find(g => g.id === id);
  if (!game) return;
  window.location.href = game.page;
}

// ── Cria HTML de um card ──────────────────────
function buildCard(game, index) {
  const delay = (index * 50) + "ms";
  const isNew = game.isNew
    ? `<span class="badge-new">🆕 Novo!</span>`
    : "";

  return `
    <article
      class="game-card"
      tabindex="0"
      role="button"
      aria-label="Jogar ${game.title}"
      style="animation-delay:${delay}; border-color:${game.colorFrom}22;"
      onclick="openGame(${game.id})"
      onkeydown="if(event.key==='Enter'||event.key===' ') openGame(${game.id})"
    >
      ${isNew}

      <div class="card-banner"
        style="background:linear-gradient(135deg, ${game.colorFrom}, ${game.colorTo});">
        <span class="card-emoji">${game.emoji}</span>
      </div>

      <div class="card-body">
        <h3 class="card-title">${game.title}</h3>

        <p class="card-desc">${game.desc}</p>

        <div class="card-footer">
          <span class="card-age">👧 ${game.age}</span>

          <div style="display:flex;flex-direction:column;align-items:flex-end;gap:4px;">
            <span class="card-stars">${buildStars(game.stars)}</span>

            <button
              class="card-play-btn"
              style="
                background:linear-gradient(135deg, ${game.colorFrom}, ${game.colorTo});
                box-shadow:0 4px 14px ${game.btnColor}66;
              "
              onclick="event.stopPropagation(); openGame(${game.id})"
            >
              Jogar ▶
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

// ── Renderiza os cards ────────────────────────
function renderGames() {
  const grid = document.querySelector(".games-grid");
  if (!grid) return;

  grid.innerHTML = GAMES
    .map((game, i) => buildCard(game, i))
    .join("");
}

// ── Inicialização ─────────────────────────────
document.addEventListener("DOMContentLoaded", () => {
  createStars();
  renderGames();
});
