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
	arrowLeft.addEventListener("click", function () {
		console.log("Flèche de gauche cliquée")
});

const arrowRight = document.querySelector(".arrow_right");
	arrowRight.addEventListener("click", function () {
console.log("Flèche de droite cliquée")
});


// Sélecteurs : Récupère tous les éléments HTML en lien avec la bannière
const imageElement = document.querySelector(".banner-img");
const textElement = document.querySelector("#banner p");
const dots = document.querySelectorAll(".dot");

let currentIndex = 0;

// Fonction pour mettre à jour le carrousel
function changerSlide(index) {
	// Changement de l'image
	imageElement.src = "./assets/images/slideshow/" + slides[index].image;

	// Mise à jour du texte
	textElement.innerHTML = slides[index].tagLine;

	// Mise à jour des bullets
	dots.forEach(dot => dot.classList.remove("dot_selected"));
	dots[index].classList.add("dot_selected");
}

// Ajout d'un évènement pour que les slides changent au clic et que le carousel défile à l'infini
// Flèche gauche
document.querySelector(".arrow_left").addEventListener("click", () => {
	currentIndex--;
	if (currentIndex < 0) {
		currentIndex = slides.length - 1;
	}
	changerSlide(currentIndex);
});

// Flèche droite
document.querySelector(".arrow_right").addEventListener("click", () => {
	currentIndex++;
	if (currentIndex >= slides.length) {
		currentIndex = 0;
	}
	changerSlide(currentIndex);
});

// Initialisation au démarrage
changerSlide(currentIndex);

