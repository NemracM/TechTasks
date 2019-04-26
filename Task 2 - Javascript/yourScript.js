var number = 0; 
document.querySelector(".button-add").addEventListener("click", function() {
    number ++;
    document.querySelector(".result").textContent = number;
ColorChange()
}); 

document.querySelector(".button-remove").addEventListener("click", function() {
    number --;
    document.querySelector(".result").textContent = number;
ColorChange()
}); 

function ColorChange(){
    if (number < 10) {
        document.querySelector(".result").style.color = "red";
    } else if (number >= 10 && number <20 ) {
        document.querySelector(".result").style.color = "orange";
    } else document.querySelector(".result").style.color = "green";
}
