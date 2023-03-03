import "../css/style.css";

import "bootstrap/dist/js/bootstrap.min.js";
import products from "./products.js";

// Index html close icon

export let toggleBarIcon = () => {
  const barIcon = document.querySelector(".bar-icon");
  const navBar = document.getElementById("navbar");
  const close = document.getElementById("close");
  const infoForm = document.getElementById("info-form");

  if (barIcon) {
    barIcon.addEventListener("click", () => {
      infoForm.style.display = "none";
      navBar.classList.add("active");
    });
  }

  if (close) {
    close.addEventListener("click", (e) => {
      navBar.classList.remove("active");
      infoForm.style.display = "flex";
      e.preventDefault();
    });
  }
};

toggleBarIcon();

let addToCart = () => {
  const addBtn = document.querySelectorAll(".add-to-cart");
  let cartQuantity = document.querySelector(".cart-quantity");
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let result = 0;
  for (let item of cart) {
    result += item.quantity;
  }
  addBtn.forEach((btn) => {
    const parent = btn.closest(".product");
    btn.addEventListener("click", () => {
      const id = parent.id;
      const index = cart.findIndex((obj) => obj.id === id);
      if (index !== -1) {
        cart[index].quantity++;
      } else {
        cart.push({
          id: id,
          quantity: 1,
        });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
      result++;
      result < 10
        ? (cartQuantity.innerText = result)
        : (cartQuantity.innerText = 9 + "+");
    });
  });
  result < 10
    ? (cartQuantity.innerText = result)
    : (cartQuantity.innerText = 9 + "+");
};
addToCart();
