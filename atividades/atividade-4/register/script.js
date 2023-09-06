document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector("#form");
  const loader = document.querySelector(".loader");
  const redirects = document.querySelector(".redirects");

  // Adicione um evento "submit" ao formulário
  form.addEventListener("submit", function (event) {
    event.preventDefault();

    // Exibe o loader e oculta os redirects
    loader.style.display = "flex";
    redirects.style.display = "none";

    setTimeout(function () {
      loader.style.display = "none";
      redirects.style.display = "flex";
      form.submit();
    }, 2000);
  });
});
