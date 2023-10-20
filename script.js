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
    title: "Atividade 1 - Tags",
    image: "assets/Atividade-1.webp",
    link: "./atividades/atividade-1/index.html",
  },
  {
    id: "2",
    title: "Atividade 2 - Empresa",
    image: "assets/Atividade-2.webp",
    link: "./atividades/atividade-2/index.html",
  },
  {
    id: "3",
    title: "Atividade 3 -Tables",
    image: "assets/Atividade-3.webp",
    link: "./atividades/atividade-3/index.html",
  },
  {
    id: "4",
    title: "Atividade 4 - Forms",
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
    title: "Atividade 5 - CSS Inline",
    image: "./assets/Atividade-5.png",
    link: "./atividades/atividade-5/index.html",
  },
  {
    id: "7",
    title: "Atividade Extra - CSS",
    image: "./assets/Atividade-extra-5.png",
    link: "./atividades/atividade-5/atividade-extra/index.html",
  },
  {
    id: "8",
    title: "Atividade 6 - Div e Span",
    image: "./assets/Atividade-6.png",
    link: "./atividades/atividade-6/index.html",
  },
  {
    id: "9",
    title: "Atividade 7 - Family Fonts",
    image: "./assets/Atividade-7.png",
    link: "./atividades/atividade-7/index.html",
  },
  {
    id: "10",
    title: "Atividade 8 - Galeria",
    image: "./assets/Atividade-8.png",
    link: "./atividades/atividade-8/index.html",
  },
  {
    id: "11",
    title: "Atividade 9 - Position e Display",
    image: "./assets/Atividade-9.png",
    link: "./atividades/atividade-9/index.html",
  },
  {
    id: "12",
    title: "Atividade 10 - Noticias",
    image: "./assets/Atividade-10.png",
    link: "./atividades/atividade-10/index.html",
  },
  {
    id: "13",
    title: "Atividade 11 - HTML Semântico",
    image: "./assets/Atividade-11.png",
    link: "./atividades/atividade-11/index.html",
  },
];

const projectContainer = document.getElementById("projects-content");

projects.forEach((projects) => {
  const projectCard = document.createElement("div");
  projectCard.innerHTML = `
  <div class="card" >
  <div class="card-info">
    <h2>${projects.title}</h2>
    <a href="${projects.link}" target="_blank">Ver mais
        <i class="fa-solid fa-arrow-right"></i>
    </a>
  </div>
    <img src="${projects.image}" alt="${projects.title}" title="Acessar ${projects.title}" loading="lazy" />
  </div>
  `;
  projectContainer.appendChild(projectCard);
});
