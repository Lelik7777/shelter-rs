const $burger = document.querySelector('.header__burger');
const $burgerLine = document.querySelector('.burger__line');
const $headerNav = document.querySelector('.header__navigation');
const $navItems = document.querySelectorAll('.navigation__item');
const active = '_active';
const lock = '_lock';
const cardsLeft = '.card.left';
const cardsCenter = '.card.center';
const cardsRight = '.card.right';
const transitionLeft = 'transition-left';
const transitionRight = 'transition-right';

const $overlay = document.querySelector('.overlay');
const $btnRight = document.querySelector('#btn-right');
const $btnLeft = document.querySelector('#btn-left');
const $slider = document.querySelector('#slider');


function multiplyElements(arr, num) {
    const copy = [...arr];
    copy.forEach(el => {
        for (let i = 0; i < num; i++) {
            copy.push(Object.assign(el));
        }
    })
    return copy;
}

function createCard(data, selector) {
    return `
     <div id="${data.name.toLowerCase()}" class="card ${selector}"  >
                        <img src='${data.img}' alt="${data.name}">
                        <h4 class="card__title">${data.name}</h4>
                        <div class="card__button">
                            <button class="button button_border">Learn more</button>
                        </div>
                    </div>
    `
}

const shuffleArr = function (arr) {
    console.log('shuffle');
    return [...arr].sort(() => Math.random() - 0.5);
}

function getContent(arrEl) {
    const arr = [];
    arrEl.forEach(el => {
        arr.push(el.innerHTML);
    });
    return arr;
}

function createSlider(data, numCards, arrSelector) {
    if ($slider) {
        $slider.innerHTML = '';
        for (let i = 0; i < numCards; i++) {
            if (i < 3) {
                $slider.insertAdjacentHTML('beforeend', createCard(data[i], arrSelector[0]));
            }
            if (i > 2 && i < 6) {
                $slider.insertAdjacentHTML('beforeend', createCard(data[i], arrSelector[1]));
            }
            if (i >= 6)
                $slider.insertAdjacentHTML('beforeend', createCard(data[i], arrSelector[2]));
        }
    }


}

let data;

async function getData() {
    try {
        const res = await fetch('data/pets.json');
        data = await res.json();
    } catch (e) {
        console.log(e)
    }
}

window.onload = async function () {

    // fetch('./data/pets.json').then(res => res.json())
    //     .then(res => data = res);
    // console.log(data);
    await getData();
    // data.forEach(pet=>{
    //     for (let i=0;i<5;i++){
    //         data.push(Object.assign({},pet))
    //     }
    // });
    // console.log(data)
    const arrPets = data;
    arrPets.push(arrPets[0]);
    const desktopPets = arrPets;
    console.log(arrPets)
    createSlider(arrPets, 9, ['left', 'center', 'right']);
    console.log('load');
};


//burger menu mechanism
[$burger, $overlay].forEach(el => {
    el.addEventListener('click', function () {
        $burger.classList.toggle(active);
        $burgerLine.classList.toggle(active);
        $headerNav.classList.toggle(active);
        document.body.classList.toggle(lock);
        $overlay.classList.toggle(active);
    })
});
$navItems.forEach(el => {
    el.addEventListener('click', function () {
        $burger.classList.toggle(active);
        $burgerLine.classList.toggle(active);
        $headerNav.classList.toggle(active);
        document.body.classList.toggle(lock);
        $overlay.classList.toggle(active);
    });
});


//slider
function moveRight() {
    console.log('right')
    $slider.classList.add(transitionRight);
    $btnRight.removeEventListener('click', moveRight);

}

function moveLeft() {
    console.log('left')
    $slider.classList.add(transitionLeft);
    $btnLeft.removeEventListener('click', moveLeft);

}

if ($btnRight) {
    $btnRight.addEventListener('click', moveRight);
}
if ($btnLeft) {
    $btnLeft.addEventListener('click', moveLeft);
}


if ($slider) {
    $slider.addEventListener('animationend', function (e) {
        const leftCards = getContent(document.querySelectorAll(cardsLeft));
        const centerCards = getContent(document.querySelectorAll(cardsCenter));
        const rightCards = getContent(document.querySelectorAll(cardsRight));
        // const copyRight = shuffleArr(rightCards);
        // const copyLeft = shuffleArr(leftCards);
        // const copyCenter = shuffleArr(centerCards);
        if (window.innerWidth > 768) {
            if (e.animationName === 'move-left') {

                this.classList.remove(transitionLeft);
                //снова запускаем обработчик
                $btnLeft.addEventListener('click', moveLeft);
                // const copyRight = shuffleArr(rightCards);
                // const copyLeft = shuffleArr(leftCards);
                document.querySelectorAll(cardsCenter).forEach((card, i) => {
                    //rewrite center cards
                    card.innerHTML = leftCards[i];
                });
                const copyCenter = shuffleArr(centerCards);
                document.querySelectorAll(cardsLeft).forEach((card, i) => {
                    card.innerHTML = copyCenter[i];
                });

            } else {
                // const leftCards = getContent(document.querySelectorAll(cardsLeft));
                // const centerCards = getContent(document.querySelectorAll(cardsCenter));
                // const rightCards = getContent(document.querySelectorAll(cardsRight));
                this.classList.remove(transitionRight);
                $btnRight.addEventListener('click', moveRight);

                document.querySelectorAll(cardsCenter).forEach((card, i) => {
                    //rewrite center cards
                    card.innerHTML = rightCards[i];
                });
                const copyCenter = shuffleArr(centerCards);
                document.querySelectorAll(cardsRight).forEach((card, i) => {
                    card.innerHTML = copyCenter[i];
                });
            }
            console.log(window.innerWidth);
        }

    });
}






