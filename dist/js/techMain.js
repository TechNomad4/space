const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");

const techName = document.querySelector("#techName");
const techDescription = document.querySelector("#techDescription");
const techImg = document.querySelector("#techImg");

one.addEventListener("click", () => {
  one.classList.add("current");

  two.classList.remove("current");
  three.classList.remove("current");

  techName.innerHTML = "Launch Vehicle";
  techDescription.innerHTML =
    "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!";
  techImg.src = "../../images/launch-vehicle.jpg";
});

two.addEventListener("click", () => {
  two.classList.add("current");

  one.classList.remove("current");
  three.classList.remove("current");

  techName.innerHTML = "Spaceport";
  techDescription.innerHTML =
    "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.";
  techImg.src = "../../images/spaceport.jpg";
});

three.addEventListener("click", () => {
  three.classList.add("current");

  one.classList.remove("current");
  two.classList.remove("current");

  techName.innerHTML = "Space Capsule";
  techDescription.innerHTML =
    "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.";
  techImg.src = "../../images/space-capsule.jpg";
});
