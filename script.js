document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll('a[href="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth"
            });
        });
    });
  

    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('nav');
        if (window.scrollY > 50) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });
        

  
    const text = " Hitha\u00A0Sethu"; // Non-breaking space

    let index = 0;
    function typeEffect() {
        if (index < text.length) {
            document.getElementById("typing-text").innerText += text[index];
            index++;
            setTimeout(typeEffect, 150); // Adjust speed here
        }
    }
    
    typeEffect(); // Start the typing effect
});
document.addEventListener("DOMContentLoaded", function () {
    const skillCircles = document.querySelectorAll(".skill-circle");

    skillCircles.forEach(circle => {
        let percent = circle.getAttribute("data-percent");
        circle.style.background = `conic-gradient(#4fc3f7 ${percent * 3.6}deg, #222 ${percent * 3.6}deg 360deg)`;
        circle.innerHTML = `<span>${percent}%</span>`;
    });
});
document.addEventListener("DOMContentLoaded", function () {
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
    fadeInCards(); // Run once to check if cards should be visible on load
});
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
function toggleMenu() {
    document.querySelector(".nav-links").classList.toggle("active");
  }
  