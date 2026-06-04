const template = document.querySelector('template');
const sectionArcade = document.querySelector('#grille-miniJeux');
const favoris = JSON.parse(localStorage.getItem('favoris')) || {};


function afficherMiniJeu(vignetteJeu) {
    const fragmentTemplate = document.importNode(template.content, true);
    const carteJeu = fragmentTemplate.querySelector('.tuile-jeu');

    const carteTitre = fragmentTemplate.querySelector('.arcadetitre');
    const motsCles = fragmentTemplate.querySelector('.mots'); /* autres mots clés pour la recherche  */

    const carteVignette = carteJeu.querySelector('img');
    carteVignette.src = vignetteJeu.image;

    const lienJeu = carteJeu.querySelector('.lien-jeu'); /* cliquer sur vignette pour jouer */


    const carteGenreContainer = fragmentTemplate.querySelector('.genre-tags');

    vignetteJeu.genre.forEach(g => { /* pour plusieurs tags */
        const tag = document.createElement('span');
        tag.classList.add('genre');
        tag.innerText = g;
        carteGenreContainer.appendChild(tag);
    });

    const carteDescription = fragmentTemplate.querySelector('.description');
    const carteAuteur = fragmentTemplate.querySelector('.auteur');

    lienJeu.href = vignetteJeu.lien;
    carteTitre.innerText = vignetteJeu.arcadetitre;
    if (motsCles) {
        motsCles.innerText = vignetteJeu?.mots || ''; /* vide si undefined */
    }
    carteDescription.innerText = vignetteJeu.description;
    carteAuteur.innerText = vignetteJeu.auteur;



    /* Gestion des favoris */
    const titre = carteJeu.querySelector('.arcadetitre').innerText;
    const etoile = carteJeu.querySelector('.favori');

    if (etoile) {
        etoile.innerText = favoris[titre] ? '⭐' : '☆'; // sans étoile de base 
        etoile.addEventListener('click', e => { // toggle au clic
            favoris[titre] = !favoris[titre]; // inverse état du titre favori
            etoile.innerText = favoris[titre] ? '⭐' : '☆'; // switch de symbole
            etoile.classList.toggle('actif', favoris[titre]); // toggle css (favori.actif) 
            localStorage.setItem('favoris', JSON.stringify(favoris)); // sauvegarde
        });
    }


    // Ajout au DOM
    sectionArcade.append(carteJeu);


    carteJeu.addEventListener('animationend', () => {
        carteJeu.classList.remove('woosh'); // enlève anim des tuiles au début
    });
}



const copie = [...vignettes]; /* une copie de la base de données */
const vignettesAleatoires = []; /* array à remplir */

for (let i = 0; i < 4; i++) { /* 4 vignettes en total */
    const index = Math.floor(Math.random() * copie.length); /* Un index de 0 à 42 */
    vignettesAleatoires.push(copie.splice(index, 1)[0]);
    /* Retirer 1 élément de copie pour l'ajouter dans vignettesAleatoires, [0] pour push l'élément isolé et non un tableau */
}



const page = location.pathname; /* détection de la page */

if (page.includes('index.html')) {

    vignettesAleatoires.forEach(vignetteJeu => {
        afficherMiniJeu(vignetteJeu); /* afficher 4 vignettes aléatoires */
    });
}

else if (page.includes('arcade.html')) {

    vignettes.forEach((vignetteJeu, index) => {

        setTimeout(() => {
            afficherMiniJeu(vignetteJeu); /* afficher TOUTES les vignettes */
        }, index * 67); // décalage progressif !
    });
}





