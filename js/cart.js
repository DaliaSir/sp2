import { getFromStorage } from "./utils/localStorage.js";
import { displayMessage } from "./utils/displayMessage.js";
import { emptyCartMsg } from "./components/messages.js";
import { clearList } from "./utils/emptyCart.js";

const inCart = getFromStorage("cart-list");

const cartContainer = document.querySelector(".container_cart--products");

cartContainer.innerHTML = "";

inCart.forEach((product) => {
  cartContainer.innerHTML += `
      <div class="row container-cart_product">
        <div class="product-img-cart col-md-4" style="background-image: url('${product.image}');"></div>
        <div class="col-md-8">
          <h4>${product.name}</h4>
          <p> &#36; ${product.price}</p>
          <a class="btn view-item" href="details.html?id=${product.id}">View Product</a>
          <a class="btn remove-item" href="#">Remove</a>
        </div>
      </div>
  `;
});

/* const cartContainer = document.querySelector(".container_cart--products");
const emptyCartButton = document.querySelector(".emptyBtn");
const proceedToCheckoutBtn = document.querySelector(".proceedBtn");

//createLoginLink();

(function renderCart() {
  cartContainer.innerHTML = "";

  emptyCartButton.addEventListener("click", () => clearList(renderCart));

  const productsInCart = getFromStorage("cart-list");

  if (productsInCart.length === 0) {
    displayMessage("", emptyCartMsg, ".container_cart--products");
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
})(); */