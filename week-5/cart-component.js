/*
Title: cart-component.js
Author: Janis Gonzalez
Date: 4/05/2023
Description: cart component for index.html file for WEB 330
*/

class CartComponent extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.innerHTML = `<i id="cartIcon" class="fa fa-shopping-cart"></i> (<span id="cart-count"></span>)`;
    }
}

customElements.define("cart-component", CartComponent);