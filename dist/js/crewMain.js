const dotsFirst = document.querySelector(".dots #first");
const dotsSecond = document.querySelector(".dots #second");
const dotsThird = document.querySelector(".dots #third");
const dotsFourth = document.querySelector(".dots #fourth");

const job = document.querySelector("#job");
const crewName = document.querySelector("#name");
const crewDescription = document.querySelector("#crewDescription");
const crewImg = document.querySelector("#crewImg");

dotsFirst.addEventListener("click", () => {
  dotsFirst.classList.add("current");

  dotsSecond.classList.remove("current");
  dotsThird.classList.remove("current");
  dotsFourth.classList.remove("current");

  job.innerHTML = "Commander";
  crewName.innerHTML = "Douglas Hurley";
  crewDescription.innerHTML =
    "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.";
  crewImg.src = "../../images/douglas-hurley.png";
});

dotsSecond.addEventListener("click", () => {
  dotsSecond.classList.add("current");

  dotsFirst.classList.remove("current");
  dotsThird.classList.remove("current");
  dotsFourth.classList.remove("current");

  job.innerHTML = "Mission Specialist";
  crewName.innerHTML = "Mark Shuttleworth";
  crewDescription.innerHTML =
    "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.";
  crewImg.src = "../../images/mark-shuttleworth.png";
});

dotsThird.addEventListener("click", () => {
  dotsThird.classList.add("current");

  dotsFirst.classList.remove("current");
  dotsSecond.classList.remove("current");
  dotsFourth.classList.remove("current");

  job.innerHTML = "Pilot";
  crewName.innerHTML = "Victor Glover";
  crewDescription.innerHTML =
    "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.";
  crewImg.src = "../../images/victor-glover.png";
});

dotsFourth.addEventListener("click", () => {
  dotsFourth.classList.add("current");

  dotsFirst.classList.remove("current");
  dotsSecond.classList.remove("current");
  dotsThird.classList.remove("current");

  job.innerHTML = "Flight Engineer";
  crewName.innerHTML = "Anousheh Ansari";
  crewDescription.innerHTML =
    "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.";
  crewImg.src = "../../images/anousheh-ansari.png";
});
