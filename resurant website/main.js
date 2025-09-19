// ===========navbar scrooll=============

window.addEventListener('scroll' ,function(){
    let navbar = this.document.querySelector('.navbar');
    if(this.window.scrollY > 20){
        navbar.classList.add('scrolled');
    }else{
        navbar.classList.remove('scrolled')
    }
})

// Toggle mobile menu
const menuBtn = document.getElementById('menu-btn');
const navItems = document.querySelector('.nav-items');

menuBtn.addEventListener('click', () => {
  navItems.classList.toggle('active');
});