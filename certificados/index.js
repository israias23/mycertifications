$(document).ready(function () {
  $(".button").click(function () {
    $(".health, .other, .tech").show();
  });

  $(".so-tech").click(function () {
    $(".health, .other").fadeOut(200);
    $(".tech").show();
    $(".button.is-checked").removeClass("is-checked"); // Remove a classe 'is-checked' de todos os botões
    $(this).addClass("is-checked"); // Adiciona a classe 'is-checked' apenas ao botão clicado
  });

  $(".so-health").click(function () {
    $(".tech, .other").fadeOut(200);
    $(".health").show();
    $(".button.is-checked").removeClass("is-checked"); // Remove a classe 'is-checked' de todos os botões
    $(this).addClass("is-checked"); // Adiciona a classe 'is-checked' apenas ao botão clicado
  });

  $(".so-other").click(function () {
    $(".tech, .health").fadeOut(200);
    $(".other").show();
    $(".button.is-checked").removeClass("is-checked"); // Remove a classe 'is-checked' de todos os botões
    $(this).addClass("is-checked"); // Adiciona a classe 'is-checked' apenas ao botão clicado
  });
});

var buttons = document.querySelectorAll(".categories button");

// Itera sobre cada botão
buttons.forEach(function (button) {
  // Adiciona um ouvinte de evento de clique a cada botão
  button.addEventListener("click", function (event) {
    // Remove a classe 'is-checked' de qualquer botão que a possua
    document
      .querySelector(".categories .is-checked")
      .classList.remove("is-checked");
    // Adiciona a classe 'is-checked' ao botão clicado
    event.target.classList.add("is-checked");
  });
});

// Pré-carregar as imagens
const imagens = [
  "certificados/Auxiliar em Necropsia.png",
  "certificados/AVSEC.png",
  "certificados/Batismo.png",
  "certificados/Computação em nuvem.png",
  "certificados/Conceito de Responsividade.png",
  "certificados/Conclusão 2° Grau.png",
  "certificados/Concurso África que Somos.png",
  "certificados/Congresso.png",
  "certificados/Cybersecurity.png",
  "certificados/Digitação.png",
  "certificados/Diploma.png",
  "certificados/Gestão e Liderança.png",
  "certificados/GRC.png",
  "certificados/Git GitHub.png",
  "certificados/Hacking e Pentest.png",
  "certificados/Html e Css.png",
  "certificados/HTML.png",
  "certificados/Informática básica.png",
  "certificados/Informática Intermediária.png",
  "certificados/javascript.png",
  "certificados/Leito e trauma.png",
  "certificados/Lógica de Programação.png",
  "certificados/Posicionamentos Radiográficos.png",
  "certificados/Primeiros Socorros.png",
  "certificados/Processamento de imagens.png",
  "certificados/Processamento Patolológico.png",
  "certificados/Radiologia Forense.png",
  "certificados/Radiologia Industrial.png",
  "certificados/SGSO.png",
  "certificados/Software Defense IA.png",
  "certificados/Vice Lider.png",
  "certificados/Ética Profissional.png",
];
const imagensPreCarregadas = [];
for (let i = 0; i < imagens.length; i++) {
  const img = new Image();
  img.src = imagens[i];
  imagensPreCarregadas.push(img);
}

// Troca de imagens suave
const imagemElement = document.getElementById("imagem");
let indexImagemAtual = 0;

function trocarImagem() {
  indexImagemAtual = (indexImagemAtual + 1) % imagensPreCarregadas.length;
  imagemElement.src = imagensPreCarregadas[indexImagemAtual].src;
}

setInterval(trocarImagem, 7000);
