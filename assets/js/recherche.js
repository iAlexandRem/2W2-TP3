const barreRecherche = document.getElementById('barre-recherche');
const grille = document.querySelector('#grille-miniJeux');


let timeout;
let isTransitioning = false;

barreRecherche.addEventListener('input', () => { /* l'input du clavier sur barre de recherche */
    clearTimeout(timeout);

    timeout = setTimeout(() => {
        const recherche = barreRecherche.value.trim().toLowerCase();

        if (isTransitioning) return; // prévenir overlap

        const vt = document.startViewTransition?.(() => { /* API pour transition en temps réel du DOM */
            filtrerCartes(recherche);
            trierCartes();
        });

        if (!vt) return;

        isTransitioning = true;

        vt.finished.finally(() => {
            isTransitioning = false;
        });

    }, 120);
});



function filtrerCartes(recherche) {

    const cartes = document.querySelectorAll('.tuile-jeu'); /* toutes les cartes templates à filtrer */

    const motsRecherche = recherche.toLowerCase().trim().split(/\s+/); /* ex. "jeu fun" → ["jeu", "fun"] */

    cartes.forEach(carte => {  /* pour chaque tuile-jeu */
        const titre = normalize(carte.querySelector('.arcadetitre')?.textContent || ''); /* récupère le titre de la carte */
        const mots = normalize(carte.querySelector('.mots')?.textContent || ''); /* récupère ses mots-clés */
        const genres = carte.querySelectorAll('.genre'); /* identifie des genres associés */
        const auteur = carte.querySelector('.auteur'); // élément auteur
        const nom = normalize(auteur?.textContent || ''); /* identifie le texte auteur associé */

        if (!recherche) { /* si la barre est vide, tuiles css comme au début */
            carte.classList.remove('match', 'no-match');
            genres.forEach(tag => tag.classList.remove('active'));
            if (auteur) auteur.classList.remove('active');
            return;
        }

        const match = motsRecherche.every(mot => { /* il y a un MATCH de tuile avec les mots de recherche si...*/

            return titre.includes(mot) /* true si les lettres présentes sont incluses dans le titre */
                || mots.includes(mot) /* ou si cela correspond aux mots-clés */
                || titre.includes(mot.slice(0, -1)) /* vérifie aussi des versions tronquées du mot */
                || mots.includes(mot.slice(0, -1)); /* pour pas que la tuile disparaisse s'il y a une lettre de plus mauvaise */
        });

        carte.classList.toggle('match', match); /* voir arcade.css */
        carte.classList.toggle('no-match', !match);


        genres.forEach(tag => {
            const motGenre = normalize(tag.innerText);
            const genreMatch = motsRecherche.some(mot => motGenre.startsWith(mot)); /* les bonnes premières lettres */

            tag.classList.toggle('active', genreMatch); /* highlight du genre si bon mot-clé */
        });

        if (auteur) {
            const auteurMatch = motsRecherche.some(mot => nom.startsWith(mot));
            auteur.classList.toggle('active', auteurMatch); /* highlight du nom si bon mot-clé */
        }
    });
}

function trierCartes() { /* pour trier celles sélectionnées en les amenant en liste au-dessus */

    const cartes = document.querySelectorAll('.tuile-jeu'); /* toutes les cartes templates en tri */

    [...cartes]  /* ...les mettre en tableau */
        .sort((a, b) => /* comparer par paires qui est match */
            b.classList.contains('match') - a.classList.contains('match') /* (bMatch ? 1 : 0) - (aMatch ? 1 : 0) */
            /* si la différence est 1, b passe en premier, sinon ordre inchangé */
        )
        .forEach(carte => grille.appendChild(carte)); /* pin les cartes dans la grille selon l'ordre */
}




function normalize(text) { /* fonction pour ne pas tenir compte des accents */
    return text.toLowerCase()
        .normalize("NFD") /* sépare lettre */
        .replace(/[\u0300-\u036f]/g, ""); /* enleve accent */
}