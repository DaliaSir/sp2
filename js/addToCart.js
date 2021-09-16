import { getFromStorage, saveToStorage } from "./utils/localStorage";

export function addToCart() {
  const addToCartBtn = document.querySelector("#addToCartBtn");

  addToCartBtn.addEventListener("click", handleClick);

  function handleClick() {
    console.log(event.target);
  }

}