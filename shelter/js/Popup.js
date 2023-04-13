const pets = [{
    "name": "Jennifer",
    "img": "assets/images/our%20friends/pets-jennifer.png",
    "type": "Dog",
    "breed": "Labrador",
    "description": "Jennifer is a sweet 2 months old Labrador that is patiently waiting to find a new forever home. This girl really enjoys being able to go outside to run and play, but won't hesitate to play up a storm in the house if she has all of her favorite toys.",
    "age": "2 months",
    "inoculations": ["none"],
    "diseases": ["none"],
    "parasites": ["none"]
},
    {
        "name": "Sophia",
        "img": "assets/images/our%20friends/pets-sophia.png",
        "type": "Dog",
        "breed": "Shih tzu",
        "description": "Sophia here and I'm looking for my forever home to live out the best years of my life. I am full of energy. Everyday I'm learning new things, like how to walk on a leash, go potty outside, bark and play with toys and I still need some practice.",
        "age": "1 month",
        "inoculations": ["parvovirus"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Woody",
        "img": "assets/images/our%20friends/pets-woody.png",
        "type": "Dog",
        "breed": "Golden Retriever",
        "description": "Woody is a handsome 3 1/2 year old boy. Woody does know basic commands and is a smart pup. Since he is on the stronger side, he will learn a lot from your training. Woody will be happier when he finds a new family that can spend a lot of time with him.",
        "age": "3 years 6 months",
        "inoculations": ["adenovirus", "distemper"],
        "diseases": ["right back leg mobility reduced"],
        "parasites": ["none"]
    },
    {
        "name": "Scarlett",
        "img": "assets/images/our%20friends/pets-scarlet.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "Scarlett is a happy, playful girl who will make you laugh and smile. She forms a bond quickly and will make a loyal companion and a wonderful family dog or a good companion for a single individual too since she likes to hang out and be with her human.",
        "age": "3 months",
        "inoculations": ["parainfluenza"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Katrine",
        "img": "assets/images/our%20friends/pets-katrine.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Katrine is a beautiful girl. She is as soft as the finest velvet with a thick lush fur. Will love you until the last breath she takes as long as you are the one. She is picky about her affection. She loves cuddles and to stretch into your hands for a deeper relaxations.",
        "age": "6 months",
        "inoculations": ["panleukopenia"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Timmy",
        "img": "assets/images/our%20friends/pets-timmy.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Timmy is an adorable grey british shorthair male. He loves to play and snuggle. He is neutered and up to date on age appropriate vaccinations. He can be chatty and enjoys being held. Timmy has a lot to say and wants a person to share his thoughts with.",
        "age": "2 years 3 months",
        "inoculations": ["calicivirus", "viral rhinotracheitis"],
        "diseases": ["kidney stones"],
        "parasites": ["none"]
    },
    {
        "name": "Freddie",
        "img": "assets/images/our%20friends/pets-freddie.png",
        "type": "Cat",
        "breed": "British Shorthair",
        "description": "Freddie is a little shy at first, but very sweet when he warms up. He likes playing with shoe strings and bottle caps. He is quick to learn the rhythms of his human’s daily life. Freddie has bounced around a lot in his life, and is looking to find his forever home.",
        "age": "2 months",
        "inoculations": ["rabies"],
        "diseases": ["none"],
        "parasites": ["none"]
    },
    {
        "name": "Charly",
        "img": "assets/images/our%20friends/pets-charly.png",
        "type": "Dog",
        "breed": "Jack Russell Terrier",
        "description": "This cute boy, Charly, is three years old and he likes adults and kids. He isn’t fond of many other dogs, so he might do best in a single dog home. Charly has lots of energy, and loves to run and play. We think a fenced yard would make him very happy.",
        "age": "8 years",
        "inoculations": ["bordetella bronchiseptica", "leptospirosis"],
        "diseases": ["deafness", "blindness"],
        "parasites": ["lice", "fleas"]
    }
];

function getMarkpuPopup(data) {
    return `
     <div class="modal__image">
            <img src="${data.img}" alt="${data.name}">
        </div>
        <div class="modal__content">
            <h3 class="modal__title">${data.name}</h3>
            <h4 class="modal__subtitle">${data.type} - ${data.breed}</h4>
            <p class="modal__text">${data.description}</p>
            <ul class="modal__items">

                <li class="modal__item">
              <span class="dot"></span>
                    <span class="item__title">Age:</span>
                    <span class="item__text"> ${data.age}</span>
                </li>
                <li class="modal__item">
                <span class="dot"></span>
                    <span class="item__title">Inoculations:</span>
                    <span class="item__text"> ${data.inoculations}</span>
                </li>
                <li class="modal__item">
                <span class="dot"></span>
                    <span class="item__title">Diseases:</span>
                    <span class="item__text"> ${data.diseases}</span>
                </li>
                <li class="modal__item">
                <span class="dot"></span>
                    <span class="item__title">Parasites:</span>
                    <span class="item__text"> ${data.parasites}</span>
                </li>
            </ul>
        </div>
        <span class="icon_round btn_close">
            <span> </span>
        </span>
    `
}

function createEl(el, ...classes) {
    console.log(classes);
    const node = document.createElement(el);
    node.classList.add(...classes);
    return node;
}

document.querySelector('.our-friends').addEventListener('click',
    function (e) {
        let overlayModal;
        if (e.target.closest('.card')) {
            console.log('card')
            const name = e.target.closest('.card').querySelector('.card__title').innerHTML;
            const pet = pets.find(pet => pet.name === name);
            overlayModal = createEl('div', 'overlay_modal');
            const modal = createEl('div', 'modal_card', 'modal');
            document.body.append(overlayModal);
            overlayModal.append(modal);
            modal.innerHTML = getMarkpuPopup(pet);
            const arr = ['_lock']
            document.body.classList.add(...arr);
        }
        if (overlayModal && document.querySelector('.btn_close')){

            [overlayModal, document.querySelector('.btn_close')].forEach(el=>el.addEventListener('click',function (e) {
                console.log(e.target);
                if(!e.target.closest('.modal__content')&&!e.target.closest('.modal__image')){
                    overlayModal.remove();
                    document.body.classList.remove('_lock');
                }
            }))
        }
    });





