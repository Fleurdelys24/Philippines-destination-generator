function generateDestination(event) {
  event.preventDefault();

  new Typewriter("#destination", {
    strings: "Palawan",
    autoStart: true,
    delay: 40,
    cursor: "",
  });
}

let destinationFormElement = document.querySelector(
  "#Philippines-destination-generator-form"
);
destinationFormElement.addEventListener("submit", generateDestination);
