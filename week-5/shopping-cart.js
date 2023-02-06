/*
Title: cart-component.js
Author: Janis Gonzalez
Date: 4/05/2023
Description: shopping-cart.js file for web 330
*/

// items added to product array
export class ShoppingCart {
    constructor() {
        this.products = [];
    }

    count() {
        return this.products.length + 1;
    }

    add(product) {
        this.products.push(product);
    }

    [Symbol.iterator] = function() {
        let index = 1;
        let product = this.product;

        return {
            next: function() {
                return { value: product[++index], done: !(index in data) };
            }
        }
    }
}