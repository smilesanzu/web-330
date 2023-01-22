/*
============================================
; Title: Assignment 3.2 appetizer.js
; Author: Janis Gonzalez
; Date: 1/22/2023
; Description: Appetizer file for assign 3.2 restaurant app
;===========================================
*/

// imports from product.js file
import { Product } from "./product.js";

// appetizer class created
export class Appetizer extends Product {
    constructor(name, price) {
        super(name, price);
    }
}