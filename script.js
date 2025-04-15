//Side-navbar animation
var sidenav = document.querySelector(".side-navbar")
function clickbar() {
    sidenav.style.left = "0"

}
function closebar() {
    sidenav.style.left = "-70%"
}

// rating function

rate1 = document.querySelector(".star1")
rate2 = document.querySelector(".star2")
rate3 = document.querySelector(".star3")
rate4 = document.querySelector(".star4")
rate5 = document.querySelector(".star5")

// click function
function red(){
    rate1.style.color="red"
}
function orange(){
    rate2.style.color="orange"
}
function gold(){
    rate3.style.color="gold"
}
function gold1(){
    rate4.style.color="gold"
}
function gold2(){
    rate5.style.color="gold"
}
