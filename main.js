const navItems=document.querySelector('#nav__items')
const openNavBtn=document.querySelector('#open__nav-btn')
const closeNavBtn=document.querySelector('#close__nav-btn')


openNavBtn.addEventListener('click',()=>{
    navItems.style.display='flex';
    openNavBtn.style.display='none';
    closeNavBtn.style.display='inline-block';
})




/* other typr of above function 
closeNavBtn.addEventListener('click',()=>{
    navItems.style.display='none';
    openNavBtn.style.display='inline-block';
    closeNavBtn.style.display='none';
})*/

    
    const closeNav=()=>{
    navItems.style.display='none';
    openNavBtn.style.display='inline-block';
    closeNavBtn.style.display='none'; 
    }

    closeNavBtn.addEventListener('click',closeNav) 


/* ====close nav when menu items is clicked */
if(window.innerWidth < 1024) {
    document.querySelectorAll('#nav__items li a').forEach(navItem => {
        navItem.addEventListener('click', () => {
            closeNav();
        })
    })
}

/* ======change navbar style ======= */
window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 0)
})

/*  ===testimonials section swiper js  */
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },

    /* responsive breakpoints */
    breakpoints:{
         /* when windows width is >=768px */
         768:{
            slidesPerView: 2
         },
         /* when windows width is >=1024 */
         1024:{
            slidesPerView: 3
         }
    }
  });