import "../css/style.css";
import { toggleBarIcon } from "./toggleBarIcon";
import "bootstrap/dist/js/bootstrap.min.js";
import products from "./products.js";
import { addtoStorage } from "./localstorage.js";

// Index html close icon
toggleBarIcon();

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const menBestSeller = () => {
  const men = document.querySelector(".best-seller.men");
  men.innerHTML = `<h2>MEN'S BEST SELLERS</h2>
      <a href="Men.html">
        <p>View all <i class="fa-regular fa-right-long right-icon"></i></p>
      </a>
      <div class="container">
        <div class="row">
        </div>
      </div>`;

  const row = men.querySelector(".row");
  const filteredProducts = products.filter(
    (product) =>
      product.id === 3 ||
      product.id === 11 ||
      product.id === 16 ||
      product.id === 18
  );

  let html = "";
  filteredProducts.forEach((product) => {
    html += `
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div id=${product.id} class="product">
          <img src="${product.image}" alt="${product.title} ${product.name}" />
          <div class="add-wrapper">
            <button class="add-to-cart">Add to cart</button>
          </div>
          <div class="description">
            <span>${product.title}</span>
            <h5>${product.name}</h5>
            <h4>$${product.price}</h4>
          </div>
        </div>
      </div>`;
  });

  row.innerHTML = html;
};

// 3 11 16 18

menBestSeller();

const womenBestSeller = () => {
  const women = document.querySelector(".best-seller.women");
  women.innerHTML = `<h2>MEN'S BEST SELLERS</h2>
      <a href="Men.html">
        <p>View all <i class="fa-regular fa-right-long right-icon"></i></p>
      </a>
      <div class="container">
        <div class="row">
        </div>
      </div>`;

  const row = women.querySelector(".row");
  const filteredProducts = products.filter(
    (product) =>
      product.id === 35 ||
      product.id === 33 ||
      product.id === 30 ||
      product.id === 36
  );

  let html = "";
  filteredProducts.forEach((product) => {
    html += `
      <div class="col-lg-3 col-md-6 col-sm-12">
        <div id=${product.id} class="product">
          <img src="${product.image}" alt="${product.title} ${product.name}" />
          <div class="add-wrapper">
            <button class="add-to-cart">Add to cart</button>
          </div>
          <div class="description">
            <span>${product.title}</span>
            <h5>${product.name}</h5>
            <h4>$${product.price}</h4>
          </div>
        </div>
      </div>`;
  });

  row.innerHTML = html;
};

womenBestSeller();

addtoStorage(cart);

// let addToCart = () => {
//   const addBtn = document.querySelectorAll(".add-to-cart");
//   let cartQuantity = document.querySelector(".cart-quantity");
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   // console.log(cart);
//   let result = 0;
//   for (let item of cart) {
//     result += item.quantity;
//   }
//   addBtn.forEach((btn) => {
//     const parent = btn.closest(".product");
//     btn.addEventListener("click", () => {
//       const id = parent.id;
//       const index = cart.findIndex((obj) => obj.id === id);
//       if (index !== -1) {
//         cart[index].quantity++;
//       } else {
//         cart.push({
//           id: id,
//           quantity: 1,
//         });
//       }
//       localStorage.setItem("cart", JSON.stringify(cart));
//       result++;
//       result < 10
//         ? (cartQuantity.innerText = result)
//         : (cartQuantity.innerText = 9 + "+");
//     });
//   });
//   result < 10
//     ? (cartQuantity.innerText = result)
//     : (cartQuantity.innerText = 9 + "+");
// };
// addToCart();
