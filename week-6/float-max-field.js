/*
Title: float-max-field.js
Author: Janis Gonzalez
Date: 02/11/2023
Description: flat-max-field file for WEB 330
*/

// checks if field is less than the maximum
export class FloatMaxField {
    constructor(name, field, max) {
        this.name = name;
        this.field = field;
        this.max = max;
    }

    validate() {
        if (parseFloat(this.field) < this.max) {
            return true;
        } else {
            return false;
        }
    }

    // error message
    getMessage() {
        return `${this.name} must be less than ${this.max}. You entered ${this.field}.`;
    }
}