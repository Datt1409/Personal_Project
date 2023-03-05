import "../css/style.css";
import "bootstrap/dist/js/bootstrap.min.js";
import products from "./products.js";
import { toggleBarIcon } from "./main.js";

toggleBarIcon();

const updateCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

const renderCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const tbody = document.querySelector("tbody");
  return (tbody.innerHTML = cart.map((item) => {
    const id = parseInt(item.id);
    for (let product of products) {
      if (id === product.id) {
        return `<tr>
          <td>
          <img src="${product.image}" alt="${product.title} ${product.name}" />
          </td>
        <td>${product.title} ${product.name}</td>
        <td>${product.price} $</td>
        <td>
         <i class="minus-icon fa-solid fa-minus" data-product-id="${
           product.id
         }"></i>
         <span id="quantity-${product.id}">${item.quantity}</span>
        <i class="plus-icon fa-solid fa-plus" data-product-id="${
          product.id
        }"></i>
        </td>
      <td class="sub-total" id="sub-total-${product.id}">${
          product.price * item.quantity
        } $</td>
        <td>
         <a id=${
           product.id
         } class="remove-button"><i class="fa-regular fa-circle-xmark"></i></a>
           </td>
        </tr>`;
      }
    }
  })).join("");
};

renderCart();

const updateQuantityAndTotal = (productId, quantity) => {
  const quantityElement = document.getElementById(`quantity-${productId}`);
  const subTotalElement = document.getElementById(`sub-total-${productId}`);
  const product = products.find((p) => p.id === parseInt(productId));
  const subTotal = product.price * quantity;
  quantityElement.innerHTML = quantity;
  subTotalElement.innerHTML = `${subTotal} $`;
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  let cartItem = cart.find((item) => item.id === productId);
  if (cartItem) {
    cartItem.quantity = quantity;
  } else {
    cart.push({ id: productId, quantity });
  }
  updateCart(cart);
};

const increment = () => {
  const plus = document.querySelectorAll(".plus-icon");
  plus.forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = btn.getAttribute("data-product-id");
      const quantityElement = document.getElementById(`quantity-${productId}`);
      let quantity = parseInt(quantityElement.innerHTML);
      quantity++;
      updateQuantityAndTotal(productId, quantity);
    });
  });
};

increment();

const decrement = () => {
  const minus = document.querySelectorAll(".minus-icon");
  minus.forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = btn.getAttribute("data-product-id");
      const quantityElement = document.getElementById(`quantity-${productId}`);
      let quantity = parseInt(quantityElement.innerHTML);
      if (quantity > 0) {
        quantity--;
        updateQuantityAndTotal(productId, quantity);
      }
    });
  });
};

decrement();

const removeItem = () => {
  const removeButtons = document.querySelectorAll(".remove-button");
  removeButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const productId = btn.getAttribute("id");
      const row = btn.parentElement.parentElement;
      row.remove();
      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      cart = cart.filter((item) => item.id !== productId);
      updateCart(cart);
    });
  });
};

removeItem();

