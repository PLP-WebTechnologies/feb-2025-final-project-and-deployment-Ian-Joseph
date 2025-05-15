document.addEventListener("DOMContentLoaded", function () {
  // Form validation
  const form = document.getElementById("contactForm");
  const message = document.getElementById("formMessage");

  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      const name = document.getElementById("name").value.trim();
      const email = document.getElementById("email").value.trim();
      const msg = document.getElementById("message").value.trim();

      if (!name || !email || !msg) {
        message.textContent = "Please fill in all fields.";
        message.style.color = "red";
      } else {
        message.textContent = "Thanks for your message!";
        message.style.color = "green";
        form.reset();
      }
    });
  }

  // Slider functionality
  let currentSlide = 0;
  const slides = document.querySelectorAll(".intro .slide");
  const prevButton = document.querySelector(".intro .prev");
  const nextButton = document.querySelector(".intro .next");

  function changeSlide(direction) {
    // Remove the active class from the current slide
    slides[currentSlide].classList.remove("active");

    // Update the current slide index
    currentSlide = (currentSlide + direction + slides.length) % slides.length;

    // Add the active class to the new slide
    slides[currentSlide].classList.add("active");
  }

  // Attach event listeners to buttons
  if (prevButton && nextButton) {
    prevButton.addEventListener("click", () => changeSlide(-1));
    nextButton.addEventListener("click", () => changeSlide(1));
  }

  // Auto-slide functionality (optional)
  setInterval(() => changeSlide(1), 5000); // Change slide every 5 seconds
});
