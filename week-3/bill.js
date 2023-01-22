/*
============================================
; Title: Assignment 3.2 bill.js
; Author: Janis Gonzalez
; Date: 1/22/2023
; Description: Bill file for assign 3.2 restaurant app
;===========================================
*/

// creates bill class with menu items
export class Bill {
    // each parameter is set to an array that is empty
    constructor(_beverages, _appetizers, _mainCourses, _desserts) {
        // arrays filled with menu items value
        this._beverages = [];
        this._appetizers = [];
        this._mainCourses = [];
        this._desserts = [];
    }

    // adds value to beverage
    addBeverage(beverage) {
        this._beverages.push(beverage);
    }

    // adds value to appetizer
    addAppetizer(appetizer) {
        this._appetizers.push(appetizer);
    }

    // adds value to main course
    addMainCourse(mainCourse) {
        this._mainCourses.push(mainCourse);
    }

    // adds value to dessert
    addDessert(dessert) {
        this._desserts.push(dessert);
    }

    // getTotal function adds the arrays for total value
    getTotal() {
        // set total equal to zero
        let total = 0;

        // checked beverage value added to total
        let beverageTotal = this._beverages.forEach(function(beverage) {
            total += parseFloat(beverage.price);
        });

        // checked appetizer value added to total
        let appetizerTotal = this._appetizers.forEach(function(appetizer) {
            total += parseFloat(appetizer.price);
        });

        // checked main course value added to total
        let mainCourseTotal = this._mainCourses.forEach(function(mainCourse) {
            total += parseFloat(mainCourse.price);
        });

        // checked dessert value added to total
        let dessertTotal = this._desserts.forEach(function(dessert) {
            total += parseFloat(dessert.price);
        });


        // second decimal place for total
        return total.toFixed(2);
    }

}