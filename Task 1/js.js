function buildDate() {
    var dateContainer = document.getElementById('date');
    var date = document.createElement('p');
    var today = new Date();
    var day = ("0" + today.getDate()).slice(-2);
    var month = ("0" + (today.getMonth() + 1)).slice(-2);
    var year = today.getFullYear();
    //date.innerText = `${day} ${month}${year}`; 
    date.innerText = day + '.' + month + '.' + year;
    dateContainer.appendChild(date);
    
 
}

buildDate();

function buildSum() {
    var numberA = parseInt(document.getElementById('numbera').value);
    var numberB = parseInt(document.getElementById('numberb').value);
    var sumAB = document.getElementById('sumab');

    if (isNaN(numberA) || isNaN(numberB)) {
        sumAB.placeholder= 'Please insert numbers';
    } else {
        sumAB.value = numberA + numberB;
    }
}

buildSum();



