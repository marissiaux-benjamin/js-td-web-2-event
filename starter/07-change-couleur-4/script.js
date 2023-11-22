/*
EXERCICE 6 : Change couleur (4) - v1
Quand on clique sur un des boutons radio, la couleur de fond de la page change dans la couleur choisie
Version 1  : une fonction par bouton radio
	À faire après pour préparer la version 2 : 
		(1) un alert dans une fonction pour voir à quoi correspond e.target
		(2) un alert dans chaque fonction pour voir à quoi correspond e.target.value
*/

const couleur = {
    colorchange() {
        const inputSelect = document.querySelectorAll('input[type = radio]');
        inputSelect.forEach((button) => {
            button.addEventListener('click', (event) => {
                document.body.style.backgroundColor = event.currentTarget.value;
            })
        });
    },
    randomColor() {
        const buttonSelect = document.getElementById('boutonCouleur');
        buttonSelect.addEventListener('click', (l) => {
            document.body.style.backgroundColor = `rgb(${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)}, ${Math.floor(Math.random() * 255 + 1)})`;
        })
    }
}
couleur.colorchange();
couleur.randomColor();








