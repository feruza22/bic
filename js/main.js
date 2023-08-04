var elInp = document.querySelector('.inp')
var elWalk = document.querySelector('.walk')
var elBicycle = document.querySelector('.bicycle')
var elCar = document.querySelector('.car')
var elAirplan = document.querySelector('.airplan')
function fn(){
    elWalk.textContent = elInp.value/4
    elBicycle.textContent = elInp.value/20
    elCar.textContent = elInp.value/100
    elAirplan.textContent = elInp.value/800
    
    console.log(elInp.value /5);
}