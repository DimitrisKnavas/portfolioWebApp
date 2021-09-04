import { LightningElement } from "lwc";

export default class Banner extends LightningElement{
    heading = 'Welcome stranger';
    description = 'This is a web app is about myself. Enjoy!'

    connectedCallback(){
        window.onwheel = e => {
            let pos = document.documentElement.scrollTop || document.body.scrollTop;
            //console.log(document.documentElement.scrollTop);
            //console.log(document.documentElement.scrollTop);
            //console.log(pos);
            //console.log('DIM');
            let bioS = document.getElementById('bioSection-0');
            let expS = document.querySelector('my-timeline');
            let homeS = document.getElementById('homeSection-0');
            let conS = document.querySelector('my-contact');
            //console.log(bioS.getBoundingClientRect().bottom);
            //console.log(expS.getBoundingClientRect().bottom);
            //console.log(homeS.getBoundingClientRect().bottom);
            //console.log(conS.getBoundingClientRect().bottom);
            

            let elem = document.querySelector('.wow-effect');
            if(e.deltaY >= 0){
              if(pos>60){
                elem.classList.add('fly');
              }
              //console.log('Scroll Down');

              if(conS.getBoundingClientRect().top<0){
                let selectedOption = document.querySelector('ul ~ div');
                let as = document.querySelectorAll('li > a');
                let activeLink;
                as.forEach(element => {
                    if(element.innerText === 'CONTACT'){
                      let width;
                      let left;
                      width = element.getBoundingClientRect().width;
                      left = element.getBoundingClientRect().left;

                      let changedStyle = `width: ${width}px; left: ${left}px; display:block; overflow:hidden;`;

                      selectedOption.setAttribute('style',changedStyle);
                      element.setAttribute('active','true');
                      activeLink = element.innerText;
                    }
                });   
                
                let options = document.querySelectorAll('ul > li > a');
        
                options.forEach(option => {
                    if(activeLink !== option.innerText && option.hasAttribute('active')){
                        option.removeAttribute('active');
                    }
                }) 
              }
              else if(expS.getBoundingClientRect().top<0){
                let selectedOption = document.querySelector('ul ~ div');
                let as = document.querySelectorAll('li > a');
                let activeLink;
                as.forEach(element => {
                    if(element.innerText === 'EXPERIENCE'){
                      let width;
                      let left;
                      width = element.getBoundingClientRect().width;
                      left = element.getBoundingClientRect().left;

                      let changedStyle = `width: ${width}px; left: ${left}px; display:block; overflow:hidden;`;

                      selectedOption.setAttribute('style',changedStyle);
                      element.setAttribute('active','true');
                      activeLink = element.innerText;
                    }
                });
                
                let options = document.querySelectorAll('ul > li > a');
        
                options.forEach(option => {
                    if(activeLink !== option.innerText && option.hasAttribute('active')){
                        option.removeAttribute('active');
                    }
                }) 
              }
              else if(bioS.getBoundingClientRect().top<0){
                let selectedOption = document.querySelector('ul ~ div');
                let as = document.querySelectorAll('li > a');
                let activeLink;
                as.forEach(element => {
                    if(element.innerText === 'BIO'){
                      let width;
                      let left;
                      width = element.getBoundingClientRect().width;
                      left = element.getBoundingClientRect().left;

                      let changedStyle = `width: ${width}px; left: ${left}px; display:block; overflow:hidden;`;

                      selectedOption.setAttribute('style',changedStyle);
                      element.setAttribute('active','true');
                      activeLink = element.innerText;
                    }
                }); 
                
                let options = document.querySelectorAll('ul > li > a');
        
                options.forEach(option => {
                    if(activeLink !== option.innerText && option.hasAttribute('active')){
                        option.removeAttribute('active');
                    }
                }) 
              }
            } else {
              // Scrolling Up with mouse
              //console.log('Scroll Up');
              if(pos<60){
                elem.classList.remove('fly');
              }

              if(homeS.getBoundingClientRect().bottom===0){
                let selectedOption = document.querySelector('ul ~ div');
                let as = document.querySelectorAll('li > a');
                let activeLink;
                as.forEach(element => {
                    if(element.innerText === 'HOME'){
                      let width;
                      let left;
                      width = element.getBoundingClientRect().width;
                      left = element.getBoundingClientRect().left;

                      let changedStyle = `width: ${width}px; left: ${left}px; display:block; overflow:hidden;`;

                      selectedOption.setAttribute('style',changedStyle);
                      element.setAttribute('active','true');
                      activeLink = element.innerText;
                    }
                });  

                let options = document.querySelectorAll('ul > li > a');
        
                options.forEach(option => {
                    if(activeLink !== option.innerText && option.hasAttribute('active')){
                        option.removeAttribute('active');
                    }
                }) 
              }
              else if(bioS.getBoundingClientRect().bottom>0){
                let selectedOption = document.querySelector('ul ~ div');
                let as = document.querySelectorAll('li > a');
                let activeLink;
                as.forEach(element => {
                    if(element.innerText === 'BIO'){
                      let width;
                      let left;
                      width = element.getBoundingClientRect().width;
                      left = element.getBoundingClientRect().left;

                      let changedStyle = `width: ${width}px; left: ${left}px; display:block; overflow:hidden;`;

                      selectedOption.setAttribute('style',changedStyle);
                      element.setAttribute('active','true');
                      activeLink = element.innerText;
                    }
                });  

                let options = document.querySelectorAll('ul > li > a');
        
                options.forEach(option => {
                    if(activeLink !== option.innerText && option.hasAttribute('active')){
                        option.removeAttribute('active');
                    }
                }) 
              }
              else if(expS.getBoundingClientRect().bottom>0){
                let selectedOption = document.querySelector('ul ~ div');
                let as = document.querySelectorAll('li > a');
                let activeLink;
                as.forEach(element => {
                    if(element.innerText === 'EXPERIENCE'){
                      let width;
                      let left;
                      width = element.getBoundingClientRect().width;
                      left = element.getBoundingClientRect().left;

                      let changedStyle = `width: ${width}px; left: ${left}px; display:block; overflow:hidden;`;

                      selectedOption.setAttribute('style',changedStyle);
                      element.setAttribute('active','true');
                      activeLink = element.innerText;
                    }
                });  
                
                let options = document.querySelectorAll('ul > li > a');
        
                options.forEach(option => {
                    if(activeLink !== option.innerText && option.hasAttribute('active')){
                        option.removeAttribute('active');
                    }
                }) 
              }
              
            }
          }
    }
}