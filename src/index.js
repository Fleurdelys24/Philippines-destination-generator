function displayDestination(response) {
  new Typewriter("#destination", {
    strings: response.data.answer,
    autoStart: true,
    delay: 10,
    cursor: "",
  });
}

function generateDestination(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "5b68e343oe324f0tc02aaba826a6efb3";
  let context =
    "You are a travel expert.Your mission is to generate a travel destination in the Philippines provided by the user. Also, include two places of interest in the destination while also following the user instructions.Avoid using quotes and the word html at the beginning and &lt;/ at the end.";
  let prompt = `User instructions:Generate a Philippines destination ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let destinationElement = document.querySelector("#destination");
  destinationElement.classList.remove("hidden");
  destinationElement.innerHTML = `<div class="generating">🏝️Generating a travel destination in the Philippines about ${instructionsInput.value}</div>`;

  axios.get(apiURL).then(displayDestination);
}

let destinationFormElement = document.querySelector(
  "#Philippines-destination-generator-form"
);
destinationFormElement.addEventListener("submit", generateDestination);
