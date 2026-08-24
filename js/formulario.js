const profileCards = document.querySelectorAll(".profile-card");

profileCards.forEach((card) => {
  const person = card.dataset.person;
  const contactButton = card.querySelector(".contact-btn");
  const backButton = card.querySelector(".back-btn");
  const sendButton = card.querySelector(".send-btn");
  const messageInput = card.querySelector(".contact-message");

  if (!contactButton || !backButton || !sendButton || !messageInput) {
    return;
  }

  contactButton.addEventListener("click", () => {
    card.classList.add("is-contacting");
    messageInput.focus();
  });

  backButton.addEventListener("click", () => {
    card.classList.remove("is-contacting");
    messageInput.value = "";
  });

  sendButton.addEventListener("click", () => {
    const message = messageInput.value.trim();

    if (message === "") {
      alert("Escribí un mensaje antes de enviar.");
      return;
    }

    alert(`Mensaje enviado correctamente a ${person}.`);
    messageInput.value = "";
    card.classList.remove("is-contacting");
  });
});
