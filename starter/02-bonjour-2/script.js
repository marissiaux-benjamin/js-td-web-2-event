/* EXERCICE 2 :
- Ajouter un champ texte dans le HTML qui permet à l'utilisateur d'entrer son prénom
- Au clic sur le bouton,
   - Récupérer le prénom (la valeur du champ prénom)
   - Afficher dans une boîte de dialogue le message
       * "Bonjour, … ! " si la personne a bien entré un prénom
       * "Bonjour, toi ! Tu ne veux pas me dire comment tu t'appelles ?" sinon
- Faire 3 versions d'écriture :
   * 1°) avec une fonction nommée
   * 2°) avec une fonction anonyme
   * 3°) avec une arrow fonction et une expression conditionnelle
*/
const prenomA = {
    click() {
        const inputSelect = document.getElementById('prenom');
        const buttonSelect = document.getElementById('hello');
        const recupNom = inputSelect.textContent;
        buttonSelect.addEventListener('click', (b) => {
            if (recupNom === '') {
                document.querySelector('.entree').insertAdjacentHTML('afterend', `<p>Bonjour, ${recupNom} !</p>`);
            } else {
                document.querySelector('.entree').insertAdjacentHTML('afterend', '<p>Bonjour, toi ! Tu ne veux pas me dire comment tu t\'appelles ?</p>');
            }
        });
    }
};

prenomA.click();
// Autre écriture


// Plus court : écriture ES6 avec expression conditionnelle




