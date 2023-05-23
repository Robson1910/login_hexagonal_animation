function menuMobile(){
    let menuMobile = document.querySelector('.mobile-menu')
    if(menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open')
        document.querySelector('.icon').setAttribute('name','menu-sharp')
    } else {
        menuMobile.classList.add('open')
        document.querySelector('.icon').setAttribute('name','close-sharp')
    }
}