import { baseUrl } from "./components/baseUrl.js";
import { displayMessage } from "./utils/displayMessage.js";

const productsUrl = baseUrl + "products";

console.log(productsUrl);

(async function () {
    const container = document.querySelector(".products-container");

    try {
        const response = await fetch(productsUrl);
        const json = await response.json();

        container.innerHTML = "";

        json.forEach(function (product) {
            container.innerHTML += `<a class="product" href="detail.html?id=${product.id}">
                                        <h4>${product.name}</h4>
                                        <p>${product.prices.currency_symbol} ${product.prices.price}</p>
                                        <div class="product-img card-img-top" style="background-image: url('${product.images[0].src}');"></div>
                                    </a>`;
        });
    } catch (error) {
        console.log(error);
        displayMessage("error", error, ".product-container");
    }
})();