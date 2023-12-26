// SCROLL SECTION ACTIVE LINK
let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");
    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });
};
// TOGGLE ICONE NAVEBAR
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};
navbar.onclick = () => {
  navbar.classList.remove("active");
  menuIcon.classList.remove("bx-x");
};
let circle1Fill = document.querySelector(".p-cir1-fill");
let circle1Percent = document.querySelector(".p-cir1-percent");

let progres1StartValue = 0;
let progres1EndValue = 30;
let speed1 = 20;
let colorbar1 = "blue";
let colorbar1Percent = "rgba(253, 0, 0, 0.185)";
//

/* SKILL STYLE */
let onSkills = document.querySelector(".skills");
let clickSkillbtn = document.querySelector(".btnskills");

onSkills.onmouseover = () => {
  document.querySelector(".skills-container").style.display = "flex";
};

onSkills.onmouseoverclick = () => {
  document.querySelector(".skills-container").style.display = "flex";
};
