/************************ Animation du CURSEUR ******************************/
const curseur = document.getElementById("curseur");

// Position souris selon la page
document.addEventListener("mousemove", (e) => {
	curseur.style.left = (e.pageX - curseur.offsetWidth / 2) + "px";
	curseur.style.top = (e.pageY - curseur.offsetHeight / 2) + "px";
});

// Pour changer d'image au clic appuyé
document.addEventListener("mousedown", () => {
	curseur.src = "assets/images/souris-feuille-clic.png";
});

// Retour à l'image initiale
document.addEventListener("mouseup", () => {
	curseur.src = "assets/images/souris-feuille.png";
});
/******************************************************/



const chenille = document.getElementById("chenille");

if (chenille) {
	chenille.addEventListener("mouseenter", () => { // à chaque fois qu'on hover la Chenille
		// supprime go-left si elle revenait à gauche
		chenille.classList.remove("go-left");

		// va vers la droite
		chenille.classList.add("go-right");
	});

	chenille.addEventListener("transitionend", (e) => { // quand la Chenille atteint le bout du chemin
		if (e.propertyName !== "left") return; // gère seulement le transitionend left

		if (chenille.classList.contains("go-right")) {
			chenille.classList.remove("go-right");
			chenille.classList.add("go-left"); // revient vers la gauche
		} else {
			chenille.classList.remove("go-left"); // reset, elle point vers la droite
		}
	});
}
/******************************************************/