/*
============================================
; Title: Assignment 3.2 dessert.js
; Author: Janis Gonzalez
; Date: 1/22/2023
; Description: Dessert file for assign 3.2 restaurant app
;===========================================
*/

// imports from product.js file
import { Product } from "./product.js";

// dessert class created
export class Dessert extends Product {
    constructor(name, price) {
        super(name, price);
    }
}