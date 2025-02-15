function displayDestination(response) {
  console.log("destination generated");
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
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;
  let context =
    "You are a travel expert.Your mission is to generate a travel destination in the Philippines.  Make sure to include the activities and interest in the destination. Include two places of interest in the destination while also following the user instructions";
  let prompt = `User instructions:Generate a Philippines destination ${instructionsInput.value}`;

  console.log("Generating destination");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context:${context}`);

  axios.get(apiURL).then(displayDestination);
}

let destinationFormElement = document.querySelector(
  "#Philippines-destination-generator-form"
);
destinationFormElement.addEventListener("submit", generateDestination);
