function validate() {


let username = $('#username');
let email = $('#email');
let password =  $('#password');
let confirmPass = $('#confirm-password');
let submitBtn = $('#submit');
let companyCheckbox = $('#company')
let companyNumber = $('#companyNumber');
let compayInfo = $('#companyInfo');
let validDiv = $('#valid');
   
    
    submitBtn.click((event)=>{
        event.preventDefault();
        validateForm();
    }) 

    companyCheckbox.change(()=>{
        if (companyCheckbox.is(':checked')) {
            compayInfo.css('display','block');
        }
        else{
            compayInfo.css('display','none');
        }
    })
    
   
    function validateForm(){
        const regexUserName = /^[0-9A-Za-z]{3,20}$/gm;
        validateInput(regexUserName,username)
        
    }

    function validateInput(regexPattern,input){
        if (regexPattern.test(input.val())) {
           input.css('border','none')
        }
        else{
            input.css('border','2px solid red')
        }
    }


}
