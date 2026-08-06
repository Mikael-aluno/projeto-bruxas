const botaoAudio1 = document.getElementById("botaoAudio1");
const botaoAudio2 = document.getElementById("botaoAudio2");
const botaoAudioAmbos = document.getElementById("botaoAudioAmbos");
const musica1 = document.getElementById("musica1");
const musica2 = document.getElementById("musica2");

if (botaoAudio1 && musica1) {
  botaoAudio1.addEventListener("click", () => {
    musica1.currentTime = 0;
    musica1.play().catch((erro) => {
      console.error("Não foi possível reproduzir a primeira música:", erro);
    });
  });
}

if (botaoAudio2 && musica2) {
  botaoAudio2.addEventListener("click", () => {
    musica2.currentTime = 0;
    musica2.play().catch((erro) => {
      console.error("Não foi possível reproduzir a segunda música:", erro);
    });
  });
}

if (botaoAudioAmbos && musica1 && musica2) {
  botaoAudioAmbos.addEventListener("click", () => {
    musica1.currentTime = 0;
    musica2.currentTime = 0;
    musica1.play().catch((erro) => {
      console.error("Não foi possível reproduzir a primeira música:", erro);
    });
    musica2.play().catch((erro) => {
      console.error("Não foi possível reproduzir a segunda música:", erro);
    });
  });
}

const tabButtons = document.querySelectorAll(".tab-button");
const tabPanels = document.querySelectorAll(".tab-panel");

tabButtons.forEach((botao) => {
  botao.addEventListener("click", () => {
    const alvo = botao.getAttribute("data-tab");

    tabButtons.forEach((btn) => btn.classList.remove("active"));
    tabPanels.forEach((painel) => painel.classList.remove("active"));

    botao.classList.add("active");

    const painelAtivo = document.getElementById(alvo);
    if (painelAtivo) {
      painelAtivo.classList.add("active");
    }
  });
});