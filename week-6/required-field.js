/*
Title: required-field.js
Author: Janis Gonzalez
Date: 2/11/2023
Description: required field JS file for WEB 330
*/

// checks for the required field
export class RequiredField {
    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    validate() {
        return Boolean(this.field);
    }

    getMessage() {
        return `${this.name} is a required field.`;
    }
}