
//step 1 
document.getElementById('btn-submit').addEventListener('click',function(){
    //step2

    const emailField = document.getElementById('user-email');

    const email = emailField.value;

    console.log(email)
    //step3 

    const passwordField = document.getElementById('user-password');


    const password = passwordField.value;

    // step 4

    if(email==='shuvroemon.cse@gmail.com' && password === 'secret'){

       window.location.href ='bank.html';
    }
    else{
        alert('invalid user')
    }








   
})

console.log("log in js file")