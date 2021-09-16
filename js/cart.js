import { getFromStorage } from "./utils/localStorage.js";
import { displayMessage } from "./utils/displayMessage.js";
import { emptyCartMsg } from "./components/messages.js";
import { clearList } from "./utils/emptyCart.js";

const cartContainer = document.querySelector(".cart-container");
const emptyCartButton = document.querySelector(".emptyBtn");
const proceedToCheckoutBtn = document.querySelector(".proceedBtn");

//createLoginLink();

(function renderCart() {
  cartContainer.innerHTML = "";

  emptyCartButton.addEventListener("click", () => clearList(renderCart));

  const productsInCart = getFromStorage("cart-list");

  if (productsInCart.length === 0) {
    displayMessage("", emptyCartMsg, ".cart-container");
    emptyCartButton.style.display = 'none';
    proceedToCheckoutBtn.style.display = 'none';
  } else {
    productsInCart.forEach((product) => {
      cartContainer.innerHTML += `
              <div class="col p-3">
                  <div class="card">
                  <div class="product-img card-img-top" style="background-image: url('${product.images[0].src}');"></div>
                  <div class="card-body">
                      <h4 class="card-title">${product.name}</h4>
                      <p "card-text">${product.prices.currency_symbol} ${product.prices.price}</p>
                      </div>
                  </div>
                  <a class="btn" href="details.html?id=${product.id}">View Product</a>
              </div>
              `;
    });
  }
})();