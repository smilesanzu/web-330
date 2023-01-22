/*
============================================
; Title: Assignment 3.2 main-course.js
; Author: Janis Gonzalez
; Date: 1/22/2023
; Description: Main course for assign 3.2 restaurant app
;===========================================
*/

// imports from product.js file
import { Product } from "./product.js";

// creates the main course class
export class MainCourse extends Product {
    constructor(name, price) {
        super(name, price);
    }
}