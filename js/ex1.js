// Character list. Each house has a name and a code
const houses = [
  {
    code: "ST",
    name: "Stark"
  },
  {
    code: "LA",
    name: "Lannister"
  },
  {
    code: "BA",
    name: "Baratheon"
  },
  {
    code: "TA",
    name: "Targaryen"
  },
];

// Return an array of characters belonging to a house
const getCharacters = houseCode => {
  switch (houseCode) {
    case "ST":
      return ["Eddard", "Catelyn", "Robb", "Sansa", "Arya", "Jon Snow"];
    case "LA":
      return ["Tywin", "Cersei", "Jaime", "Tyrion"];
    case "BA":
      return ["Robert", "Stannis", "Renly"];
    case "TA":
      return ["Aerys", "Daenerys", "Viserys"];
    default:
      return []; // Empty Array
  }
};

// create and return option tag
const optionElement = (text, value) => {
  const element = document.createElement("option");
  element.textContent = text;
  element.value = value;
  return element;
};

// create and return a list tag
const LiElement = text => {
  const element = document.createElement("li");
  element.textContent = text;
  return element;
};

// Get the select options of house name and code
const houseElement = document.querySelector("select");
// Loop through the houses array and append it into an option
houses.forEach(house => {
  houseElement.appendChild(optionElement(house.name, house.code));
});

// add house change event handler
houseElement.addEventListener("change", e => {
  const characters = getCharacters(e.target.value);
  const characterElement = document.getElementById("characters");

  characterElement.innerHTML = "";
  // Loop through characters array and append to list when character is selected
  characters.forEach(character => {
    characterElement.appendChild(LiElement(character));
  });
});