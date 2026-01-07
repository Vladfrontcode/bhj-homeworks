const counter = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
let clickSize = 0;
cookie.onclick = function() {   
    counter.textContent = ++counter.textContent;
    clickSize = clickSize+1;   
    if (clickSize%2) {
        cookie.width="220";
    }else{
        cookie.width="180";
    }
};