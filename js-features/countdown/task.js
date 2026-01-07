
const timeRemain = function(){
    const currentTime = document.getElementById("timer");
    currentTime.textContent = currentTime.textContent-1;
    if (currentTime.textContent === "0"){
        alert("Вы победили в конкурсе!");
        }
    }
setInterval(timeRemain, 1000)