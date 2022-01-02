let BtnPrev2 = document.querySelector('.prev2')
let BtnNext3 = document.querySelector('.next3')
let form3 = document.querySelector('.form3').elements
let card = document.querySelector('.card')
let cvc = document.querySelector('.cvc')
let full_name = document.querySelector('.full_name')
let date = document.querySelector('#date_field')
let today = new Date();
let dd = today.getDate();
let mm = today.getMonth()+1;
let yyyy = today.getFullYear();

if(dd<10){
    dd='0'+dd
}
if(mm<10){
    mm='0'+mm
}

today = yyyy+'-'+mm+'-'+dd;
document.getElementById("date_field").setAttribute("min", today);

card.addEventListener('input', function (e) {
    e.target.value = e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
});



BtnNext3.onclick = function (e) {
    e.preventDefault()
    for (let i of form3) {
        if (i.value.length < 1) {
            i.style.borderColor = 'red';
            BtnNext3.style.borderColor = 'grey';
            BtnPrev2.style.borderColor = 'grey'
        } else {
            i.style.borderColor = 'grey'
        }
    }

    if (card.value !== "" && cvc.value !== "" && full_name.value !== "" && date !== "") {
        if (card.value.length == 19){
            if (cvc.value > 100 && cvc.value < 9999){
                if (date.value > today){
                    alert('You have successfully registered')
                } else alert('Invalid card')
            } else alert('Wrong cvc')
        } else alert('Wrong card number')

    } else alert('All fields are required')

}

BtnPrev2.onclick = function (e) {
    e.preventDefault()
    location.replace('package.html')
}

function card_input(){
    let output = document.getElementById("output");
    if (card.value[0] == 4) {
        output.innerText = "Visa";
    } else if (card.value[0] == 5){
        output.innerText = "MasterCard";
    } else if (card.value[0] == 3){
        output.innerText = "AmericanExpress";
    }
}
