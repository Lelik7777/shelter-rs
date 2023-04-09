const $burger = document.querySelector('.header__burger');
const $burgerLine = document.querySelector('.burger__line');
const $headerNav = document.querySelector('.header__navigation');
const $navItems = document.querySelectorAll('.navigation__item');
const $overlay = document.querySelector('.overlay');
const active = '_active';
const lock = '_lock';

window.onload = function () {
    const data = fetch('./data/pets.json').then(res => res.json())
        .then(data => console.log(data));
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


