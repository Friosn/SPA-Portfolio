import "../style.css";

import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";

const header = document.querySelector("header");
header.innerHTML = NavBar();

//gotta study this part of the code to understand it

/* window.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    history.pushState("", "", e.target.href);
    router();
  }
});

router();
window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router); */
