//string program
let username1:string = "Alice";
let username2:string = "Alice";
let username3:string = "Alice";

//Number Program
let userage1:number = 25;
let userage2:number = 25;
let userage3:number = 25;

//Boolean Program
let isMember1:boolean = true;
let isMember2:boolean = true;
let isMember3:boolean = true;

console.log("Data type of username is -->"+typeof username1);
console.log("Data type of username is -->"+typeof username2);
console.log("Data type of username is -->"+typeof username3);
console.log("Data type of userAge -->" +typeof userage1);
console.log("Data type of userAge -->" +typeof userage2);
console.log("Data type of userAge -->" +typeof userage3);
console.log("Data type of isMember -->"+typeof isMember1);
console.log("Data type of isMember -->"+typeof isMember2);
console.log("Data type of isMember -->"+typeof isMember3);
function displayUserProfile(name:string,age:number,active:boolean):void{
    console.log(`User:${name}`);
    console.log(`Age:${age}`);
    console.log(`Status:${active ? "Active" : "Inactive"}`);
}
displayUserProfile(username1,userage1,isMember1);
displayUserProfile(username2,userage2,isMember2);
displayUserProfile(username3,userage3,isMember3);