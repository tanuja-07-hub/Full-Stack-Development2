"use strict";
let flexiblevalue = 10;
flexiblevalue = "Now i am a string";
flexiblevalue = true;
let mysteryvalue = "Hello vishnu";
if (typeof mysteryvalue === "string") {
    console.log("Length of unknown string:" + mysteryvalue.length);
}
function logNotification(message) {
    console.log("Alert:" + message);
}
logNotification("Environment Setup Complete!");
