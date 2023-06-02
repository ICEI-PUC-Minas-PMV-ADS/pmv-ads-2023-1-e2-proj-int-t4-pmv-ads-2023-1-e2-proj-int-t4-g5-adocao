function mostrarMenu(){
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('abrir')){
        menuMobile.classList.remove('abrir');
        document.querySelector('.icon').src = "img/iconmenu.svg";
    } else {
        menuMobile.classList.add('abrir');
        document.querySelector('.icon').src = "img/menu-close.svg";
    }
}