const menuToggle = document.getElementById("menu-toggle");
const barLinks = document.getElementById("bar-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    barLinks.classList.toggle("show");
  });
}

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name && email && message) {
      alert("Thank you for your message, " + name + "!");
      contactForm.reset();
    } else {
      alert("Please fill out all fields.");
    }
  });
}
