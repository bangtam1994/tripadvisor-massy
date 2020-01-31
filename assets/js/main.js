document.addEventListener("DOMContentLoaded", () => {
  //Pour déclencher un Sign In
  document.querySelector("#btn-register").addEventListener("click", () => {
    document.querySelector(".modal").classList.toggle("hidden");
  });

  document.querySelector("#btn2-register").addEventListener("click", () => {
    document.querySelector(".modal").classList.toggle("hidden");
  });

  document.querySelector("#closemodal").addEventListener("click", () => {
    document.querySelector(".modal").classList.toggle("hidden");
  });

  // Pour récupérer les données du formulaire

  const form = document.querySelector("#form");

  form.addEventListener("submit", e => {
    e.preventDefault();
    console.log("coucou");
    const name = document.querySelector("#name").value; //Récupère la valeur entrée dans le formulaire dans la constante name
    console.log(name);

    form.reset();
  });

  // const buttons = document.querySelectorAll("button");

  // buttons.forEach(button => {
  //   button.addEventListener("click", () => {
  //     document.querySelector(".modal").classList.toggle("hidden");
  //   });
});

window.addEventListener("scroll", () => {
  if (scroll) {
    document.querySelector(".nav").class;
  }
});
