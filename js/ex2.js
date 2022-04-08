// Country list
const countryList = [
  "Afghanistan",
  "Albania",
  "Algeria",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua-and-Barbuda",
  "Argentina",
  "Armenia",
  "Aruba",
  "Australia",
  "Autria",
  "Azerbaïjan"
];

const countryElement = document.querySelector("input");
const suggestionsElement = document.getElementById("suggestions");

// create a suggestion element
const createSuggestionElement = country => {
  const element = document.createElement("div");
  element.classList.add("suggestion");
  element.textContent = country;

  // click on a suggestion handler
  element.addEventListener("click", e=> {
    // auto fill the input with suggested country
    countryElement.value = e.target.textContent;
    // empty the suggestion list
    suggestionsElement.innerHTML = "";
  });
  return element;
};

// input change handler
countryElement.addEventListener("input", () => {
  suggestionsElement.innerHTML = "";
  // loop through the country list
  countryList.forEach(country => {
    // check the input value 
    if (country.startsWith(countryElement.value)) {
      // add the suggestion
      suggestionsElement.appendChild(createSuggestionElement(country));
    }
  });
});