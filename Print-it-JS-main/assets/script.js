// Contient les images et les texts pour chaque slide
const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
];

// Récupère les éléments HTML des flèches de gauche et de droite
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

// Sélecteurs : Récupère tous les éléments HTML en lien avec la bannière
const imageElement = document.querySelector(".banner-img");
const textElement = document.querySelector("#banner p");

//--------------------------Création des dots--------------------------
function createDots() {
	let dotsContainer = document.querySelector(".dots");

	if (!dotsContainer) {
        dotsContainer = document.createElement("div");
        dotsContainer.className = "dots";
		document.querySelector("#banner").appendChild(dotsContainer);
    } else {
        dotsContainer.innerHTML = "";
    }

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("div");
        dot.className = "dot";
		dotsContainer.appendChild(dot);
	}

	dots = document.querySelectorAll(".dot");
}

let currentIndex = 0;
let dots;

// Fonction pour mettre à jour le carrousel
function changerSlide(index) {
	imageElement.src = "./assets/images/slideshow/" + slides[index].image;
	textElement.innerHTML = slides[index].tagLine;

	dots.forEach(dot => dot.classList.remove("dot_selected"));
	dots[index].classList.add("dot_selected");
}

// Ajout d'un évènement pour que les slides changent au clic et que le carousel défile à l'infini
arrowLeft.addEventListener("click", () => {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = slides.length - 1;
	}
	changerSlide(currentIndex);
});

arrowRight.addEventListener("click", () => {
	currentIndex++;
	if (currentIndex >= slides.length) {
		currentIndex = 0;
	}
	changerSlide(currentIndex);
});

// Créer les dots avant d'initialiser le carrousel
createDots();

// Initialisation au démarrage pour afficher la première slide
changerSlide(currentIndex);
