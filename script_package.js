let form2 = document.querySelector('.form2').elements
let BtnNext2 = document.querySelector('.next2')
let BtnPrev1 = document.querySelector('.prev1')
let radio1 = document.querySelector('.radio1')
let radio2 = document.querySelector('.radio2')
let email = document.querySelector('.email')
let pass1 = document.querySelector('.pass1')
let pass2 = document.querySelector('.pass2')

let mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

BtnNext2.onclick = function (e){
    e.preventDefault()
    for (let i of form2) {
        if (i.value.length < 1) {
            i.style.borderColor = 'red';
            BtnNext2.style.borderColor = 'grey';
            BtnPrev1.style.borderColor = 'grey'
        } else {
            i.style.borderColor = 'grey'
        }
    }
    if (email.value !== "" && pass1.value !== "" && pass2.value !== "") {
        if (radio1.checked || radio2.checked) {
            if (pass1.value === pass2.value){
                if (email.value.match(mailformat)) {
                    location.replace('payment.html')
                } else alert('Invalid email address')
            } else alert('Your password and confirmation password do not match.')
        } else alert('All fields are required')
    } else alert('All fields are required')

}
BtnPrev1.onclick = function (e){
    e.preventDefault()
    location.replace('index.html')
}