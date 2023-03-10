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