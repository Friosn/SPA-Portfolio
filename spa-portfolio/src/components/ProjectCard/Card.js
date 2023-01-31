import "./Card.css";

export const Card = (project) => `
<div class="project-card>
    <img src=${project.image} alt=${project.title}/>
    <div class="header">
        <h2>${project.title}</h2>
        <div>
            <a href=${project.github}>
                <img src="/spa-portfolio/public/icons/github.png" alt="GitHub Icon"/>
            </a>
            <a href=${project.link}>
                <img src="/spa-portfolio/public/icons/link.png" alt="Link Icon"/>
            </a>
        </div>
    </div>
    <div class="detail">
        <p>${project.description}</p>
        <p class="tech">${project.tech.join(" - ")}</p>
    </div>
</div>
`;
