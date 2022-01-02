let btnNext1 = document.querySelector(".next1")
let elements = document.querySelector('.form1').elements
let checkbox = document.querySelector(".form-check-input")
let city1 = document.querySelector(".city1")
let city2 = document.querySelector(".city2")
let address1 = document.querySelector(".address1")
let address2 = document.querySelector(".address2")
let postal1 = document.querySelector(".postal1")
let postal2 = document.querySelector(".postal2")
let select1 = document.querySelector(".select1")
let select2 = document.querySelector(".select2")
let selects = document.querySelector('#country')
let inputs = document.querySelector('.input1')


btnNext1.onclick = function (e) {
    e.preventDefault()

    for (let i of elements) {
        if (i.value.length < 1 || i.value == 0) {
            i.style.borderColor = 'red';
            btnNext1.style.borderColor = 'grey'

        } else {
            i.style.borderColor = 'grey'
        }
    }

    if (inputs.value !== "" && inputs.value !== 0 && postal2.value !== "" && city2.value !== "" && address2.value !== "" && select2.value !== "0") {
        if (selects.value !== "0") {
            location.replace('package.html')
        } else alert('All fields are required')
    } else alert('All fields are required')
}

function insert() {
    if (checkbox.checked) {
        city2.value = city1.value;
        address2.value = address1.value;
        postal2.value = postal1.value;
        select2.value = select1.value;
        select2.disabled = true;
        city2.readOnly = true;
        address2.readOnly = true;
        postal2.readOnly = true
    } else {
        select2.disabled = false;
        city2.readOnly = false;
        address2.readOnly = false;
        postal2.readOnly = false
    }
}








