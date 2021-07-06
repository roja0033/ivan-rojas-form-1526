let form = document.getElementById('form');
let btn = document.getElementById('submit-button');
let fulln = document.getElementById('fullname');
let email = document.getElementById('email');
let msg = document.getElementById('message');

let pattern = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;




function formValidator(event) {
    
    //event.preventDefault();
    event.preventDefault();

    // start with the 2 empty buckets at the beginning
    let data = {};
    let errors = [];
    
   
    if (fulln.value !== '') {
        data.fullName = fulln.value;
       
    } else {
        errors.push('Please enter your full name');
       
    }
    
    if (email.value !== '') {
        data.Email = email.value;

        if (pattern.test(email.value)) {
             
        } else {
            console.log('Email is invalid!')
        }
        
        
    } else {
        errors.push('Please enter Email Address');
        
    }

    
    if (msg.value !== '') {
        data.message = msg.value;
       
    } else {
        errors.push('Please enter a message');
        
    }
    
   

    if (errors == '') {
        console.log('COLLECTED DATA', data);
    } else {
        console.log('ERRORS', errors);
    }
    if (errors == '') {
        form.reset();
    }
}


    form.addEventListener('click', formValidator);

