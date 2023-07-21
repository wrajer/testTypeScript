"use strict";
const sum1 = (num1, num2) => //to ponoć arrow function
 {
    return num1 + num2;
};
console.log(sum1(1, 4));
const sum2 = (num1, num2) => {
    typeof num1 == 'string' ? num1 = parseInt(num1) : null; //sprawdzamy typ num i jeśli string to przerzucamy an inta
    typeof num2 == 'string' ? num2 = parseInt(num2) : null;
    return num1 + num2;
};
console.log(sum2(1, "88"));
const sum3 = (num1, num2) => //void to ponoć opposite do any
 {
    //typeof num1 == 'string' ? num1 = parseInt(num1): null; //sprawdzamy typ num i jeśli string to przerzucamy an inta
    //typeof num2 == 'string' ? num2 = parseInt(num2): null;
    console.log('error in the system2');
    //return num1+ num2; jako że to void to bez returna
};
const n = null;
const u = undefined;
sum3(1, 1);
