// Toggle mobile nav
document.getElementById("hamburger").addEventListener("click", () => {
  document.getElementById("navbar").classList.toggle("active");
});

// Theme toggle
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// Scroll-to-top button
const topBtn = document.getElementById("topBtn");
window.onscroll = () => {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};
topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

// Newsletter form
document.getElementById("subscribe-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const email = document.getElementById("email").value;
  const message = document.getElementById("form-message");

  if (email.includes("@") && email.includes(".")) {
    message.textContent = "✅ Subscribed successfully!";
    message.style.color = "green";
    this.reset();
  } else {
    message.textContent = "❌ Please enter a valid email.";
    message.style.color = "red";
  }
});
