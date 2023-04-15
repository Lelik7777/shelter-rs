import DOM from './DOM';
import {BLOCK, NAVIGATION_ITEM, OPEN, OVERLAY_BURGER} from "./config";
import {createNode, getNode} from "./utils";


function toggleBurger() {
    DOM.headerNav.classList.toggle(OPEN);
    DOM.burger.classList.toggle(OPEN);
    DOM.body.classList.toggle(BLOCK);
}
//click on burger icon or overlay-burger
DOM.burger.addEventListener('click', function () {
    toggleBurger();

    if (getNode(`.${OVERLAY_BURGER}`)) {
        getNode(`.${OVERLAY_BURGER}`).remove();
    } else {
        DOM.body.append(createNode('div', OVERLAY_BURGER));

        getNode(`.${OVERLAY_BURGER}`).addEventListener('click', function () {
            toggleBurger();
            getNode(`.${OVERLAY_BURGER}`).remove();
        })
    }
});
//click on
DOM.headerNav.addEventListener('click', function (e) {
    console.log(e.target.closest(`.${NAVIGATION_ITEM}`))
    if (e.target.closest(`.${NAVIGATION_ITEM}`)) {
        toggleBurger();
        if (getNode(`.${OVERLAY_BURGER}`)) {
            getNode(`.${OVERLAY_BURGER}`).remove();
        }
    }
});