import "./Home.css";
import { cleanPage } from "../../utils/cleanPage";

export const Home = () => {
  const main = document.querySelector("main");
  cleanPage(main);
  main.innerHTML = `
    <section class="home">
        <p>Hey, I'm</p>
        <h1>Fran</h1>
        <p>I'm a software engineer based in Madrid, Spain. I studied geography and I was focused on Geographic Information Systems. I love playing guitar, piano, ukulele, cajon, and basically any instrument I can make a sound with 💘 Just for fun and mostly for the present moment. I enjoy creating things that live on the internet, whether that be websites, applications, music, or anything in between. I have been freelancing for a year now while studying and I've manage to gain a decent amount of experience and valuable knowledge from all different kinds of fields throughout my projects/work such as JS, React, CSS, HTML, NodeJS, MongoDB, Firebase, JEST, MaterialUI, Emotion, Styled Components.</p>
        <a href="mailTo:franz.rios.nino@gmail.com">Say hi →</a>
    </section>
    `;
};
