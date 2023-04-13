export class Modal {
    constructor() {
        this.overlay = '';
        this.modal = '';
        this.closeBtn = '';
    }

    build() {
        this.overlay = this.createDomNode(this.overlay,'div','overlay_model');

        this.appendModelElements()
    }

    createDomNode(node, elem, ...classes) {
        document.createElement(elem);
        node.classList.add(classes);
        return node;
    }
    appendModelElements(){
        document.body.append(this.overlay);
    }
}