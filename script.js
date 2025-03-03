const title = document.querySelector(".title");
const pronoun = document.querySelector(".pronoun");
const position = document.querySelector(".position");
const icons = document.querySelectorAll(".icon");

function animation() {
  setTimeout(() => {
    position.style.transform = "translateY(0)";
  }, 900);
  setTimeout(() => {
    pronoun.style.transform = "translateY(0)";
  }, 700);
  setTimeout(() => {
    title.style.transform = "translateY(0)";
  }, 500);

  // Aplicar animación a cada ícono con un retraso de 150ms entre cada uno
  icons.forEach((element, index) => {
    setTimeout(() => {
      element.style.opacity = "1";
    }, 1400 + index * 150);
  });
}

function restartAnimation() {
  // Reiniciar los estilos de los elementos
  title.style.transform = "translateY(-20px)";
  pronoun.style.transform = "translateY(-20px)";
  position.style.transform = "translateY(-20px)";

  icons.forEach((element) => {
    element.style.opacity = "0";
  });

}

const button = document.querySelector("button");

button.addEventListener("click", () => {
  restartAnimation();
    setTimeout(() => {
        animation();
    }, 900);
});

animation();
