

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


for(let i=1 ; i<100 ; i++){

    v=false ;

    if(i%3 ==0 ){
        console.log('Fizz ' ,i) ;
        v=true ;
     }
    if(i%5 ==0 ){
        console.log('Buzz ' ,i) ; 
        v=true ;
    }
    if(i%15 ==0 ) { 
        console.log('FizzBuzz ' , i)  ;
        v=true ;
    } 
    if(!v)console.log(i) ;


}




    