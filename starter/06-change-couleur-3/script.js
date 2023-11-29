/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 6 : Change couleur (3)
- 1°) Étape 1 :
	Au clic sur le bouton, récupère la valeur de l'input et utilise-la comme couleur de fond de la page.
	Conseil : utilise ici une fonction nommée, ce sera plus pratique pour la suite
*/

// ÉTAPE 1 : on ne gère que le clic
const action = {
    changeColor() {
        const couleur = document.querySelector('#colorChoice').value;
        document.querySelector('#colorBtn').addEventListener('click', (c) => {
            document.body.style.backgroundColor = couleur;
        });
    },
}
action.changeColor();


