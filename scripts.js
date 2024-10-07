let slideIndex = 0;
showSlides();

// Auto slide every 5 seconds
setInterval(() => {
  plusSlides(1);
}, 5000); // Change slides every 5 seconds

function plusSlides(n) {
  slideIndex += n;
  showSlides();
}

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide, index) => {
    slide.style.display = index === slideIndex ? "block" : "none";
  });
}

// Light/Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleMode");
  const body = document.body;

  toggleButton.addEventListener("click", () => {
    body.classList.toggle("dark-mode");
    toggleButton.textContent = body.classList.contains("dark-mode")
      ? "Light Mode"
      : "Dark Mode";
  });
});

document.getElementById("contact-form").addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent default form submission

  // Get form values
  const firstName = document.getElementById("first-name").value.trim();
  const lastName = document.getElementById("last-name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const responseDiv = document.getElementById("form-response");

  // Simple validation
  if (!firstName || !lastName || !email || !message) {
    responseDiv.textContent = "Please fill out all fields.";
    responseDiv.style.color = "red";
    responseDiv.style.display = "block";
    return;
  }

  // If validation passes
  responseDiv.textContent =
    "Thank you for your message, we will get back to you soon!";
  responseDiv.style.color = "green";
  responseDiv.style.display = "block";

  // Clear form fields
  document.getElementById("contact-form").reset();
});
