const btnComecar =
document.getElementById("btnComecar");

const btnOpcoes =
document.getElementById("btnOpcoes");

const painelOpcoes =
document.getElementById("painelOpcoes");

const menu =
document.getElementById("menu");

const jogo =
document.getElementById("jogo");

const tabuleiro =
document.getElementById("tabuleiro");

const nivelSelect =
document.getElementById("nivel");

const textoNivel =
document.getElementById("textoNivel");

const voltarMenu =
document.getElementById("voltarMenu");

const telaFinal =
document.getElementById("telaFinal");

const btnVoltarMenuFinal =
document.getElementById("btnVoltarMenuFinal");

let primeiraCarta = null;
let segundaCarta = null;
let bloqueio = false;

let nivelAtual = 1;

/* =================================
   SÍLABAS
================================= */

const silabas = [

    "BA","BE","BI","BO",
    "CA","CE","CI","CO",
    "DA","DE","DI","DO",
    "FA","FE","FI","FO",
    "GA","GE","GI","GO",
    "LA","LE","LI","LO",
    "MA","ME","MI","MO",
    "PA","PE","PI","PO",
    "RA","RE","RI","RO",
    "SA","SE","SI","SO",
    "TA","TE","TI","TO"
];

/* =================================
   IMAGENS
================================= */

const imagens = [

    { valor: "BALEIA", imagem: "🐳" },
    { valor: "CASA", imagem: "🏠" },
    { valor: "BOLA", imagem: "⚽" },
    { valor: "GATO", imagem: "🐱" },
    { valor: "PATO", imagem: "🦆" },
    { valor: "MAÇA", imagem: "🍎" },
    { valor: "SAPO", imagem: "🐸" },
    { valor: "LUA", imagem: "🌙" }

];

/* =================================
   MENU
================================= */

btnOpcoes.addEventListener("click", () => {

    painelOpcoes.classList.toggle("hidden");

});

btnComecar.addEventListener("click", iniciarJogo);

voltarMenu.addEventListener("click", () => {

    jogo.classList.add("hidden");

    menu.classList.remove("hidden");

});

/* =================================
   INICIAR JOGO
================================= */

function iniciarJogo() {

    menu.classList.add("hidden");

    jogo.classList.remove("hidden");

    nivelAtual =
    parseInt(nivelSelect.value);

    textoNivel.innerText =
    `Nível ${nivelAtual}`;

    criarCartas(nivelAtual);
}

/* =================================
   CRIAR CARTAS
================================= */

function criarCartas(nivel) {

    tabuleiro.innerHTML = "";

    primeiraCarta = null;
    segundaCarta = null;

    /* =============================
       NÍVEIS 1-10
    ============================= */

    if (nivel <= 10) {

        let escolhidas = silabas
        .sort(() => Math.random() - 0.5)
        .slice(0, 8);

        let cartas =
        [...escolhidas, ...escolhidas];

        cartas.sort(() => Math.random() - 0.5);

        cartas.forEach(item => {

            criarCarta(item, item);

        });
    }

    /* =============================
       NÍVEIS 11-20
    ============================= */

    else {

        let cartas = [];

        imagens.forEach(item => {

            cartas.push({

                valor: item.valor,
                texto: item.valor
            });

            cartas.push({

                valor: item.valor,
                texto: item.imagem
            });
        });

        cartas.sort(() => Math.random() - 0.5);

        cartas.forEach(item => {

            criarCarta(
                item.valor,
                item.texto
            );

        });
    }
}

/* =================================
   CRIAR CARTA
================================= */

function criarCarta(valor, texto) {

    const carta =
    document.createElement("div");

    carta.classList.add("carta");

    carta.dataset.valor = valor;

    carta.innerHTML = texto;

    carta.addEventListener(
        "click",
        virarCarta
    );

    tabuleiro.appendChild(carta);
}

/* =================================
   VIRAR CARTA
================================= */

function virarCarta() {

    if (bloqueio) return;

    if (this === primeiraCarta) return;

    if (this.classList.contains("acertou"))
    return;

    this.classList.add("aberta");

    if (!primeiraCarta) {

        primeiraCarta = this;

        return;
    }

    segundaCarta = this;

    verificarPar();
}

/* =================================
   VERIFICAR PAR
================================= */

function verificarPar() {

    let igual =

    primeiraCarta.dataset.valor ===
    segundaCarta.dataset.valor;

    if (igual) {

        primeiraCarta.classList.add(
            "acertou"
        );

        segundaCarta.classList.add(
            "acertou"
        );

        resetar();

        verificarVitoria();
    }

    else {

        bloqueio = true;

        setTimeout(() => {

            primeiraCarta.classList.remove(
                "aberta"
            );

            segundaCarta.classList.remove(
                "aberta"
            );

            resetar();

        }, 900);
    }
}

/* =================================
   RESETAR
================================= */

function resetar() {

    primeiraCarta = null;

    segundaCarta = null;

    bloqueio = false;
}

/* =================================
   VITÓRIA
================================= */

function verificarVitoria() {

    const acertadas =
    document.querySelectorAll(".acertou");

    const total =
    document.querySelectorAll(".carta");

    if (acertadas.length === total.length) {

        setTimeout(() => {

            telaFinal.classList.remove(
                "hidden"
            );

        }, 500);
    }
}

/* =================================
   VOLTAR MENU FINAL
================================= */

btnVoltarMenuFinal.addEventListener(
"click", () => {

    telaFinal.classList.add(
        "hidden"
    );

    jogo.classList.add("hidden");

    menu.classList.remove("hidden");

});