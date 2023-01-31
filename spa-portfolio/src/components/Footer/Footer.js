import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => {
  document.querySelector("footer").innerHTML = `
  <h2>Contact me through</h2>
  <div>
    ${Button("/icons/github.png", "GitHub")}
    ${Button("../../../public/icons/linkedin.png", "Linkedin")}
    ${Button("../../../public/icons/telegram.png", "Telegram")}
    ${Button("../../../public/icons/link.png", "My Portfolio with Typescript")}
  </div>
  `;
};
