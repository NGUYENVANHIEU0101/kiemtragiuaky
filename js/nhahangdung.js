const Nav_tongger = document.querySelector(".nav-toggler");
Nav_tongger.addEventListener("click", toggleNav);
function toggleNav(){
    document.querySelector(".nav-toggler").classList.toggle("active");
    document.querySelector(".nav").classList.toggle("open");
}
document.addEventListener("click",function(a){
    if(a.target.closest(".nav-item")){
        toggleNav();
    }
})
window.addEventListener("scroll",function(){
    // console.log(this.pageYOffset)
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");
    }
    else {
        document.querySelector(".header").classList.remove("sticky")
    }
})
const menuTabs = document.querySelector(".menu-taps") ;
menuTabs.addEventListener("click",function(e){
    if(e.target.classList.contains("menu-tap-item")&& !e.target.classList.contains("active"))
    {
        const target = e.target.getAttribute("data-target");
        // console.log(target);
        menuTabs.querySelector(".active").classList.remove("active");
        e.target.classList.add("active");
        const menuSection = document.querySelector(".menu-section");
        menuSection.querySelector(".menu-tap-content.active").classList.remove("active");
        menuSection.querySelector(target).classList.add("active");

     }
})
//-----------------Animation-----------
AOS.init();
// document.write('');
//alert('')popup
//console.log('hello wword');
//var c = x ==y;
//var d = x===y;

// function add(n){
//     const columns = 2*n -1;
//     for(let i = 0; i < n; i++) {
//        let step= '';
//        for(let j = 0; j < columns; j++) {
//         let middle = Math.floor(columns/2);
//         if(middle - i <= j && middle + i >= j) {
//           step += '*'
//         } else {
//           step += ' '
//         }
//       }
//       document.write(step);
//     }
//    }


