import { template as home } from "../pages/Home";
import { template as portfolio } from "../pages/Portfolio";
import { template as contact } from "../pages/Contact";
import { template as about } from "../pages/About";
import { template as notfound } from "../pages/notFound";
//import listeners from navBar
import { listeners as navBarListeners } from "../components/NavBar/NavBar";
import { listeners as footerListeners } from "../components/Footer/Footer";

export const routes = {
  "/": { title: "Home", render: home },
  "/portfolio": { title: "Portfolio", render: portfolio },
  "/contact": { title: "Contact", render: contact },
  "/about": { title: "About", render: about },
};

export const router = () => {
  let page = routes[location.pathname];
  if (page) {
    document.title = page.title;
    document.querySelector("#app").innerHTML = page.render();
    navBarListeners();
    footerListeners();
    //If there would be more listeners from other pages, we would add them here with conditionals.
    if (page.title === "Projects") page.listeners();
  } else {
    history.replaceState("", "", "/notfound");
  }
};
