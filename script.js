// ===== Mobile Menu =====
const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

// Toggle menu on hamburger click
menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("show");
  menuToggle.textContent = navLinks.classList.contains("show") ? "✖" : "☰";
});

// Close menu when a link is clicked (on mobile)
document.querySelectorAll("#navLinks a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("show"); // close menu
    menuToggle.textContent = "☰"; // reset to hamburger
  });
});

// ===== Typing Animation =====
const typingEl = document.getElementById("typing");
const subtitleEl = document.getElementById("subtitle");

// Use span for highlighting
const text =
  "Hi, I’m <span class='highlight-name'>Sherjin A G</span> – AI & Web Enthusiast ";
let index = 0;

function typeEffect() {
  typingEl.innerHTML = text.slice(0, index);
  index++;
  if (index <= text.length) {
    setTimeout(typeEffect, 70); // typing speed
  }
}

typeEffect();

// Subtitles rotating
const subtitles = ["AI Developer", "Full-Stack Engineer", "Problem Solver"];

let subIndex = 0;
function rotateSubtitle() {
  subtitleEl.textContent = subtitles[subIndex];
  subIndex = (subIndex + 1) % subtitles.length;
}
setInterval(rotateSubtitle, 3000);


// Counter Animation
const counters = document.querySelectorAll(".count");
const speed = 200; // lower = faster

counters.forEach((counter) => {
  const updateCount = () => {
    const target = +counter.getAttribute("data-target");
    const count = +counter.innerText;

    const increment = Math.ceil(target / speed);

    if (count < target) {
      counter.innerText = count + increment;
      setTimeout(updateCount, 50);
    } else {
      counter.innerText = target;
    }
  };

  updateCount();
});

// Set percentage dynamically
// Animate on hover
document.querySelectorAll(".skill").forEach((skill) => {
  let circle = skill.querySelector(".progress-ring-fill");
  let percent = skill.getAttribute("data-percent");
  let radius = circle.r.baseVal.value;
  let circumference = 2 * Math.PI * radius;

  circle.style.strokeDasharray = circumference;
  circle.style.strokeDashoffset = circumference;

  skill.addEventListener("mouseenter", () => {
    let offset = circumference - (percent / 100) * circumference;
    circle.style.strokeDashoffset = offset;
  });

  skill.addEventListener("mouseleave", () => {
    circle.style.strokeDashoffset = circumference;
  });
});

function openModal(certId) {
  const modal = document.getElementById("certModal");
  const display = document.getElementById("certDisplay");
  const downloadBtn = document.getElementById("downloadBtn");

  // Show modal
  modal.style.display = "flex";

  if (certId === "cert1") {
    display.innerHTML = `<iframe src="./certificate/cert1.pdf#view=Fit" frameborder="0"></iframe>`;
    downloadBtn.href = "./certificate/cert1.pdf";
  } else if (certId === "cert2") {
    display.innerHTML = `<iframe src="./certificate/cert2.pdf#view=Fit" frameborder="0"></iframe>`;
    downloadBtn.href = "./certificate/cert2.pdf";
  } else if (certId === "cert3") {
    display.innerHTML = `<iframe src="./certificate/cert3.pdf#view=Fit" frameborder="0"></iframe>`;
    downloadBtn.href = "./certificate/cert3.pdf";
  } else if (certId === "cert4") {
    display.innerHTML = `<img src="./certificate/cert4.png" alt="Certificate 4">`;
    downloadBtn.href = "./certificate/cert4.png";
  } else if (certId === "cert5") {
    display.innerHTML = `<img src="./certificate/cert5.jpg" alt="Certificate 5">`;
    downloadBtn.href = "./certificate/cert5.jpg";
  } else if (certId === "cert6") {
    display.innerHTML = `<img src="./certificate/cert6.jpg" alt="Certificate 6">`;
    downloadBtn.href = "./certificate/cert6.jpg";
  } else if (certId === "cert7") {
    display.innerHTML = `<img src="./certificate/cert7.jpg" alt="Certificate 7">`;
    downloadBtn.href = "./certificate/cert7.jpg";
  }
}

function closeModal() {
  document.getElementById("certModal").style.display = "none";
}
