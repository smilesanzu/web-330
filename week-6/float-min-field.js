/*
Title: float-min-field.js
Author: Janis Gonzalez
Date: 7/03/2022
Description: float-min-field JS file for WEB 330
*/

// checks if field is greater than the minimum
export class FloatMinField {
    constructor(name, field, min) {
        this.name = name;
        this.field = field;
        this.min = min;
    }
    validate() {
        if (parseFloat(this.field) > this.min) {
            return true;
        } else {
            return false;
        }
    }

    // error message
    getMessage() {
        return `${this.name} must be more than min. You entered ${this.field}.`;
    }
}