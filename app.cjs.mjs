#!/usr/bin/env node
"use strict";

import { prompt } from 'inquirer'; 
// math.js
exports.add = function(a,b){
    return a+b;
};
// app.js
const math = require('./math.js');
console.log(math.add(2.3));
async function calculate() {
    const answer = await prompt([
        { message: "Enter first number", type: "number", name: "firstNumber" },
        { message: "Enter second number", type: "number", name: "secondNumber" },
        {
            message: "Select the operator to perform action",
            type: "list",
            name: "operator",
            choices: ["Addition", "Subtraction", "Multiplication", "Division"],
        },
    ]);

    // Conditional 
    if (answer.operator === "Addition") {
        console.log(answer.firstNumber + answer.secondNumber);
    } else if (answer.operator === "Subtraction") {
        console.log(answer.firstNumber - answer.secondNumber);
    } else if (answer.operator ===    
        "Multiplication") {
            console.log(answer.firstNumber * answer.secondNumber);
        } else if (answer.operator === "Division") {
            console.log(answer.firstNumber / answer.secondNumber);
        } else {
            console.log("Please select a valid operator");
        }
    }
    // Invoke the asynchronous function
calculate();
