document.addEventListener('DOMContentLoaded', () => {
    const heroImage = document.querySelector('#hero'); // Locate the image

    if (!heroImage) {
        console.error("Hero image not found.");
        return;
    }

    heroImage.addEventListener('click', () => {
        console.log("Image clicked");

        // Replace image with the form
        const heroLeft = document.querySelector('#hero .left');
        if (!heroLeft) {
            console.error("Hero left section not found.");
            return;
        }

        heroLeft.innerHTML = `
            <form id="contactForm">
                <input type="text" id="name" name="name" placeholder="Your Name" required>
                <input type="email" id="email" name="email" placeholder="Your Email" required>
                <textarea id="message" name="message" placeholder="Your Message" required></textarea>
                <button type="submit">Submit</button>
            </form>
            <p id="responseMessage" style="display: none;"></p>
        `;

        // Handle form submission
        document.getElementById('contactForm').addEventListener('submit', function (event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const responseMessage = document.getElementById('responseMessage');
            responseMessage.textContent = `Thank you, ${name}! Your message has been received.`;
            responseMessage.style.color = 'green';
            responseMessage.style.display = 'block';

            // Clear form fields
            document.getElementById('name').value = '';
            document.getElementById('email').value = '';
            document.getElementById('message').value = '';
        });
    });
});
