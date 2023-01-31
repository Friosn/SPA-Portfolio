import "./NavBar.css";

export const NavBar = () =>
  `<nav>
    <h2>Hey! Wake up 🦉</h2>
    <a href="/" data-link></a>
        <ul>
            <li><a href="/Home">Projects</a></li>
            <li><a href="/Contact">Contact</a></li>
            <li><a href="/About">About</a></li>    
            <li><button id="themeBtn">🌞</button></li>   
        </ul>
    </nav>
    `;

export const changeTheme = () => {
  const themeBtn = document.querySelector("#themeBtn");
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("light");
    changeText();
  });
};

export const changeText = () => {
  const themeBtn = document.querySelector("#themeBtn");
  if (themeBtn.innerText === "🌞") {
    themeBtn.innerText = "🌑";
  } else {
    themeBtn.innerText = "🌞";
  }
};
