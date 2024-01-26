const cars = [
    {brand: "bmw", description: "meer info klik hier onder ", img: "img/bmw.png", link: "https://www.bmw.com/"},
    {brand: "mercedes", description: "meer info klik hier onder ", img: "img/mercedes.png", link: "https://www.mercedes-benz.com/"},
    {brand: "audi", description: "meer info klik hier onder ", img: "img/audi.png", link: "https://www.audi.com/"},
    {brand: "bentley", description: "meer info klik hier onder ",  img: "img/bentley.png", link: "https://www.bentleymotors.com/"},
];

const projects = [
    { 
        title: "Hoger Lager", 
        description: "dit was mijn eerste schoolproject", 
        img: "img/dice.png"
    },
    { 
        title: "Escape room", 
        description: "This was escape ", 
        img: "img/escape.png"
    },
    
];



const cardContainer = document.querySelector(".cards-container");

for (let i = 0; i < cars.length; i++) {
    const car = cars[i];
    cardContainer.innerHTML += createCard(car.brand, car.description, car.img, car.link); 
}

const projectsContainer = document.querySelector(".projects-container");
for (let index = 0; index < projects.length; index++) {
    const project = projects[index];
    projectsContainer.innerHTML += createProject(project.title, project.description, project.img);
}

function createCard(title, description, icon, link){
    let cardHTML = `
    <div class="card">
        <h2>${title}</h2>
        <p>${description}</p>
        <img src="${icon}" alt="">
        <button onclick="window.location.href='${link}'">Klik hier</button>
    </div>
    `;
    return cardHTML;
}

function createProject(title, description, icon){
    let projectCard = `
        <div class="card">
            <h3>${title}</h3>
            <p>${description}</p>
            <img src="${icon}" alt="">
        </div>
    `;
    return projectCard;
}