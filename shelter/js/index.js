const $burger = document.querySelector('.header__burger');
const $burgerLine = document.querySelector('.burger__line');
const $headerNav = document.querySelector('.header__navigation');
const $navItems = document.querySelectorAll('.navigation__item');
const $overlay = document.querySelector('.overlay');
const active = '_active';
const lock = '_lock';

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
    console.log(data);

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


