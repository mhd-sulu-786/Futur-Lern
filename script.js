//styles
const nav_btn = document.getElementById('nav-icon-btn');
const nav_off_btn =document.getElementById('nav-off');

nav_btn.addEventListener("click",()=>{
    document.querySelector("#nav").style.display="block";
    nav_btn.style.display="none";
    nav_off_btn.style.display="block";
})

nav_off_btn.addEventListener("click",()=>{
    document.querySelector("#nav").style.display="none";
    nav_btn.style.display="block";
})