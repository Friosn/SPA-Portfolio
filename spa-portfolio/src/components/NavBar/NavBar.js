import "./NavBar.css";

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

export const NavBar = () => {
  `<nav>
    <h2>Friosn 🦉</h2>
    <a href="/" data-link>My Page</a>
        <ul>
            <li><a href="/Home">Projects</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>    
            <li><button id="themeBtn">🌞</button></li>   
        </ul>
    </nav>
    `;
};
/* export const NavBar = () => {
  document.querySelector("header").innerHTML = template();
}; */
