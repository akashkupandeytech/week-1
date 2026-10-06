const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    const formMessage = document.getElementById("formMessage");


    if (name === "") {
        formMessage.textContent = "Please enter your name.";
        return;
    }


    if (email === "") {
        formMessage.textContent = "Please enter your email.";
        return;
    }


    if (!email.includes("@")) {
        formMessage.textContent = "Please enter a valid email.";
        return;
    }


    if (message === "") {
        formMessage.textContent = "Please enter your message.";
        return;
    }


    formMessage.textContent = "Message sent successfully!";

    form.reset();

});