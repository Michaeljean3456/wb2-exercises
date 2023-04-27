"use strict"

let payrate = 27.50;
let hourswork = 40;

if (hourswork > 40){
    payrate=payrate * 1.5 
}
let regularpay =  40 * payrate;
let overtimepay = (hourswork - 40) * (payrate * 1.5);
let grosspay = regularpay + overtimepay;
let annualgrosspay = grosspay * 52;
let taxrate;
let jointtaxrate;

console.log(annualgrosspay);

// single tax rate
if (annualgrosspay <= 12000){
    taxrate = "5%"
}
else if(annualgrosspay <= 24999.99){
    taxrate = "10%"
}
else if(annualgrosspay <= 74999.99){
    taxrate = "15%"
}
else if(annualgrosspay >= 75000){
    taxrate = "20%"
}


// joint tax rate
if (annualgrosspay <= 12000){
    jointtaxrate = "0%"
}
else if(annualgrosspay <= 24999.99){
    jointtaxrate = "6%"
}
else if(annualgrosspay <= 74999.99){
    jointtaxrate = "11%"
}
else if(annualgrosspay >= 75000){
    jointtaxrate = "20%"
}

console.log("You worked " + hourswork)
console.log("Because you earn $" + payrate + " per hour, your gross pay is $" + annualgrosspay)
console.log("Your filing status is Single")
console.log("Your tax withholdings this period is $" + taxrate)