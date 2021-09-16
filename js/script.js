import { baseUrl } from "./components/baseUrl.js";
import { displayMessage } from "./utils/displayMessage.js";

const productsUrl = baseUrl + "products/?per_page=100";

console.log(productsUrl);

(async function () {
  const container = document.querySelector(".products-container");

  try {
    const response = await fetch(productsUrl);
    const json = await response.json();

    container.innerHTML = "";

    json.forEach(function (product) {
      container.innerHTML += `<a class="product" href="details.html?id=${product.id}">
            <div class="product-img card-img-top" style="background-image: url('${product.images[0].src}');"></div>
                                    <div class="card-body">
                                        <h4 class="card-title">${product.name}</h4>
                                        <p "card-text">${product.prices.currency_symbol} ${product.prices.price}</p>
                                        </div>
                                    </a>`;
    });
  } catch (error) {
    console.log(error);
    displayMessage("error", error, ".product-container");
  }
})();