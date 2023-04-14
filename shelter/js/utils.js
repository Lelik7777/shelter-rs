export const getNode = selector => document.querySelector(selector);
export const createNode = (tagName, ...classes) => {
    const node = document.createElement(tagName);
    node.classList.add(...classes);
    return node;
}