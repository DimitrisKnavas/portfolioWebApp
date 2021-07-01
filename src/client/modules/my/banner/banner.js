import { LightningElement } from "lwc";

export default class Banner extends LightningElement{
    heading = 'Welcome stranger';
    description = 'This is a web app is about myself. Enjoy!'

    connectedCallback(){
        window.onwheel = e => {
            let pos = document.documentElement.scrollTop || document.body.scrollTop;
            console.log(document.documentElement.scrollTop);
            console.log(document.documentElement.scrollTop);
            console.log(pos);
            console.log('DIM');
            let bioS = document.getElementById('bioSection-0');
            let expS = document.querySelector('my-timeline');
            console.log(bioS.getBoundingClientRect());
            console.log(expS.getBoundingClientRect());

            let elem = document.querySelector('.wow-effect');
            if(e.deltaY >= 0){
              if(pos>60){
                elem.classList.add('fly');
              }
              console.log('Scroll Down');
            } else {
              // Scrolling Up with mouse
              console.log('Scroll Up');
              if(pos<60){
                elem.classList.remove('fly');
              }
            }
          }
    }
}