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

   function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("active");
  }