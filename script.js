
document.addEventListener("DOMContentLoaded", function () {

    // Smooth scrolling for nav links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: "smooth"
            });
        });
    });

    // Sticky navbar
    window.addEventListener('scroll', function () {
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // Typing effect (Hitha Sethu)
    const text = " Hitha\u00A0Sethu"; // includes non-breaking space
    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing-text").innerText += text[index];
            index++;
            setTimeout(typeEffect, 150);
        }
    }
    typeEffect();

    // Skill circle animation (if using)
    const skillCircles = document.querySelectorAll(".skill-circle");
    skillCircles.forEach(circle => {
        let percent = circle.getAttribute("data-percent");
        circle.style.background = `conic-gradient(#4fc3f7 ${percent * 3.6}deg, #222 ${percent * 3.6}deg 360deg)`;
        circle.innerHTML = `<span>${percent}%</span>`;
    });

    // Fade-in project & certification cards on scroll
    const cards = document.querySelectorAll(".project-card, .certification-card");
    function fadeInCards() {
        cards.forEach((card) => {
            const cardPosition = card.getBoundingClientRect().top;
            const screenHeight = window.innerHeight;

            if (cardPosition < screenHeight - 100) {
                card.classList.add("visible");
            }
        });
    }
    window.addEventListener("scroll", fadeInCards);
    fadeInCards(); // trigger on load

    // Icon hover effect
    const icons = document.querySelectorAll(".project-icon, .certification-icon");
    icons.forEach((icon) => {
        icon.addEventListener("mouseenter", () => {
            icon.style.color = "#00FFAA";
            icon.style.transform = "scale(1.2)";
            icon.style.transition = "0.3s ease";
        });

        icon.addEventListener("mouseleave", () => {
            icon.style.color = "#fff";
            icon.style.transform = "scale(1)";
        });
    });

    // Hamburger menu toggle
    document.querySelector(".menu-toggle").addEventListener("click", function () {
        document.querySelector(".nav-links").classList.toggle("active");
    });

});

function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('active');
}


// Close menu when clicking outside (only on small screens)
document.addEventListener("click", function (event) {
  const navLinks = document.querySelector('.nav-links');
  const toggleButton = document.querySelector('.menu-toggle');

  const isClickInsideMenu = navLinks.contains(event.target);
  const isClickOnButton = toggleButton.contains(event.target);

  if (!isClickInsideMenu && !isClickOnButton) {
    navLinks.classList.remove('active');
  }
});


  