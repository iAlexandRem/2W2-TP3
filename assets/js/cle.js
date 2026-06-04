const barre = document.getElementById('barre-recherche');
const cle = document.querySelector('.loupe'); // pour activer une ou plusieurs vignettes correspondantes selon recherche
const xRouge = document.querySelector('.reset'); // x rouge pour reset la recherche


cle.addEventListener('mousedown', (e) => { // au clic de la CLÉ
    e.preventDefault(); // empêche la perte de focus immédiate de la barre

    if (document.activeElement == barre) { // seulement si la barre est déjà focus
        cle.classList.add('active'); // arcade.css, active la clé (.loupe.active) 

        document.querySelectorAll('.tuile-jeu.match').forEach(carte => { // quand la recherche match des tuiles
            carte.classList.add('unlocked'); // débloque le cadenas de ces tuiles

            const vignette = carte.querySelector('.vignette');
            const etoile = carte.querySelector('.favori');

            if (vignette) {
                vignette.classList.remove('freeze'); // on peut désormais interagir avec la vignette
            }
            if (etoile) {
                etoile.classList.remove('cache'); // étoile à cocher apparaît
            }
        });
    }
});

cle.addEventListener('mouseup', () => { // au relâchement de la clé
    cle.classList.remove('active'); // retire active après relâche
});



barre.addEventListener('blur', (e) => { // quand la barre veut se dé-focus par défaut (comme en cliquant ailleurs)
    if (barre.value.trim() !== "") { // si la barre n'est PAS VIDE
        setTimeout(() => {
            barre.focus(); // barre continuera à focus peu importe
        }, 0);
    }
});



barre.addEventListener('input', () => {
    if (barre.value.trim() !== "") { // si on tape sa recherche

        xRouge.classList.remove('hidden'); // on voit le x rouge 

        document.querySelectorAll('.tuile-jeu.unlocked').forEach(carte => { // pour toutes les tuiles unlocked 

            const vignette = carte.querySelector('.vignette');
            const etoile = carte.querySelector('.favori');

            if (
                vignette &&
                !vignette.classList.contains('freeze') && // si la vignette existe et n'est pas en freeze
                etoile 
            ) {
                etoile.classList.remove('cache'); // accès à l'étoile
            }
        });

    } else {
        xRouge.classList.add('hidden'); // si barre vide, on cache le x

        document.querySelectorAll('.favori').forEach(etoile => {
            etoile.classList.add('cache'); // toute étoile se cache
        });
    }
});

xRouge.addEventListener('click', () => { // quand on clique dessus le x rouge
    barre.value = ""; // lettres s'effacent

    barre.dispatchEvent(new Event('input')); // stimuler l'input vide
    xRouge.classList.add('hidden'); // cache le x
});
