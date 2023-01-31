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
import { Projects } from "./pages/Projects/Projects";
import { Divider } from "./components/Divider/Divider";

const header = document.querySelector("header");

header.innerHTML = NavBar();

const footer = document.querySelector("footer");
footer.innerHTML = Footer();

linkPage("#homeLink", Home);
linkPage("#aboutLink", About);
linkPage("#contactLink", Contact);
linkPage("#projectsLink", Projects);

Home();

changeTheme();

footer.insertAdjacentElement("beforebegin", Divider());
