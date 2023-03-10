
let mn = document.querySelector('.active1')
let nm = document.querySelector('header')

let promo = nm.offsetTop

function scrol1(event){
    event.preventDefault()
    window.scroll({
        top:promo,
        behavior:"smooth",
    })
}

mn.addEventListener('click', scrol1)


let lnk2 = document.querySelector('.active2')
let cont = document.querySelector('main')

let sec2_pos = cont.offsetTop




function scrool_js1(event) {
    event.preventDefault()
    cont.scrollIntoView({       
    behavior:'smooth',
    block:'start',
    inline:'end'
    })
}




lnk2.addEventListener('click', scrool_js1)



let lnk3 = document.querySelector('.active3')
let sec = document.querySelector('footer')

let sec3_pos = sec.offsetTop




function scrool_js3(event) {
    event.preventDefault()
    sec.scrollIntoView({       
    behavior:'smooth',
    block:'start',
    inline:'end'
    })
}




lnk3.addEventListener('click', scrool_js3)