let emailRegex = RegExp("^abc$");

function validateEmail(email){
    if(emailRegex.test(email))
        console.log("Valid Email");
    else
        throw 'Invalid email';
}

try{
    validateEmail("abc");
    validateEmail("thanks");
}catch(e){
    console.error(e);
}