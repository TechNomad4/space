const moon = document.querySelector("#moon");
const mars = document.querySelector("#mars");
const europa = document.querySelector("#europa");
const titan = document.querySelector("#titan");

const planet = document.querySelector("#planet");
const planetImg = document.querySelector("#planetImg");
const description = document.querySelector("#description");
const avgDist = document.querySelector("#avgDist");
const estTime = document.querySelector("#estTime");

moon.addEventListener("click", () => {
  moon.className = "active";

  mars.classList.remove("active");
  europa.classList.remove("active");
  titan.classList.remove("active");

  planet.innerHTML = "Moon";
  description.innerHTML =
    "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.";
  avgDist.innerHTML = "384,400 km";
  estTime.innerHTML = "3 days";
  planetImg.src = "../../images/image-moon.png";
});

mars.addEventListener("click", () => {
  mars.className = "active";

  moon.classList.remove("active");
  europa.classList.remove("active");
  titan.classList.remove("active");

  planet.innerHTML = "Mars";
  description.innerHTML =
    "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!";
  avgDist.innerHTML = "225 MIL. km";
  estTime.innerHTML = "9 months";
  planetImg.src = "../../images/image-mars.png";
});

europa.addEventListener("click", () => {
  europa.className = "active";

  moon.classList.remove("active");
  mars.classList.remove("active");
  titan.classList.remove("active");

  planet.innerHTML = "Europe";
  description.innerHTML =
    "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.";
  avgDist.innerHTML = "628 MIL. km";
  estTime.innerHTML = "3 years";
  planetImg.src = "../../images/image-europa.png";
});

titan.addEventListener("click", () => {
  titan.className = "active";

  moon.classList.remove("active");
  mars.classList.remove("active");
  europa.classList.remove("active");

  planet.innerHTML = "Titan";
  description.innerHTML =
    "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.";
  avgDist.innerHTML = "1.6 BIL. km";
  estTime.innerHTML = "7 years";
  planetImg.src = "../../images/image-titan.png";
});
