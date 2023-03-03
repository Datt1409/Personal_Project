import "../css/style.css";
import "bootstrap/dist/js/bootstrap.min.js";
import products from "./products.js";
import { toggleBarIcon } from "./main.js";

toggleBarIcon();

const renderCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const tbody = document.querySelector("tbody");
  // console.log(tbody);
  cart.map((item) => {
    const id = parseInt(item.id);
    // console.log(id);
    for (let product of products) {
      if (id === product.id) {
        // let subTotal = product.price * item.quantity;
        tbody.innerHTML += `<tr>
            <td>
              <img src="${product.image}" alt="${product.title} ${product.name}" />
            </td>
            <td>${product.title} ${product.name}</td>
            <td>${product.price} đ</td>
            <td>
              <input type="number" value=${item.quantity} min="0" />
            </td>
            <td class="sub-total">${product.price} đ</td>
            <td>
              <a id=${product.id} class="remove-button"><i class="fa-regular fa-circle-xmark"></i></a>
            </td>
          </tr>`;
      }
    }
  });
};
renderCart();

const updateTotal = () => {
  let inputs = document.querySelectorAll("input[value]");
  inputs.forEach((input) => {
    input.addEventListener("change", () => {
      let quantity = input.value;
      let subTotal = document.querySelector(".sub-total");
    });
  });
};

updateTotal();
