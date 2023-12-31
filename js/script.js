/* oggetto inserito in consegna: */
const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

const carouselContainer = document.getElementById('carousel-container');
const buttonUp = document.getElementById('button-up');
const buttonDown = document.getElementById('button-down');

let visibleImageIndex = 0;

images.forEach((images, index) => {
    /* PARENT */
    const newContainer = document.createElement('article');
    newContainer.classList.add('position-relative', 'd-none');

    /* FIGLI PARENT */
    const newInfoContainer = document.createElement('div');
    newInfoContainer.classList.add('position-absolute', 'top-100');

    const newImage = document.createElement('img');
    newImage.setAttribute('src', images.image);
    newImage.setAttribute('alt', `image of ${images.title}`);
    newImage.classList.add(`img-${index}`);

    /* TITOLO E PARAGRAFO */
    const newTitle = document.createElement('h1');
    newTitle.classList.add('text-end')
    newTitle.innerHTML = images.title;

    const newParagraph = document.createElement('p')
    newParagraph.classList.add('text-end')
    newParagraph.innerHTML = images.text;

    /* CONDIZIONE PER PRIMA IMMAGINE E TESTO MOSTRATI IN PAGINA */
    if (index == 0){
        newContainer.classList.remove('d-none');
    };

    newInfoContainer.appendChild(newTitle);
    newInfoContainer.appendChild(newParagraph);
    newContainer.appendChild(newInfoContainer);
    newContainer.appendChild(newImage);
    carouselContainer.appendChild(newContainer);

})

let infoContainerList = document.querySelectorAll('div#carousel-container article')


buttonUp.addEventListener('click', function(){
    visibleImageIndex += 1

    if (visibleImageIndex > 4){
        visibleImageIndex = 0
    };

    infoContainerList.forEach((container, index) => {
        if(index == visibleImageIndex){
            container.classList.remove('d-none');
        }else(
            container.classList.add('d-none')
        );
    })
});

buttonDown.addEventListener('click', function(){
    visibleImageIndex -= 1;

    if (visibleImageIndex < 0){
        visibleImageIndex = 4;
    };

    infoContainerList.forEach((container, index) => {
        if(index == visibleImageIndex){
            container.classList.remove('d-none');
        }else(
            container.classList.add('d-none')
        );
    })
});





/** RICAPITOLANDO
 *  recupero elementi doom
 * ciclo forEach per creare tante immagini quanti gli oggetti in array, con classi specifiche, e inserirle nel parent
 * recupero dal dom tutte le eimmagini create in un nuovo array con quarySelectorAll (IMMAGINI)
 * creo una variabile per immagine da mostrare (INDEX)
 * listener su bottone UP
 *      -aumento di 1 INDEX
 *      -controllo che INDEX non sia sopra a 5 e in caso lo correggo
 *      -modifico l'oggetto nell'array IMMAGINI corrispindente a INDEX aggiungendo classe X
 *      -rimuovo classe X a tutti gli oggetti non coincidenti alla posizione INDEX
 * 
 * listener su posizione DOWN
 *      -diminuisco di 1 INDEX
 *      -controllo che INDEX non sia inferiore a 0 e in caso lo correggo
 *      -modifico l'oggetto nell'array IMMAGINI corrispindente a INDEX aggiungendo classe X
 *      -rimuovo classe X a tutti gli oggetti non coincidenti alla posizione INDEX
 */