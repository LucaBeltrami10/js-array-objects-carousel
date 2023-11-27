
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

/**PIANIFICAZIONE PASSAGGI
 * recupero elementi html nel dom
 * creo per ogni oggetto contenuto nell'array una immagine con classe d-none
 * aggiunto variabile 'index' per stabilire su quale immagine applicare classe speciale per metterla in visione
 * aggiungo listener su bottone UP e DOWN.
 * nel listener di ogni bottone, al click, applico una classe per rendere 1 immagine visibile
 */

const carouselContainer = document.getElementById('carousel-container');
const buttonUp = document.getElementById('button-up');
const buttonDown = document.getElementById('button-down');

let visibleImageIndex = 0;

images.forEach((images, index) => {
    const newContainer = document.createElement('article');

    const newImage = document.createElement('img');
    newImage.setAttribute('src', images.image);
    newImage.setAttribute('alt', `image of ${images.title}`);
    newImage.classList.add('w-100', `img-${index}`);

    if (visibleImageIndex == index){
        newImage.classList.remove('d-none');
    };

    newContainer.appendChild(newImage)
    carouselContainer.appendChild(newContainer);

})

let imgList = document.querySelectorAll('div#carousel-container article img');
console.log(imgList)

buttonUp.addEventListener('click', function(){
    visibleImageIndex += 1

    if (visibleImageIndex > 4){
        visibleImageIndex = 0
    };

    imgList.forEach((img, index) => {
        if(index == visibleImageIndex){
            img.classList.remove('d-none');
        }else(
            img.classList.add('d-none')
        );
    })  
});

buttonDown.addEventListener('click', function(){
    visibleImageIndex -= 1;

    if (visibleImageIndex < 0){
        visibleImageIndex = 4;
    };

    imgList.forEach((img, index) => {
        if(index == visibleImageIndex){
            img.classList.remove('d-none');
        }else(
            img.classList.add('d-none')
        );
    });  
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

/* PROVE */

/* images.forEach((images, index) => {
        if(index == visibleImage){
            newImage.classList.remove('d-none')
        }

    }) */

/* function show(array, interaction){
    visibleImage = visibleImage + interaction

    array.forEach((images, index) => {
        if(index == visibleImage){

        }
    })
} */