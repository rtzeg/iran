
let mn = document.querySelector('.active1')
let nm = document.querySelector('header')

let promo = nm.offsetTop

function scrol1(event) {
  event.preventDefault()
  window.scroll({
    top: promo,
    behavior: "smooth",
  })
}

mn.addEventListener('click', scrol1)


let lnk2 = document.querySelector('.active2')
let cont = document.querySelector('main')

let sec2_pos = cont.offsetTop




function scrool_js1(event) {
  event.preventDefault()
  cont.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'end'
  })
}




lnk2.addEventListener('click', scrool_js1)



let lnk3 = document.querySelector('.active3')
let sec = document.querySelector('.sec3')

let sec3_pos = sec.offsetTop




function scrool_js3(event) {
  event.preventDefault()
  sec.scrollIntoView({
    behavior: 'smooth',
    block: 'start',
    inline: 'end'
  })
}




lnk3.addEventListener('click', scrool_js3)

// * * * * * * * * * *

const swiper = new Swiper('.swiper', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});



// Скрипт для футера 
let open_btn = document.querySelector('.contact_modal')
let close_btn = document.querySelector('.close_modal')
let foot_modal = document.querySelector('.modal')

let open_modal = () => {
  foot_modal.classList.add('open')
}

let close_modal = () => {
  foot_modal.classList.remove('open')
}

open_btn.addEventListener('click', open_modal)
close_btn.addEventListener('click', close_modal)
// конец скрипта для футера 


// провека размера для изменения картин
function zero_time() {
  let wind = window.screen.width
  let slid_box_img_1 = document.querySelector('.slid_box .img_1 img')
  let slid_box_img_2 = document.querySelector('.slid_box .img_2 img')
  if (wind <= 768) {
    slid_box_img_1.src = './img/z1_1.png'
    slid_box_img_2.src = './img/z2_1.png'
  }else if (wind > 768) {
    slid_box_img_1.src = './img/z1.png'
    slid_box_img_2.src = './img/z2.png'
  }
}

setInterval(zero_time, 500);

// бургер 
let burger = document.querySelector('.burger')
let hed_nav = document.querySelector('.hed nav')
burger.addEventListener('click',()=>{
  // burger.classList.add('avt_block')
  console.log('ss');
  hed_nav.classList.toggle('nav_right')

})
