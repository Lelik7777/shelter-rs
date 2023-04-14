import DOM from './DOM';
import {BLOCK, OPEN} from "./config";
import {createNode, getNode} from "./utils";

const OVERLAY_BURGER = 'overlay_burger';
DOM.burger.addEventListener('click', function () {

    DOM.headerNav.classList.toggle(OPEN);
    DOM.burger.classList.toggle(OPEN);
    DOM.body.classList.toggle(BLOCK);

});