/*
Title: finance-calculator.js
Author: Janis Gonzalez
Date: 2/11/2023
Description: finance calculator for week 6 WEB 330
*/

// finance calculator using months and USD currency values
export class FinanceCalculator {
    static MONTHS_IN_YEAR = 12;
    static calculateFutureValue(monthlyPayment, rate, years) {
        let months = years * this.MONTHS_IN_YEAR;
        let interestRate = 1 + rate / 100;
        let presentValue = monthlyPayment * months;

        let futureValue = presentValue * (Math.pow(interestRate, months));

        return futureValue.toFixed(2);
    }

    static convertToCurrency(field) {
        let currencyFormatter = new Intl.NumberFormat('en-Us', {
            style: "currency",
            currency: "USD",
        });

        return currencyFormatter.format(field);
    }


}