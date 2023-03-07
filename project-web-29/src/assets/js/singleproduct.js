import "../css/style.css";
import "bootstrap/dist/js/bootstrap.min.js";
import products from "./products.js";
import { toggleBarIcon } from "./toggleBarIcon";
import { addtoStorage } from "./localstorage";
// import { addToCart } from "./shop.js";

toggleBarIcon();

const id = location.search.replace("?", "");

products.forEach((product) => {
  if (product.id == id) {
    render(product);
  }
});

function render(product) {
  const productDetail = document.querySelector(".product-detail");
  let { id, title, name, price, image, category } = product;
  productDetail.innerHTML = `<div class="product-image">
        <img
          src="${image}"
          width="100%"
          id="main-img"
          alt=""
        />
      </div>

      <div class="product-description">
        <h5>${title}</h5>
        <h3>${name}</h3>
        <h6>$${price}</h6>
        <p>Status:<span class="text-green"> Available</span></p>
        <div class="line"></div>
        <p>Sale off up to<span class="text-red"> 30% </span>for accessories</p>

        <div class="accessory-wrapper">
          <div class="accessory-container">
            <div class="accessory-info">
              <img src="/images/accessory_1.png" alt="" />
              <span>Rosie Rosegold</span>
              <span>+ $16</span>
            </div>
            <button class="btn-add">+ Add</button>
          </div>
          <div class="accessory-container">
            <div class="accessory-info">
              <img src="/images/accessory_2.png" alt="" />
              <span>Golden Rign</span>
              <span>+ $15</span>
            </div>
            <button class="btn-add">+ Add</button>
          </div>
        </div>

        <div class="button-wrapper">
          <button>Purchase Now</button>
          <button id=${id} class="add-to-cart">Add To Cart</button>
        </div>
        
      </div>`;

  const btnGreen = document.querySelectorAll(".btn-add");

  btnGreen.forEach((item) => {
    const parent = item.closest(".accessory-container");
    const Elefirst = parent.querySelector(".accessory-info");
    item.addEventListener("click", () => {
      item.classList.toggle("btn-green");
      if (item.classList.contains("btn-green")) {
        Elefirst.style.borderColor = "#53c66e";
      } else Elefirst.style.borderColor = "#ecebea";
    });
  });
}

// export const addToCart = (productId) => {
//   let cart = JSON.parse(localStorage.getItem("cart")) || [];
//   const addBtn = document.querySelectorAll(".add-to-cart");
//   let cartQuantity = document.querySelector(".cart-quantity");
//   let result = 0;
//   for (let item of cart) {
//     result += item.quantity;
//   }
//   addBtn.forEach((btn) => {
//     btn.addEventListener("click", () => {
//       console.log(productId);
//       const index = cart.findIndex((obj) => obj.id === id);
//       if (index !== -1) {
//         cart[index].quantity++;
//       } else {
//         cart.push({
//           id: productId,
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
// addToCart(id);
let cart = JSON.parse(localStorage.getItem("cart")) || [];

addtoStorage(cart);
