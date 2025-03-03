function animation() {
    const title = document.querySelector(".title");
    const pronoun = document.querySelector(".pronoun");
    const position = document.querySelector(".position");
    const icons = document.querySelectorAll(".icon"); // Seleccionamos todos los íconos
  
    setTimeout(() => {
      position.style.transform = "translateY(0)";
    }, 900);
    setTimeout(() => {
      pronoun.style.transform = "translateY(0)";
    }, 700);
    setTimeout(() => {
      title.style.transform = "translateY(0)";
    }, 500);
  
    // Aplicar animación a cada ícono con un retraso de 300ms entre cada uno
    icons.forEach((element, index) => {
      setTimeout(() => {
        element.style.opacity = "1";
      }, 1400 + index * 150); // 1100 ms base + 300 ms adicionales por ícono
    });
  }
  
  animation();
  