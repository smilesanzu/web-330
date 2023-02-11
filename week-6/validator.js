/*
Title: validator.js
Author: Janis Gonzalez
Date: 2/11/2023
Description: validating JS file for WEB 330
*/

// importing of JS files needed
import { RequiredField } from "./required-field.js";
import { FloatField } from "./float-field.js";
import { FloatMinField } from "./float-min-field.js";
import { FloatMaxField } from "./float-max-field.js";

// uses validation class for the validation of fields and name
export class Validator {
    validator = [];
    messages = [];

    constructor(name, field) {
        this.name = name;
        this.field = field;
    }

    addRequiredField() {
        this.validator.push(new RequiredField(this.name, this.field));
    }

    addRequiredFloatField() {
        this.validator.push(new FloatField(this.name, this.field));
    }

    addFloatMinField(min) {
        this.validator.push(new FloatMinField(this.name, this.field, min));
    }

    addFloatMaxField(max) {
        this.validator.push(new FloatMaxField(this.name, this.field, max));
    }

    validate() {
        for (const field of this.validator) {
            if (!field.validate()) {
                this.messages.push(field.getMessage());
                return false;
            }
        }
        return true;
    }
}