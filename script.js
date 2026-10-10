/*
  PET VET CARE — website settings
  Before publishing, check the WhatsApp number and Facebook page below.
  Use Bangladesh country code 880 for WhatsApp, without +, spaces or leading 0.
*/
const SITE_SETTINGS = {
  whatsappNumber: "8801410439495",
  facebookPageUrl: "https://www.facebook.com/",
  brandName: "Pet Vet Care"
};

const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

if (menuToggle && navLinks) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });
  navLinks.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
    menuToggle.textContent = "☰";
  }));
}

const whatsappBase = `https://wa.me/${SITE_SETTINGS.whatsappNumber}`;
const defaultMessage = "Hello Pet Vet Care, I would like to ask about your services.";
const whatsappLink = document.getElementById("whatsapp-link");
if (whatsappLink) whatsappLink.href = `${whatsappBase}?text=${encodeURIComponent(defaultMessage)}`;

const facebookLink = document.getElementById("facebook-link");
if (facebookLink) facebookLink.href = SITE_SETTINGS.facebookPageUrl;

document.getElementById("year").textContent = new Date().getFullYear();

document.querySelectorAll("[data-product]").forEach(link => {
  link.addEventListener("click", () => {
    const select = document.getElementById("service-type");
    if (select) select.value = "Pet food or supplies";
    const details = document.getElementById("pet-details");
    if (details) details.value = `Product inquiry: ${link.dataset.product}`;
  });
});

const form = document.getElementById("request-form");
if (form) {
  form.addEventListener("submit", event => {
    event.preventDefault();
    const name = document.getElementById("customer-name").value.trim();
    const service = document.getElementById("service-type").value;
    const area = document.getElementById("customer-area").value.trim();
    const details = document.getElementById("pet-details").value.trim();
    const message = [
      `Hello ${SITE_SETTINGS.brandName},`,
      "",
      "I would like to make an inquiry.",
      `Name: ${name}`,
      `Inquiry: ${service}`,
      `Area in Chattogram: ${area}`,
      details ? `Pet / request details: ${details}` : "",
      "",
      "Please let me know availability and current pricing."
    ].filter(Boolean).join("\n");
    window.open(`${whatsappBase}?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  });
}
