// ============================ SCROLL ANIMATION ============================
AOS.init({
  duration: 1200,
});

// ============================ TYPING ANIMATION ============================
var typed = new Typed(".typing", {
  strings: [
    "Olá, seja Bem Vindo!!",
    "Este projeto é dedicado a disciplina de Programação Web...",
    "Se sinta a vontade para explorar todos os projetos!!",
  ],
  typeSpeed: 60,
  BackSpeed: 100,
  loop: false,
});

const projects = [
  {
    id: "1",
    title: "Atividade 1 - Tags HTMl",
    image: "assets/Atividade-1.webp",
    link: "./atividades/atividade-1/index.html",
  },
  {
    id: "2",
    title: "Atividade 2 - Site Empresa",
    image: "assets/Atividade-2.webp",
    link: "./atividades/atividade-2/index.html",
  },
  {
    id: "3",
    title: "Atividade 3 - Tabelas",
    image: "assets/Atividade-3.webp",
    link: "./atividades/atividade-3/index.html",
  },
  {
    id: "4",
    title: "Atividade 4 - Formulário",
    image: "./assets/Atividade-4.webp",
    link: "./atividades/atividade-4/index.html",
  },
  {
    id: "5",
    title: "Projeto 1 - JM Viagens",
    image: "./assets/Projeto01.webp",
    link: "./projetos/project-1/index.html",
  },
  {
    id: "6",
    title: "Atividade 5 - Estilo CSS",
    image: "./assets/test.png",
    link: "./atividades/atividade-5/index.html",
  },
];

const projectContainer = document.getElementById("projects-content");

projects.forEach((projects) => {
  const projectCard = document.createElement("div");
  projectCard.innerHTML = `
  <div class="card" >
    <img src="${projects.image}" alt="${projects.title}" title="Acessar ${projects.title}" loading="lazy" />
    <div class="card-info">
      <h2>${projects.title}</h2>
      <a href="${projects.link}" target="_blank">Ver mais
          <i class="fa-solid fa-arrow-right"></i>
      </a>
    </div>
  </div>
  `;
  projectContainer.appendChild(projectCard);
});
