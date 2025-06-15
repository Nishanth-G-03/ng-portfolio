// Integrating Typed.js in Hero section
const typed = new Typed(".auto-type", {
    strings: ["Developer", "Problem Solver", "Creative Coder", "Tech Enthusiast"],
    typeSpeed: 100,
    backSpeed: 50,
    loop: true,
    backDelay: 1000,
    smartBackspace: true,
    cursorChar: "|"
  });

//   Navigation bar Toggling
   function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
  }

//   Certificates scrolling
   const swiper = new Swiper(".certificate-swiper", {
    loop: true,
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

//   Footer dynamic year
document.getElementById("year").textContent = new Date().getFullYear();

// Scroll up page
 const scrollToTopBtn = document.getElementById("scrollToTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollToTopBtn.style.opacity = "1";
      scrollToTopBtn.style.visibility = "visible";
    } else {
      scrollToTopBtn.style.opacity = "0";
      scrollToTopBtn.style.visibility = "hidden";
    }
  });

  scrollToTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

// Making Form section working
  const form = document.getElementById("contact-form");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };
      console.log(formData);

    try {
      const response = await fetch("https://contact-backend-f32m.onrender.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Failed to send message. Try again.");
      }
    } catch (err) {
      alert("Error: " + err.message);
    }
      
  });
