// ATM KA CODE 
// const balance = 10000;
// let transaction_amount =Number(prompt("Enter The amount of transaction:"));
// let remaining=0;
// if (transaction_amount>balance){
//     alert("Ghareeb admi! Balance kam hai.");
// }
// else{
//     if(transaction_amount<=balance && transaction_amount>0){
// remaining=balance-transaction_amount;
// alert("Transaction Successful! Remaining Balance: " + remaining);
// }
// else{
//     alert("Police ko phone kar raha hoon! 👮‍♂️");
// }
// }
// TABLE LIKHNY WALA CODE 
// let numberOfTable=Number(prompt("number do mn abhi tumhy table likh kr dikhata hu "));
// let length=Number(prompt("kahan tak likhun yeh bhi bta do (10 tak 20 tak yah 100 tak jo tum kaho...)"));
// for(let i =1; i<=length;i++){
//     let result=numberOfTable*i;
//     console.log(`${numberOfTable} * ${i} = ${result}`);
// }

// First ever DOM manipulation
// function changeStatus() {
//     let heading = document.getElementById("status");
//     heading.innerText = "Sharjeel is Coding! 🔥🤖✔";
//     heading.style.color = "blue";
//     heading.style.background="red";
//     heading.style.borderRadius="5px";
//     heading.style.textAlign="center";
//     heading.style.textDecoration="underline";
//     heading.style.padding="10px";
// }

// DOM k Sath pehli larayi 
// abb hum aik result giving page bnany walay hn 
// let card = document.getElementById("result-card");
// function generateResult(){
//     let marks=Number(prompt("Enter the Marks of students"));
//     if(marks >= 33 && marks<=100){
//         card.innerText="You are passed!";
//         card.style.background="green";
//     }
//     else{
//         if (marks >=0 && marks<33){
//             card.innerText="You Failed";
//             card.style.background="Red";
//         }
//         else{
//             card.innerText="Yar Marks toh sahi likh";
//             card.style.color="white";
//             card.style.background="black";
//         }
//     }
// }

// table writer application 
let box = document.getElementById("table-container");
function printTable() {
    let numberOfTable = Number(prompt("number do mn abhi tumhy table likh kr dikhata hu "));
    let length = Number(prompt("kahan tak likhun yeh bhi bta do (10 tak 20 tak yah 100 tak jo tum kaho...)"));
    let temp_table = " "
    for (let i = 1; i <= length; i++) {
        let result = numberOfTable * i;
        if (result % 2 == 0) {
            temp_table += `<div style="color: #4ade80; border-bottom: 1px solid #333; padding: 5px;">${numberOfTable} * ${i} = ${result}</div>`;
        }
        else {
            temp_table += `<div style="color: #f87171; border-bottom: 1px solid #333; padding: 5px;">${numberOfTable} * ${i} = ${result}</div>`;
        }
    }
    box.innerHTML = temp_table;
}
let cursor = document.getElementById("cursor");

// Puri screen par mouse ko track karo
document.addEventListener("mousemove", function(details) {
    
    // Mouse ke coordinates (X aur Y)
    let x = details.clientX;
    let y = details.clientY;

    // Circle ko wahan move karo
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});
// // Table Writer Application 🏗️
// let box2 = document.getElementById("table-container");

// function printTable() {
//     let numberOfTable = Number(prompt("Number do, main table likh kar dikhata hoon:"));
//     let length = Number(prompt("Kahan tak likhna hai?"));

//     // Purana table saaf karo (Optional but good)
//     let temp_table = "";

//     for (let i = 1; i <= length; i++) {
//         let result = numberOfTable * i;

//         // Logic: Even (Green) vs Odd (Red)
//         if (result % 2 == 0) {
//             // Humne seedha 'style' attribute use kiya 👇
//             temp_table += `<div style="color: #00dd51ff; border-bottom: 1px solid #333; padding: 5px;">
//                              ${numberOfTable} * ${i} = ${result}
//                            </div>`;
//         } else {
//             // Odd ke liye Red style 👇
//             temp_table += `<div style="color: #ff3c3cff; border-bottom: 1px solid #333; padding: 5px;">
//                              ${numberOfTable} * ${i} = ${result}
//                            </div>`;
//         }
//     }

//     // Aakhri step: Box ke andar sab kuch daal do
//     box2.innerHTML = temp_table;
// }