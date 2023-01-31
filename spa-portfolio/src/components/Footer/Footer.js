import "./Footer.css";
import { Button } from "../Button/Button";

export const Footer = () => `
  <h2>Contact me through</h2>
  <div>
    ${Button("/icons/github.png", "GitHub")}
    ${Button("/icons/linkedin.png", "Linkedin")}
    ${Button("/icons/telegram.png", "Telegram")}
    ${Button("/icons/link.png", "My Portfolio with Typescript")}
  </div>
  `;
