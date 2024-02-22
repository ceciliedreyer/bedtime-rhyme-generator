function displayRhyme(response) {
  console.log("rhyme generated");

  new Typewriter("#rhyme", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
  });
}

function generateRhyme(event) {
  event.preventDefault();

  let instructionElement = document.querySelector("#instructions");

  let apiKey = "c0f7a728c0575391764t3b111d69od7f";
  let apiPrompt = `Please create a sleepy bedtime rhyme about a stuffed animal described as: ${instructionElement.value} to help a small child fall asleep`;
  let apiContext =
    "You are a an AI assistant who could have worked in a nursery. You love coming up with nursery rhymes in that help little kids calm down and fall asleep. You recieve information about a stuffed animal the child knows and you will then generate a bedtime nursery rhyme with the stuffed animal as the lead character. For example the stuffed animal described is a soft elefant that plays music. Your response could be If you’re silent and don’t speak a word Quiet as a mouse. The elephant is snoring loudly all throughout the house. Like a jet plane in the clouds. Your rhyme is never more than 6 lines long and never shorter than 2. You deliver the rhyme in basic HTML structure and you seperate each line with a <br />. You never add a title to the rhyme you only respons with the lenght of the rhyme. Do not ever say how many lines you generate and never display html nor quotes";

  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${apiPrompt}&context=${apiContext}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRhyme);

  let rhymeElement = document.querySelector("#rhyme");
  rhymeElement.classList.remove("hidden");
  rhymeElement.innerHTML = '<div class="blink">🦋 generating rhyme</div>';
}

let rhymeGeneratorElement = document.querySelector("#rhyme-generator-form");
rhymeGeneratorElement.addEventListener("submit", generateRhyme);
