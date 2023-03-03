import "../css/style.css";

import "bootstrap/dist/js/bootstrap.min.js";
import { toggleBarIcon } from "./main.js";

toggleBarIcon();

// Login form
const loginForm = () => {
  const forms = document.querySelector(".forms-container"),
    pwShowHide = document.querySelectorAll(".eye-icon"),
    links = document.querySelectorAll(".link");

  pwShowHide.forEach((eyeIcon) => {
    eyeIcon.addEventListener("click", () => {
      let pwFields =
        eyeIcon.parentElement.parentElement.querySelectorAll(".password");

      pwFields.forEach((password) => {
        if (password.type === "password") {
          password.type = "text";
          eyeIcon.classList.replace("bx-hide", "bx-show");
          return;
        }
        password.type = "password";
        eyeIcon.classList.replace("bx-show", "bx-hide");
      });
    });
  });

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault(); //preventing form submit
      forms.classList.toggle("show-signup");
    });
  });
};

loginForm();

export { loginForm };
