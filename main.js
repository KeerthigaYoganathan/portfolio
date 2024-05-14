const mobileNavToggleBtn = document.querySelectorAll(".mobile-nav-toggle-btn")[0];
console.log(mobileNavToggleBtn);
mobileNavToggleBtn.addEventListener("click", function(){
    // console.log(mobileNavToggleBtn);
    document.getElementsByClassName("mobile-nav-bar")[0]?.classList.toggle("mobile-nav-bar-active");
    // <i class="bi bi-x-circle"></i>
    mobileNavToggleBtn.children[0].classList.toggle("bi-x-circle");
    mobileNavToggleBtn.children[0].classList.toggle("bi-list");
})

const navMenuBtn = document.getElementsByClassName("mobile-nav-bar")[0].children;
console.log(navMenuBtn);
// navMenuBtn.forEach(
//     function(a){
//         console.log(a);
//     }
// )
for(let i=0; i<navMenuBtn?.length; i++){
    navMenuBtn[i].addEventListener("click", function(){
        console.log(navMenuBtn[i]);
        document.getElementsByClassName("mobile-nav-bar")[0]?.classList.toggle("mobile-nav-bar-active");
        mobileNavToggleBtn.children[0].classList.toggle("bi-x-circle");
        mobileNavToggleBtn.children[0].classList.toggle("bi-list");
    })
}

