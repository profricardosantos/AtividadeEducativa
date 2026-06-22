const fruits = [
  {
    name: "LARANJA",
    syllables: ["LA", "RAN", "JA"],
    image: "imagens/laranja.jpg"
  },
  {
    name: "BANANA",
    syllables: ["BA", "NA", "NA"],
    image: "imagens/banana.jpg"
  },
  {
    name: "MELANCIA",
    syllables: ["ME", "LAN", "CI", "A"],
    image: "imagens/melancia.jpg"
  },
  {
    name: "UVA",
    syllables: ["U", "VA"],
    image: "imagens/uva.png"
  },
  {
    name: "MORANGO",
    syllables: ["MO", "RAN", "GO"],
    image: "imagens/morango.jpg"
  },
  {
    name: "ABACAXI",
    syllables: ["A", "BA", "CA", "XI"],
    image: "imagens/abacaxi.jpg"
  },
  {
    name: "PERA",
    syllables: ["PE", "RA"],
    image: "imagens/pera.webp"
  },
  {
    name: "MAÇÃ",
    syllables: ["MA", "ÇÃ"],
    image: "imagens/maça.png"
  },
  {
    name: "KIWI",
    syllables: ["KI", "WI"],
    image: "imagens/kiwi.jpg"
  },
  {
    name: "LIMÃO",
    syllables: ["LI", "MÃO"],
    image: "imagens/limao.jpg"
  },
  {
    name: "COCO",
    syllables: ["CO", "CO"],
    image: "imagens/coco.jpg"
  },
  {
    name: "MANGA",
    syllables: ["MAN", "GA"],
    image: "imagens/manga.jpg"
  },
  {
    name: "GOIABA",
    syllables: ["GOI", "A", "BA"],
    image: "imagens/goiaba.jpg"
  },
  {
    name: "CAJU",
    syllables: ["CA", "JU"],
    image: "imagens/caju.jpg"
  },
  {
    name: "JACA",
    syllables: ["JA", "CA"],
    image: "imagens/jaca.jpg"
  },
  {
    name: "MAMÃO",
    syllables: ["MA", "MÃO"],
    image: "imagens/mamao.jpg"
  },
  {
    name: "MELÃO",
    syllables: ["ME", "LÃO"],
    image: "imagens/melao.jpg"
  },
  {
    name: "JABUTICABA",
    syllables: ["JA", "BU", "TI", "CA", "BA"],
    image: "imagens/jabuticaba.jpg"
  },
  {
    name: "TANGERINA",
    syllables: ["TAN", "GE", "RI", "NA"],
    image: "imagens/tangerina.jpg"
  },
  {
    name: "CEREJA",
    syllables: ["CE", "RE", "JA"],
    image: "imagens/cereja.jpg"
  }
];
  
  const randomSyllables = [
    "BO", "TE", "ZU", "FI", "LO",
    "PA", "NE", "XI", "TO", "RU"
  ];
  
  const fruitImage = document.getElementById("fruit-image");
  const slotsContainer = document.getElementById("slots");
  const optionsContainer = document.getElementById("options");
  const nextBtn = document.getElementById("next-btn");
  const scoreElement = document.getElementById("score");
  
  let currentFruit = 0;
  let draggedSyllable = null;
  let score = 0;
  let completedFruit = false;
  
  function loadFruit() {
  
    const fruit = fruits[currentFruit];
  
    fruitImage.src = fruit.image;
  
    slotsContainer.innerHTML = "";
    optionsContainer.innerHTML = "";
  
    completedFruit = false;
  
    nextBtn.disabled = true;
    nextBtn.textContent = "➡ Próxima fruta";
  
    // quadrados
    fruit.syllables.forEach((correctSyllable, index) => {
  
      const slot = document.createElement("div");
  
      slot.classList.add("slot");
  
      slot.addEventListener("dragover", (e) => {
        e.preventDefault();
      });
  
      slot.addEventListener("drop", () => {
  
        if (!draggedSyllable) return;
  
        const syllable = draggedSyllable.textContent;
  
        // impede trocar
        if (slot.textContent !== "") return;
  
        // acertou
        if (syllable === fruit.syllables[index]) {
  
          slot.textContent = syllable;
  
          slot.classList.add("correct");
  
          draggedSyllable.remove();
  
          checkVictory();
  
        } else {
  
          slot.classList.add("wrong");
  
          setTimeout(() => {
            slot.classList.remove("wrong");
          }, 400);
  
        }
  
      });
  
      slotsContainer.appendChild(slot);
  
    });
  
    // sílabas corretas
    let options = [...fruit.syllables];
  
    // sílabas aleatórias
    while (options.length < fruit.syllables.length + 4) {
  
      const random =
        randomSyllables[
          Math.floor(Math.random() * randomSyllables.length)
        ];
  
      if (!options.includes(random)) {
        options.push(random);
      }
  
    }
  
    // embaralhar
    options.sort(() => Math.random() - 0.5);
  
    // criar opções
    options.forEach((syllable) => {
  
      const option = document.createElement("div");
  
      option.classList.add("option");
  
      option.textContent = syllable;
  
      option.draggable = true;
  
      option.addEventListener("dragstart", () => {
        draggedSyllable = option;
      });
  
      optionsContainer.appendChild(option);
  
    });
  
  }
  
  // verificar vitória
  function checkVictory() {
  
    const slots = document.querySelectorAll(".slot");
  
    let completed = true;
  
    slots.forEach(slot => {
  
      if (slot.textContent === "") {
        completed = false;
      }
  
    });
  
    if (completed && !completedFruit) {
  
      completedFruit = true;
  
      score++;
  
      scoreElement.textContent = score;
  
      nextBtn.disabled = false;
  
      nextBtn.textContent = "✅ Próxima fruta";
  
    }
  
  }
  
  // botão próxima fruta
  nextBtn.addEventListener("click", () => {
  
    if (!completedFruit) {
  
      alert("😊 Monte a palavra primeiro!");
  
      return;
  
    }
  
    currentFruit++;
  
    // terminou todas
    if (currentFruit >= fruits.length) {
  
      alert("🏆 Fim do jogo!\nPontuação final: " + score);
  
      currentFruit = 0;
  
      score = 0;
  
      scoreElement.textContent = score;
  
    }
  
    loadFruit();
  
  });
  
  // iniciar
  loadFruit();