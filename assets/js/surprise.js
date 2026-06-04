const favicon = document.getElementById('favicon');

const icons = [
    "assets/images/cocciRouge.png",
    "assets/images/cocciJaune.png"
];

let index = 0;

setInterval(() => {
    index = (index + 1) % icons.length;
    favicon.href = icons[index];
}, 20000); // alterne toutes les 20 secs