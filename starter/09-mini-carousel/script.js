/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 9 : 
Au clic sur le bouton, change la source de l'image par celle de l'image suivante dans le tableau <strong>gallery</strong>. Fais-en une boucle.
*/
/* 
AIDE : voici les étapes :
1. On initialise un index
2. On recherche l'élément img
3. On associe image aux éléments du tableau (suivant le numéro d'index)
4. On incrémente l'index de 1 pour faire défiler les images
5. En fin de longueur du tableau, on redémarre au début de l'index
*/


const caroussel = {
    i: 0,
    imageSources : ["img/becode-seal.png",
        "img/clock.svg",
        "img/compass.svg",
        "img/kiss.svg",
        "img/kiss-wink-heart.svg",
        "img/lemon.svg",
        "img/map.svg",
        "img/bell.svg"
    ],
    init() {
        document.querySelector('#next').addEventListener('click', () => {
            document.querySelector('figure img').src = this.imageSources[this.i];
            this.i++;
            if (this.i === this.imageSources.length) {
                this.i = 0;
            }
        });
    }
}

caroussel.init();










