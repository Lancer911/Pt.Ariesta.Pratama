document.addEventListener("DOMContentLoaded", function () {
  // Mobile menu toggle
  const mobileMenuButton = document.getElementById("mobile-menu-button");
  const mobileMenu = document.getElementById("mobile-menu");

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener("click", function () {
      mobileMenu.classList.toggle("hidden");
    });
  }

  // Animate on scroll
  const animateElements = document.querySelectorAll(".animate__animated");

  if (animateElements.length > 0) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(entry.target.dataset.animate);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    animateElements.forEach((element) => {
      observer.observe(element);
    });
  }

  // FAQ accordion
  const faqButtons = document.querySelectorAll(".faq-button");

  if (faqButtons.length > 0) {
    faqButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const answer = this.nextElementSibling;
        const icon = this.querySelector("i");

        // Toggle answer visibility
        answer.classList.toggle("hidden");

        // Rotate icon
        icon.classList.toggle("rotate-180");

        // Change button background
        this.classList.toggle("bg-gray-50");
        this.classList.toggle("bg-white");
      });
    });
  }

  // Back to top button
  const backToTopButton = document.querySelector(".back-to-top");

  if (backToTopButton) {
    window.addEventListener("scroll", function () {
      if (window.pageYOffset > 300) {
        backToTopButton.classList.add("show");
      } else {
        backToTopButton.classList.remove("show");
      }
    });

    backToTopButton.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  // Form validation
  const contactForm = document.getElementById("contact-form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Simple validation
      const name = document.getElementById("name").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      if (!name || !email || !message) {
        alert("Harap lengkapi semua field yang wajib diisi.");
        return;
      }

      // Here you would typically send the form data to a server
      alert("Pesan Anda telah terkirim! Kami akan segera menghubungi Anda.");
      contactForm.reset();
    });
  }
});
// Ambil semua tombol accordion
const buttons = document.querySelectorAll("button");

// Tambahkan event listener ke setiap tombol
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // Ambil elemen div jawaban setelah tombol
    const answer = button.nextElementSibling;

    // Toggle class hidden
    if (answer.classList.contains("hidden")) {
      answer.classList.remove("hidden");
    } else {
      answer.classList.add("hidden");
    }

    // Optional: rotasi icon panah jika ada
    const icon = button.querySelector("i");
    if (icon) {
      icon.classList.toggle("rotate-180");
    }
  });
});
