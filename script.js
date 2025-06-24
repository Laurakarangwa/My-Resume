// THEME TOGGLE WITH LOCAL STORAGE
const themeToggleBtn = document.getElementById("theme-toggle");
const isDark = localStorage.getItem("theme") === "dark";

if (isDark) {
  document.body.classList.add("dark-mode");
  themeToggleBtn.textContent = "☀";
} else {
  themeToggleBtn.textContent = "🌙";
}

function toggleTheme() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");

  localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  themeToggleBtn.textContent = isDarkMode ? "☀" : "🌙";
}

// NAV MENU TOGGLE FOR SMALL SCREENS
function toggleMenu() {
  const nav = document.getElementById("navLinks");
  nav.classList.toggle("show");
}

// FORM VALIDATION
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");

  if (!name || !email || !message) {
    status.textContent = "Please fill in all fields.";
    status.style.color = "red";
    return false;
  }

  status.textContent = "Message sent successfully!";
  status.style.color = "green";
  return false;
}

// TYPING EFFECT
const text = "Aspiring Developer & Creative Thinker";
let index = 0;

function typeText() {
  const typingElement = document.getElementById("typing");
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 60);
  }
}

window.onload = typeText;
