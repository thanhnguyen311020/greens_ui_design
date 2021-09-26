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


  if (window.scrollY > 60) {
    document.querySelector('#scroll-top').classList.add('active');
  } else {
    document.querySelector('#scroll-top').classList.remove('active');
  }
}

var payment = document.querySelector('.payment');

function paymentBy() {
  //    document.getElementById('notecod').style.display = "block";
  if (document.getElementById('paymentcod').checked == true) {
    document.getElementById('notecod').style.display = "block";
    document.getElementById('paypalbox').style.display = "none";
    document.getElementById('alert-checkout').style.display = "none";
  }
  if (document.getElementById('paymentpaypal').checked == true) {
    document.getElementById('paypalbox').style.display = "block";
    document.getElementById('notecod').style.display = "none";
    document.getElementById('alert-checkout').style.display = "none";
  }
  //    alert("ok")
}

//  Quantity buttom + -
var incrementQty;
var decrementQty;
var plusBtn = $('.cart-qty-plus');
var minusBtn = $('.cart-qty-minus');

var incrementQty = plusBtn.click(function(){
  var $n = $(this)
    .parent(".quantity-container")
    .find(".qty");
    $n.val(Number($n.val()) + 1);

})


var decrementQty = minusBtn.click(function(){
  var $n = $(this)
    .parent(".quantity-container")
    .find(".qty");
    var QtyVal = Number($n.val());
    if(QtyVal > 0){
      $n.val(QtyVal - 1);
    }
})


// Time out deal
let countDate = new Date('2021-10-16 21:58:10').getTime(); // xuất ra dãy số đại diện ngày tháng
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




var swiper = new Swiper(".review-slider", {
  spaceBetween: 20,
  centeredSlides: true,
  autoplay: {
    delay: 200000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    1366: {
      slidesPerView: 3,
    },
  },
});
var swiper = new Swiper(".deal_product", {
  spaceBetween: 30,
  // slidesPerView: 4,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1366: {
      slidesPerView: 4,
    },
  },
});




