
let inputs = document.getElementsByClassName('inputForm');



for(let i = 0; i < inputs.length; i++){

    inputs[i].addEventListener("focus", function(){

        let label = this.parentNode.firstElementChild;
        label.classList.add("focus");

    });

    inputs[i].addEventListener("blur", function(){

        let label = this.parentNode.firstElementChild;
        
        if(this.value == ""){
            
            label.classList.remove("focus");

            label.classList.remove("success");
            this.classList.remove("success");

            label.classList.add("error");
            this.classList.add("error");
        }else{

            label.classList.remove("error");
            this.classList.remove("error");

            label.classList.add("success");
            this.classList.add("success");
        }
        
    });
    
}

const showpass = document.getElementById('passShow');

showpass.addEventListener('click', function(){
    let inputPass = document.getElementById('password');
    if(inputPass.type == 'password'){
        inputPass.type = 'text';
        showpass.classList.remove('ri-eye-fill');
        showpass.classList.add('ri-eye-off-fill');
    }else{
        inputPass.type = 'password';
        showpass.classList.remove('ri-eye-off-fill');
        showpass.classList.add('ri-eye-fill');
    }
});