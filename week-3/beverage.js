/*
============================================
; Title: Assignment 3.2 beverage.js
; Author: Janis Gonzalez
; Date: 1/22/2023
; Description: Beverage file for assign 3.2 restaurant app
;===========================================
*/

// imports from product.js file
import { Product } from "./product.js";

// beverage class created
export class Beverage extends Product {
    constructor(name, price) {
        super(name, price);
    }
}