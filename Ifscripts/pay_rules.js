"use strict"
let payrate = 17.50;
let hourswork = 40;

if (hourswork > 40){
    payrate=payrate * 1.5 
}
let regularpay =  40 * payrate;
let overtimepay = (hourswork - 40) * (payrate * 1.5);
let grosspay = regularpay + overtimepay;



console.log("You worked 50 hours this week so your check came out to $" + grosspay)


