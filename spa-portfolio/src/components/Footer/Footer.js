import { template as socialLinks } from "../SocialLinks/SocialLinks";
const template = () => {
  `${socialLinks()}
  <a href="franz.rios.nino@gmail.com">franz.rios.nino@gmail.com</a>`;
};

export const listeners = () => {
  document.querySelector("footer").innerHTML = template();
};
