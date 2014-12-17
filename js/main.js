function validate(){

    var name=document.forms["form"]["name"].value;
    var email=document.forms["form"]["email"].value;
    var password=document.forms["form"]["password"].value;

    if (name.length==0){
        document.querySelector('#name-error').innerHTML="*field can not be blank";
        return false;
    }else if (name.length>200){
        document.querySelector('#name-error').innerHTML="*the field can not be longer than 100 characters";
    }

    if (email.length==0){
        document.querySelector('#email-error').innerHTML="*field can not be blank";
        return false;
    }

    if (!(/^\w+[-_\.]*\w+@\w+-?\w+\.[a-z]{2,4}$/.test(email)) )
    {
        document.querySelector('#email-error').innerHTML="*please enter a valid email";
        return false;
    }

    if (password.length==0){
        document.querySelector('#password-error').innerHTML="*field can not be blank";
        return false;
    }else if (password.length<6){
        document.querySelector('#password-error').innerHTML="*the password must be a minimum of 6 characters";
        return false;
    }

    if(!form.agree.checked) {
        document.querySelector('#checkbox-error').innerHTML="*confirm your entries";
        return false;
    }
}