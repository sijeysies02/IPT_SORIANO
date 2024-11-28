// script.js
document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const responseMessage = document.getElementById("responseMessage");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const name = formData.get("name");
        const email = formData.get("email");
        const message = formData.get("message");

        // Simulate form submission (for demo purposes)
        setTimeout(() => {
            responseMessage.textContent = `Thank you, ${name}! Your message has been sent.`;
            responseMessage.style.color = "#4CAF50"; // Success color
            contactForm.reset(); // Clear form
        }, 1000);
    });
});
