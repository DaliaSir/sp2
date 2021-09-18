import { getFromStorage } from "./utils/localStorage.js";
import { displayMessage } from "./utils/displayMessage.js";
import { emptyCartMsg } from "./components/messages.js";
import { clearList } from "./utils/emptyCart.js";

const cartContainer = document.querySelector(".container_cart--products");
const emptyCartButton = document.querySelector(".emptyBtn");
const proceedToCheckoutBtn = document.querySelector(".proceedBtn");

//createLoginLink();

(function renderCart() {
  cartContainer.innerHTML = "";

  emptyCartButton.addEventListener("click", () => clearList(renderCart));

  const inCart = getFromStorage("cart-list");

  /* inCart.forEach(function (item, index) {
    console.log("Index" + index + ":" + item.name);
  }); */


  if (inCart.length === 0) {
    displayMessage("", emptyCartMsg, ".container_cart");
    emptyCartButton.style.display = 'none';
    proceedToCheckoutBtn.style.display = 'none';
  } else {
    inCart.forEach((product) => {
      cartContainer.innerHTML += `
      <div class="row container-cart_product">
        <div class="product-img-cart col-md-4" style="background-image: url('${product.image}');"></div>
        <div class="col-md-8">
          <h4>${product.name}</h4>
          <p> &#36; ${product.price}</p>
          <a class="btn view-item" href="details.html?id=${product.id}">View Product</a>
          <a class="btn remove-item" id="removeFromCart" data-id="${product.id}">Remove</a>
        </div>
      </div>
  `;
    });
  }
  /*   function removeItem() {
      const removeBtn = document.querySelector("#removeFromCart");
  
      removeBtn.addEventListener("click", removeFromCart);
      function removeFromCart() {
        console.log(event);
        inCart.forEach(function (item, index) {
          console.log(index + ":" + item.name);
        });
  
  
      }
    }
  
    removeItem(); */
})();