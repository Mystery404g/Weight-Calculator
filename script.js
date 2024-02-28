function calculateWeight() {
  const weightInput = document.getElementById("weightInput");
  const planetSelect = document.getElementById("planetSelect");
  const resultElement = document.getElementById("result");

  const weight = parseFloat(weightInput.value); // Get weight value
  const planet = planetSelect.value; // Get selected planet
  const gravity = getPlanetGravity(planet); // Calculate gravity based on planet

  const adjustedWeight = weight * gravity / 9.81; // Calculate weight on planet
  const formattedResult = `${weight} kg on Earth is equivalent to ${adjustedWeight.toFixed(2)} kg on ${planet}.`;

  resultElement.textContent = formattedResult;
}

function getPlanetGravity(planet) {
  switch (planet) {
    case "mercury":
      return 3.7;
    case "venus":
      return 8.87; 
    case "earth":
      return 9.81;
    case "moon":
      return 1.62;
    case "mars":
      return 3.72;
    case "jupiter":
      return 24.79;
    case "ganymede":
      return 1.43;
    case "europa":
      return 1.32;
    case "io":
      return 1.80;
    case "saturn":
      return 10.44;
    case "titan":
      return 1.35;
    case "uranus":
      return 8.69;
    case "neptune":
      return 11.15;
    case "pluto":
      return 0.62;
    case "sun":
      return 274;
    default:
      return 0; // Handle invalid planet
  }
}
