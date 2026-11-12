document.body.classList.add("js-enabled");

// Keep the mobile menu button and navigation state in sync.
const menuToggle = document.querySelector(".menu-toggle");
const siteNavigation = document.querySelector(".site-nav");
const menuLabel = document.querySelector(".menu-toggle-label");
const navigationLinks = document.querySelectorAll(".nav-links a");

function closeNavigation() {
  siteNavigation.classList.remove("is-open");
  menuToggle.setAttribute("aria-expanded", "false");
  menuLabel.textContent = "Menu";
}

menuToggle.addEventListener("click", function () {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  siteNavigation.classList.toggle("is-open", !isOpen);
  menuToggle.setAttribute("aria-expanded", String(!isOpen));
  menuLabel.textContent = isOpen ? "Menu" : "Close";
});

navigationLinks.forEach(function (link) {
  link.addEventListener("click", closeNavigation);
});

const contactForm = document.querySelector("#contact-form");
const feedback = document.querySelector("#form-feedback");

// Validate the demo form locally; no message is sent or stored.
contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const fullName = document.querySelector("#full-name").value.trim();
  const email = document.querySelector("#email").value.trim();
  const subject = document.querySelector("#subject").value.trim();
  const message = document.querySelector("#message").value.trim();
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  feedback.classList.remove("is-error");

  if (!fullName || !email || !subject || !message) {
    feedback.textContent = "Please complete each field before submitting.";
    feedback.classList.add("is-error");
    return;
  }

  if (!emailIsValid) {
    feedback.textContent = "Please enter a valid email address.";
    feedback.classList.add("is-error");
    return;
  }

  feedback.textContent = "Thank you, " + fullName + ". This demo form does not send messages.";
  contactForm.reset();
});