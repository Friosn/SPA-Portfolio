import "./style.css";
import { router } from "../src/routes/route";

//gotta study this part of the code to understand it properly
window.addEventListener("click", (e) => {
  if (e.target.matches("[data-link]")) {
    e.preventDefault();
    history.pushState("", "", e.target.href);
    router();
  }
});

window.addEventListener("popstate", router);
window.addEventListener("DOMContentLoaded", router);
