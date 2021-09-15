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
    }else if(window.screenY == 0 ){
       
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



