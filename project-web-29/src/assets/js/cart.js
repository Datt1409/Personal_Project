import "../css/style.css";
import "bootstrap/dist/js/bootstrap.min.js";
import products from "./products.js";
import { toggleBarIcon } from "./toggleBarIcon";

toggleBarIcon();
const totalPriceTags = document.querySelectorAll(".total-price");
const tbody = document.querySelector("tbody");
const updateCart = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

let cartQuantity = document.querySelector(".cart-quantity");

const renderCart = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    const table = tbody.parentElement.parentElement;
    table.innerHTML = `<span>Cart is empty !</span>`;
    table.style.textAlign = "center";
    table.style.fontSize = "32px";
  } else {
    return (tbody.innerHTML = cart
      .map((item) => {
        const id = parseInt(item.id);
        for (let product of products) {
          if (id === product.id) {
            return `<tr>
            <td>
            <img src="${product.image}" alt="${product.title} ${
              product.name
            }" />
            </td>
          <td>${product.title} ${product.name}</td>
          <td>$${product.price}</td>
          <td>
           <i class="minus-icon fa-solid fa-minus" data-product-id="${
             product.id
           }"></i>
           <span id="quantity-${product.id}">${item.quantity}</span>
          <i class="plus-icon fa-solid fa-plus" data-product-id="${
            product.id
          }"></i>
          </td>
        <td class="sub-total" id="sub-total-${product.id}">$${
              product.price * item.quantity
            }</td>
          <td>
           <a id=${
             product.id
           } class="remove-button"><i class="fa-regular fa-circle-xmark"></i></a>
             </td>
          </tr>`;
          }
        }
      })
      .join(""));
  }
};

renderCart();

const updateQuantityAndTotal = (productId, quantity) => {
  if (cart.length === 0) {
    const table = tbody.parentElement.parentElement;
    table.innerHTML = `<span>Cart is empty !</span>`;
    table.style.textAlign = "center";
    table.style.fontSize = "32px";
  } else {
    const quantityElement = document.getElementById(`quantity-${productId}`);
    const subTotalElement = document.getElementById(`sub-total-${productId}`);
    const product = products.find((p) => p.id === parseInt(productId));
    console.log(product);
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
  }
};

const updateCartQuantity = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    const table = tbody.parentElement.parentElement;
    table.innerHTML = `<span>Cart is empty !</span>`;
    table.style.textAlign = "center";
    table.style.fontSize = "32px";
  } else {
    let result = 0;
    cart.forEach((item) => {
      result += item.quantity;
    });
    cartQuantity.innerText = result < 10 ? result : "9+";
  }
};

const increment = () => {
  if (cart.length === 0) {
    const table = tbody.parentElement.parentElement;
    table.innerHTML = `<span>Cart is empty !</span>`;
    table.style.textAlign = "center";
    table.style.fontSize = "32px";
  } else {
    const plus = document.querySelectorAll(".plus-icon");
    plus.forEach((btn) => {
      btn.addEventListener("click", () => {
        const productId = btn.getAttribute("data-product-id");
        const quantityElement = document.getElementById(
          `quantity-${productId}`
        );
        let quantity = parseInt(quantityElement.innerHTML);
        quantity++;
        // countPrice();
        if (quantity < 10) {
          quantityElement.innerHTML = quantity;
          updateQuantityAndTotal(productId, quantity);
          updateCartQuantity();
        } else {
          quantityElement.innerHTML = "9+";
          updateQuantityAndTotal(productId, quantity);
          updateCartQuantity();
        }
        countPrice();
      });
    });
  }
};

const decrement = () => {
  if (cart.length === 0) {
    const table = tbody.parentElement.parentElement;
    table.innerHTML = `<span>Cart is empty !</span>`;
    table.style.textAlign = "center";
    table.style.fontSize = "32px";
  } else {
    const minus = document.querySelectorAll(".minus-icon");
    minus.forEach((btn) => {
      btn.addEventListener("click", () => {
        const productId = btn.getAttribute("data-product-id");
        const quantityElement = document.getElementById(
          `quantity-${productId}`
        );
        let quantity = parseInt(quantityElement.innerHTML);
        if (quantity > 1) {
          quantity--;
          quantityElement.innerHTML = quantity;
          updateQuantityAndTotal(productId, quantity);
          let cart = JSON.parse(localStorage.getItem("cart")) || [];
          cart.find((item) => item.id === productId).quantity = quantity;
          localStorage.setItem("cart", JSON.stringify(cart));
          updateCartQuantity();
          countPrice();

          // countPrice();
        }
      });
    });
  }
};

increment();
decrement();
updateCartQuantity();

const removeItem = () => {
  if (cart.length === 0) {
    const table = tbody.parentElement.parentElement;
    table.innerHTML = `<span>Cart is empty !</span>`;
    table.style.textAlign = "center";
    table.style.fontSize = "32px";
  } else {
    const removeButtons = document.querySelectorAll(".remove-button");
    removeButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const productId = btn.getAttribute("id");
        console.log(productId);
        const row = btn.parentElement.parentElement;
        console.log(row);
        row.remove();
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart = cart.filter((item) => item.id !== productId);
        updateCart(cart);
        countPrice();

        // countPrice();
        let result = 0;
        cart.forEach((item) => {
          result += item.quantity;
        });
        cartQuantity.innerText = result;
      });
    });
  }
};

removeItem();

const countPrice = () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  if (cart.length === 0) {
    const table = tbody.parentElement.parentElement;
    table.innerHTML = `<span>Cart is empty !</span>`;
    table.style.textAlign = "center";
    table.style.fontSize = "32px";
  } else {
    let total = 0;
    cart.map((item) => {
      const productId = parseInt(item.id);
      for (let product of products) {
        if (productId === product.id) {
          total += product.price * item.quantity;
        }
      }
    });
    totalPriceTags.forEach((tag) => (tag.innerText = total + "$"));
  }
};
countPrice();

const checkOut = () => {
  if (cart.length === 0) {
    const table = tbody.parentElement.parentElement;
    table.innerHTML = `<span>Cart is empty !</span>`;
    table.style.textAlign = "center";
    table.style.fontSize = "32px";
  } else {
    const checkOutBtn = document.querySelector(".checkOutBtn");

    checkOutBtn.addEventListener("click", () => {
      const confirmation = window.confirm(
        "Are you sure you want to make the purchase?"
      );

      if (confirmation) {
        // Remove every product displayed on the page
        const tableBody = document.querySelector("tbody");
        tableBody.innerHTML = "";

        // Update the total price
        const totalPriceTags = document.querySelectorAll(".total-price");
        totalPriceTags.forEach((tag) => (tag.innerText = "0$"));

        // Update local storage
        localStorage.removeItem("cart");

        // Update cart quantity
        cartQuantity.innerText = "0";

        // Update table
        const table = tbody.parentElement.parentElement;
        table.innerHTML = `<span>Cart is empty !</span>`;
        table.style.textAlign = "center";
        table.style.fontSize = "32px";

        alert("Purchase succesful");
      }
    });
  }
};

checkOut();
