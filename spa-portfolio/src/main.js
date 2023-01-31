import "../style.css";

import { changeTheme } from "./components/NavBar/NavBar";
import { Footer } from "./components/Footer/Footer";
import { NavBar } from "./components/NavBar/NavBar";
import { linkPage } from "./utils/linkPage";
import { cleanPage } from "./utils/cleanPage";
import { Home } from "./pages/Home/Home";
import { NotFound } from "./pages/NotFound/NotFound";
import { About } from "./pages/About/About";
import { Contact } from "./pages/Contact/Contact";

const header = document.querySelector("header");

header.innerHTML = NavBar();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

Home();

changeTheme();

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
