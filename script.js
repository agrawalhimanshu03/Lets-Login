let abc = document.querySelector("h5");
let xyz = document.querySelector("#flw");

let temp = 0;

xyz.addEventListener('click',function(){
    if(temp==0){
    abc.innerHTML = "Following";
    abc.style.fontWeight = 500;
    abc.style.color = "blue";
    xyz.innerHTML = "Unfollow";
    temp = 1;
    } else {
        abc.innerHTML = "Suggested for you";
        abc.style.fontWeight = 300;
        abc.style.color = "grey";
        xyz.innerHTML = "Follow";
        temp = 0;
    }
})