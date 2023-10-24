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
 function work(){
    document.querySelector("#nav").style.display="none";
    nav_btn.style.display="block";

 }
 //validetion
 const name_err=document.getElementById('name-err');
 const err_email=document.getElementById('name-email');
 const err_phone=document.getElementById('name-phone');
 const err_messege=document.getElementById('name-messege');
 const err_submit=document.getElementById('name-submit');
 function validition_name(){
    const name =document.getElementById('name').value;
    if(name.length == 0){
        name_err.style.color="red";
        name_err.innerHTML= "Name is required";
       return false;
    }
    else if(!name.match(/^[A-Za-z]*\s[A-Za-z]*&/)){
        name_err.style.color="red";
       name_err.innerHTML= "Name is required";
       return false;
    } 
     name_err.style.color="green";
    name_err.innerHTML= "Name is Valid";
        
    return true
    

 }
 function validition_phone(){
    const phone =document.getElementById('phone').value;
    if(phone.length == 0){
        err_phone.style.color="red";
        err_phone.innerHTML= "Phone number is required";
       return false;
    }
    else if(!phone.match(/^[0-9]$(10)&/)){
        err_phone.style.color="red";
       err_phone.innerHTML= "Phone number is required";
       return false;
    }
    else if(phone.length !==10){
         err_phone.style.color="red";
        err_phone.innerHTML= "Phone number is required";
        
        return false;
    }
    


 }

