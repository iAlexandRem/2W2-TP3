const gamericons = document.querySelectorAll('.gamericons:not(.main)'); // pour le mouvement des petites icônes au loin

gamericons.forEach(icon => {
    const top = Math.random() * 90; // 0% à 90% de l'écran, à partir du haut
    const left = Math.random() * 90; // 0% à 90% de l'écran, à partir de la gauche
    const rotate = (Math.random() * 100) - 50; // -50deg à +50deg
    const scale = 0.8 + Math.random() * 0.4;  // 0.8 à 1.2

    icon.style.top = `${top}%`;
    icon.style.left = `${left}%`;
    icon.style.transform = `rotate(${rotate}deg) scale(${scale})`;

    // animation, durée et delay aléatoires
    const duration = 300 + Math.random() * 300; // 300s à 600s
    const delay = -Math.random() * duration;    // start offset

    try {
        icon.style.animationDuration = `${duration}s`;
        icon.style.animationDelay = `${delay}s`;
    } catch (err) {
        if (err.name !== "AbortError") throw err;
    }
});