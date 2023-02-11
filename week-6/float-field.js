/*
Title: float-field.js
Author: Janis Gonzalez
Date: 2/11/2023
Description: float-field JS file for WEB 330
*/

// for field floating
export class FloatField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }
    validate() {
        if (!isNaN(this.field)) {
            return true;
        } else {
            return false;
        }
    }

    getMessage() {
        return `${this.name} must be a float value. You entered ${this.field}.`;
    }
}