
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

const carouselContainer = document.getElementById('carousel-container')
const buttonUp = document.getElementById('carousel-container')
const buttonDown = document.getElementById('carousel-container')

let visibleImage = 0

images.forEach((images) => {
    const newImage = document.createElement('img')
    newImage.setAttribute('src', images.image)
    newImage.setAttribute('alt', `image of ${images.title}`)
    newImage.classList.add('d-none', 'w-100')

    carouselContainer.appendChild(newImage)
})

