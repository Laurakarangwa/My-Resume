// Toggle responsive menu
function toggleMenu() {
  const nav = document.getElementById('navLinks');
  nav.classList.toggle('show');
}

// Basic contact form validation
function validateForm() {
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const status = document.getElementById("form-status");

  if (name === "" || email === "" || message === "") {
    status.textContent = "Please fill in all fields.";
    status.style.color = "red";
    return false;
  }

  status.textContent = "Message sent successfully!";
  status.style.color = "green";
  return false; // For now prevent real submission
}
let dark = localStorage.getItem('dark')
const themeSwitch = document.getElementById('theme-switch')

const enableDark = () => {
    document.body.classList.add('dark')
    localStorage.setItem('dark','active')
}

const disableDark = () => {
    document.body.classList.remove('dark')
    localStorage.setItem('dark', null)
}

if (dark === "active") enableDark()

themeSwitch.addEventListener("click", () => {
    dark = localStorage.getItem('dark')
    dark !== "active" ? enableDark() : disableDark()
})

function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  const button = document.getElementById("theme-toggle");
  if (document.body.classList.contains("dark-mode")) {
    button.textContent = "☀️ Light Mode";
  } else {
    button.textContent = "🌙 Dark Mode";
  }
}


const text = "Aspiring Developer | Creative Thinker | Problem Solver";
let index = 0;

function typeText() {
  const typingElement = document.getElementById("typing");
  if (index < text.length) {
    typingElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeText, 60); // typing speed in ms
  }
}

window.onload = typeText;