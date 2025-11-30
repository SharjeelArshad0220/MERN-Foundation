// // task 1
// let friends = ["Sharjeel", "Hamza", "ayan"];
// console.log(friends[1]);
// console.log("total friends are " + friends.length);
// // -------
// // task 2
// friends.push("zain");
// console.log("Friend Added :",friends);
// friends.splice(0,1);
// console.log("one deleted :",friends);
// // -------
// task 3
let friends=[];
let list=document.getElementById("friend-list");
let box=document.getElementById("friend-input");
function showFriends(){
    let data="";
    list.innerHTML ="";
    if(friends.length==0){
        list.innerHTML = `<div style="margin:10px; font-size:20px; font-family: sans-serif; text-align: center; color:salmon;">Koi dost nahi bacha... 😢</div>`;
        return;
    }
    friends.forEach(function(item,index){
        data += `<li style="margin:10px; font-size:20px; font-wieght:bold; font-family: sans-serif; text-align: center; padding:10px;color:salmon;text-decoration:underline">${item}<button onclick="deleteFriend(${index})" style="background-color:#1d1d1dff;margin:15px;border-radius:5px;border:none;box-shadow:0 0 10px red;">❌</button></li>`;
    });
    list.innerHTML=data;
}
function addFriend(){
let newValue=box.value;
if(newValue==""){
    alert("Empty Entry cant be added.");
    return;
}
    friends.push(newValue);
    showFriends();
    box.value="";
}
function deleteFriend(index){
friends.splice(index,1);
showFriends();
}
showFriends();
