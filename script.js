// Carrusel de fotos
let slideIndex = 0;
showSlides();

function showSlides() {
  const slides = document.getElementsByClassName("carousel")[0].getElementsByTagName("img");
  
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  
  slides[slideIndex - 1].style.display = "block";
  
  setTimeout(showSlides, 3000); // Cambiar cada 3 segundos
}

// Validación del formulario de contacto
const contactForm = document.getElementById("contact-form");
contactForm.addEventListener("submit", function(event) {
  event.preventDefault();
  
  // Validar campos antes de enviar el formulario
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const messageInput = document.getElementById("message");
  
  if (nameInput.value === "" || emailInput.value === "" || messageInput.value === "") {
    alert("Por favor, completa todos los campos.");
    return;
  }
  
  // Aquí puedes agregar el código para enviar el formulario
  alert("¡Mensaje enviado correctamente!");
  contactForm.reset();
});
