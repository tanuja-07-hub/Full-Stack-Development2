"use strict";
//string program
let username1 = "Alice";
let username2 = "Alice";
let username3 = "Alice";
//Number Program
let userage1 = 25;
let userage2 = 25;
let userage3 = 25;
//Boolean Program
let isMember1 = true;
let isMember2 = true;
let isMember3 = true;
console.log("Data type of username is -->" + typeof username1);
console.log("Data type of username is -->" + typeof username2);
console.log("Data type of username is -->" + typeof username3);
console.log("Data type of userAge -->" + typeof userage1);
console.log("Data type of userAge -->" + typeof userage2);
console.log("Data type of userAge -->" + typeof userage3);
console.log("Data type of isMember -->" + typeof isMember1);
console.log("Data type of isMember -->" + typeof isMember2);
console.log("Data type of isMember -->" + typeof isMember3);
function displayUserProfile(name, age, active) {
    console.log(`User:${name}`);
    console.log(`Age:${age}`);
    console.log(`Status:${active ? "Active" : "Inactive"}`);
}
displayUserProfile(username1, userage1, isMember1);
displayUserProfile(username2, userage2, isMember2);
displayUserProfile(username3, userage3, isMember3);
