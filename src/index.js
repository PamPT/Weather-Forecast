function searchSubmit(event) {
  event.preventDefault();
  let serachInput = document.querySelector("#search-form-input");
  let cityElement = document.querySelector("#search-city");
  cityElement.innerHTML = serachInput.value;
}

let searchFormElement = document.querySelector("#search-form");
searchFormElement.addEventListener("submit", searchSubmit);
