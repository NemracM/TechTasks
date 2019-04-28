//defining color change conditions 
function ColorChange() {
    if (number < 10) {
        document.querySelector(".result").style.color = "red"; 
    } else if (number >= 10 && number < 20) {
        document.querySelector(".result").style.color = "orange";
    } else document.querySelector(".result").style.color = "green";
}

var number = 0;
//adding eventlistener to the add button
document.querySelector(".button-add").addEventListener("click", function () {
    number++;
    document.querySelector(".result").textContent = number;
    ColorChange()
});

//adding eventlistener to the remove button
document.querySelector(".button-remove").addEventListener("click", function () {
    number--;
    document.querySelector(".result").textContent = number;
    ColorChange()
});


let url = 'https://jsonplaceholder.typicode.com/users';

fetch(url)
    .then(res => res.json())
    .then((out) => {
        for (let i = 1; i <= 6; i++) {

            //creating card divs 
            var employeeCard = document.createElement('div');
            employeeCard.classList.add("card");
            document.querySelector("#cards").appendChild(employeeCard);

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
            var employeeNameData = out[i].name;
            var employeeName = document.createElement('h4');
            document.querySelector("#cards").lastElementChild.appendChild(employeeName);
            employeeName.innerHTML = employeeNameData;

            //creating paragraph for the position
            var employeePositionData = out[i].company.bs;
            var employeePosition = document.createElement('p');
            document.querySelector("#cards").lastElementChild.appendChild(employeePosition);
            employeePosition.innerHTML = employeePositionData.charAt(0).toUpperCase() + employeePositionData.slice(1);

        }
    })