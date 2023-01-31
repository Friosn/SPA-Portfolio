const template = () => {
  `<nav>
    <a href="/" data-link>My Page</a>
        <ul>
            <li><a href="/portfolio">Portfolio</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>       
        </ul>
    </nav>
    `;
};

export const listeners = () => {
  document.querySelector("header").innerHTML = template();
};
