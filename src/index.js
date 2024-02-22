function generateRhyme(event) {
  event.preventDefault();

  new Typewriter("#rhyme", {
    strings: "hello world",
    autoStart: true,
    delay: 20,
  });
}

let rhymeGeneratorElement = document.querySelector("#rhyme-generator-form");
rhymeGeneratorElement.addEventListener("submit", generateRhyme);
