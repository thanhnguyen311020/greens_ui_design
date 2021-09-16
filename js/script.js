let menu = document.querySelector('#menu-bars');
let navbar = document.querySelector('.navbar');
var nav = document.querySelector('#navx');
menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
// nav.addEventListener("scroll" , event =>{
//     var x = nav.scrollTop();
//      console.log(x);
//     // if(nav.scrollTop > 100){
//     //     alert("x");
//     // }
// })

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');

    if (window.scrollY > 400) {
        nav.classList.add('fix-nav');
        console.log("ok");
    } else if (window.screenY == 0) {

        nav.classList.remove('fix-nav');

    }
}



// nav.onscroll = () =>{

//     // if(nav.scrollTop >= 100){
//     //     nav.classList.add('fix-nav');
//     //     console.log("ok");
//     // }else{
//     //     nav.classList.remove('fix-nav');
//     // }
//     console.log("alo");
// }

//  time deal

let countDate = new Date('2021-09-16 21:58:10').getTime(); // xuất ra dãy số đại diện ngày tháng
console.log(countDate);
function CountDown() {

    let now = new Date().getTime();
    gap = countDate - now;

    let second = 1000;
    let minute = second * 60;
    let hour = minute * 60;
    let day = hour * 24;

    if (gap > 0) {
        var d = Math.floor(gap / (day));
        var h = Math.floor((gap % (day)) / (hour));
        var m = Math.floor((gap % (hour)) / (minute));
        var s = Math.floor((gap % (minute)) / (second));
    } else {
        var d = '00';
        var h = '00';
        var m = '00';
        var s = '00';
    }
    document.getElementById('day').innerText = d;
    document.getElementById('hour').innerText = h;
    document.getElementById('minute').innerText = m;
    document.getElementById('second').innerText = s;
}

setInterval(function () {
    CountDown();
}, 1000)

