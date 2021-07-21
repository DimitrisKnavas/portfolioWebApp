import { crossOriginResourcePolicy } from "helmet";
import { LightningElement } from "lwc";

export default class Contact extends LightningElement{

    renderedCallback(){
        //let ratingComp = document.querySelector('my-fivestarrating');
        let ratingComp = document.getElementById('ratingComp-6');
        console.log(ratingComp);

        

        ratingComp.addEventListener('change',(event)=>{
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
            event.returnValue = false;
            let ratingField = document.querySelector('input[name="rating"]');
            console.log(ratingField);
            console.log(event.target.value);
            ratingField.value = event.target.value;
        })

    }
    
    handleMessage(event){
        let errorSpan = document.getElementById('emailError-6');
        errorSpan.style.display="none";
        event.preventDefault();
        let formElement = document.querySelector("form");
        console.log(formElement);
        let formData = new FormData(formElement);
        if(!formData.get('email')){
            console.log('validationerror');
            errorSpan.style.display="block";
            errorSpan.style.color="red";
            return false;
        }
        else{
              const regexMatch = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(formData.get('email'));
              if (regexMatch) {
                console.log('email ok');
              } else {
                console.log('email invalid');
                errorSpan.style.display="block";
                errorSpan.style.color="red";
                return false;
              }
        }
        console.log(formData.get('rating'));
        console.log(typeof formData.get('email'));
        console.log(formData.get('message'));
        let data = {};
        for (var [key, value] of formData.entries()) { 
            console.log(key, value);
            data[key] = value;
        }

        fetch('http://localhost:3002/api/v1/sendemail',{
            method:'POST',
            headers:{
                'accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then(response=>{
            if(!response.ok){
                throw new Error('No response from server')
            }
            return response.json();
        }).then(result=>{
            console.log('Message sent',result)
            document.querySelector('input[name=email]').value='';
            document.querySelector('textarea[name=message]').value='';
            document.querySelector('input[name=rating]').value='';
            let selectedRating = document.querySelector('input[type=radio]:checked');
            if(selectedRating){
                selectedRating.checked=false;
            }
            

            document.getElementById('formSuccess-6').style.display="block";
            document.getElementById('formSuccess-6').style.color="green";
            setTimeout(()=>{
                document.getElementById('formSuccess-6').style.display="none";
            },2000);
        }).catch(error=>{
            console.error(error)
        })

        
    }
}