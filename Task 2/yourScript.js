var number = 0;
document.querySelector(".button-add").addEventListener("click", function () {
    number++;
    document.querySelector(".result").textContent = number;
    ColorChange()
});

document.querySelector(".button-remove").addEventListener("click", function () {
    number--;
    document.querySelector(".result").textContent = number;
    ColorChange()
});

function ColorChange() {
    if (number < 10) {
        document.querySelector(".result").style.color = "red";
    } else if (number >= 10 && number < 20) {
        document.querySelector(".result").style.color = "orange";
    } else document.querySelector(".result").style.color = "green";
}

for (let i = 1; i <= 5; i++) {
    //creating card divs 
    var employeeCard = document.createElement('div');
    employeeCard.classList.add("card");
    document.getElementById("cards").appendChild(employeeCard);

    //creating image elements 
    var employeeImage = document.createElement("IMG");
    document.querySelector("#cards").lastElementChild.appendChild(employeeImage);
    employeeImage.setAttribute("src", "avatar" + i + ".png");
    employeeImage.setAttribute("alt", "Avatar");
    employeeImage.setAttribute("width", "100%");

    //creating the container
    var employeePosition = document.createElement('div');
    employeePosition.classList.add("container");
    document.querySelector("#cards").lastElementChild.appendChild(employeePosition);
    //creating heading tag for the name 
    var employeeName = document.createElement('h4');
    document.querySelector("#cards").lastElementChild.appendChild(employeeName);
    employeeName.innerHTML = "<b> Employee's name </b>";
    //creating paragraph for the position
    var employeePosition = document.createElement('p');
    document.querySelector("#cards").lastElementChild.appendChild(employeePosition);
    employeePosition.innerHTML = "Employee's position";
}