// 1. Animação ao rolar (Reveal)
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      }
    });
  },
  { threshold: 0.1 },
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

// 2. Botão de Surpresa com Confete
const btn = document.getElementById("gift-btn");
const msg = document.getElementById("final-message");

btn.addEventListener("click", () => {
  // Esconde o botão e mostra a mensagem
  btn.style.display = "none";
  msg.classList.remove("hidden");

  // Dispara o confete
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 },
    colors: ["#ff4757", "#2f3542", "#ffffff"],
  });
});

let currentIndex = 0;
const items = document.querySelectorAll(".carousel-item");

function showSlide(index) {
  items.forEach((item, i) => {
    item.classList.toggle("active", i === index);
  });
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + items.length) % items.length;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % items.length;
  showSlide(currentIndex);
}

setInterval(nextSlide, 3000); // Muda de slide a cada 5 segundos

