// // script.js
// let btn = document.getElementById("myBtn");

// // Proper Listener Setup
// btn.addEventListener("click", function() {
//     console.log("Button clicked!");
//     alert("System Hacked! 😎");
// });
let circle = document.getElementById("magic-circle");

// Hum puri window par listener laga rahe hain
window.addEventListener("mousemove", function(e) {
    
    // Step 1: Secret Packet 'e' se poocho coordinates kya hain
    let x = e.clientX; // Left se kitna door
    let y = e.clientY; // Top se kitna door

    // Step 2: Circle ko wahan update karo
    // Hum CSS ki 'left' aur 'top' property change kar rahe hain
    circle.style.left = x + "px";
    circle.style.top = y + "px";

});

document.addEventListener("keydown", function(e) {
    if(e.key=="r"){
document.body.style.backgroundColor = "red";
    }
    else if (e.key=="w"){
     document.body.style.backgroundColor= "white";
     document.body.style.textShadow = "0px 0px 20px black";
    }
    else if (e.key=="b"){
        document.body.style.backgroundColor="blue";
    }
});