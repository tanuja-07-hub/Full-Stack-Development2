let flexiblevalue:any = 10;
flexiblevalue = "Now i am a string";
flexiblevalue = true;
let mysteryvalue:unknown = "Hello vishnu";
if(typeof mysteryvalue === "string"){
    console.log("Length of unknown string:"+mysteryvalue.length);
}
function logNotification(message:string) : void{
    console.log("Alert:"+message);
}
logNotification("Environment Setup Complete!");