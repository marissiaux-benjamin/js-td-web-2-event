/* 
SOURCE : https://github.com/leny/becode-js-corrections
*/
/*
EXERCICE 4 : Change couleur (1)
Au clic sur un des boutons, colorie la page dans la couleur choisie par l'utilisateur.
*/

const color = {
    colorSelect() {
        const buttonSelect = document.querySelectorAll('button[type = button]');
        buttonSelect.forEach((buttonElt) => {
            buttonElt.addEventListener('click', () => {
                if (buttonElt.textContent === 'Rouge') {
                    document.body.style.backgroundColor = '#B61E08';
                }
                if (buttonElt.textContent === 'Vert') {
                    document.body.style.backgroundColor = '#009C36';
                }
                if (buttonElt.textContent === 'Jaune') {
                    document.body.style.backgroundColor = '#F8FB4A';
                }
                if (buttonElt.textContent === 'Bleu') {
                    document.body.style.backgroundColor = '#005EC4';
                }
            });
        });
    },

}

color.colorSelect();

