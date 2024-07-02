var tl = gsap.timeline();

tl.from(".main-navbar .nav-1 .heading", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});
tl.from(".main-navbar .nav-1 ", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});
tl.from(".main-navbar .nav-2 ", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});

tl.from("h2", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 0.5,
});
tl.from("h3", {
  y: -20,
  opacity: 0,
  duration: 1,
  stagger: 0.3,
});
tl.from("p", {
  y: 20,
  opacity: 0,
  duration: 0.5,
  stagger: 0.3,
});

const togglebtnIcon = document.querySelector(".togglebtn i");
const dropdown = document.querySelector(".nav-3");

togglebtnIcon.onclick = function () {
  dropdown.classList.toggle(".open");
};
