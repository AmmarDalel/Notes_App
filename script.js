

//login 
let loginbtn=document.getElementById('login') ;

let wrapper=document.querySelector('.wrapper') ;
let register=document.querySelector('.register');
let logincontainer=document.querySelector('.login') ;

function login(){
 
    wrapper.style.display='flex';
    logincontainer.style.display='flex';
    logincontainer.style.flexDirection = 'column';
    register.style.display='none';
}

function registerf(){
  
    wrapper.style.display='flex';
    logincontainer.style.display='none';
    register.style.display='flex';
    register.style.flexDirection = 'column';

}

function close_wrapper(){
    wrapper.style.display='none';

}







    