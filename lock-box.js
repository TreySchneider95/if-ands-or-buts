const prompt = require('prompt-sync')({sigint: true});

let pinCode = '1234'

let userInput = prompt("Enter code: ")

if(userInput === pinCode){
    console.log("Success")
}else{
    console.log("Failure")
}