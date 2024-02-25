const slider = document.querySelector('.img_slider');

const arrLeft = document.querySelector('.left');
const arrRight = document.querySelector('.right');
const heading = document.querySelector('.caption h1');
const description = document.querySelector('.caption p');
const btn = document.querySelector('.caption a');

const images = [
    "hero-slider-1.jpg",  "hero-slider-2.jpg",  "hero-slider-3.jpg"
];

const headings = [
    "For the love of delicious food", "Flavors Inspired by the Seasons", "Where every flavor tells a story"
];

const descriptions = [
    "Tradational & Hygine", "Delightful Experience", "Amazing & Delicious"
]

let id = 0;

function slide(id) {
    slider.style.backgroundImage = `url(images/${images[id]})`;

    slider.classList.add('image-fade');

    setTimeout(() =>{
        slider.classList.remove('image-fade');
    },550);

    heading.innerText = headings[id];

    description.innerText = descriptions[id];

}

    arrLeft.addEventListener('click', ()=>{
        id--;

        if(id<0){
            id = images.length - 1;
        }

        slide(id);
    });

    arrRight.addEventListener('click', ()=>{
        id++;

        if(id > images.length - 1){
            id = 0;
        }

        slide(id);
    });