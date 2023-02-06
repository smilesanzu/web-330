/* 
Title: product.js
Author: Janis Gonzalez
Date: 4/05/2023
Description: product.js file for web 330
*/

//random id generated 
export class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
        this.id = Math.random().toString(16).slice(2);
    }


};