import { baseUrl } from "./components/baseUrl.js";
import { displayMessage } from "./utils/displayMessage.js";

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");

if (!id) {
  document.location.href = "/";
}

const productUrl = baseUrl + "products/" + id;

console.log(productUrl);

(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();

    document.title = details.title;

    const detailsContainer = document.querySelector(".details-container");

    detailsContainer.innerHTML = `
      <div class="col">
        <div class="details-image card-img-top" style="background-image: url('${details.images[0].src}');"></div>
      </div>
      <div class="col details-text">
        <h1 class="details-name">${details.name}</h1>
        <p class="details-description">${details.description}</p>
        <p class="details-price">${details.prices.currency_symbol} ${details.prices.price}</p>
      </div>`;

  } catch (error) {
    displayMessage("error", error, ".details-container");
  }
})();