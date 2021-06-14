import { LightningElement } from "lwc";
import NAV_DATA from '../../../data/navbarData.js';

export default class Navbar extends LightningElement{
    navList = NAV_DATA;

    isMobileToggle = false;

    connectedCallback() {
        //on window resize, fix highlight position
        window.addEventListener('resize', () => {
            
                let selectedOption = document.querySelector('ul ~ div');
                let firstOption = document.querySelector('ul > li > a');
                console.log(firstOption);

                let width = firstOption.getBoundingClientRect().width;
                let left = firstOption.getBoundingClientRect().left;

                let changedStyle = `width: ${width}px; left: ${left}px; display:block; overflow:hidden;`;

                selectedOption.setAttribute('style',changedStyle);
            
        });
    }

    renderedCallback(){
        //fix highlight position when page loads(loads 50px more to the right, adjust)
        if(this.isMobileToggle === false){
            let selectedOption = document.querySelector('ul ~ div');
            let firstOption = document.querySelector('ul > li > a');
            console.log(firstOption);

            let width = firstOption.getBoundingClientRect().width;
            let left = firstOption.getBoundingClientRect().left - 50;

            let changedStyle = `width: ${width}px; left: ${left}px; display:block; overflow:hidden;`;

            selectedOption.setAttribute('style',changedStyle);
        }
    }

    get openMobileNav(){
        return `collapse navbar-collapse ${this.isMobileToggle && 'show'}`.replace('false','');
    }

    //change background when menu button is clicked(only in mobile); 
    get navMobileDesign(){
        return `navbar navbar-expand-lg navbar-dark ${this.isMobileToggle ? 'bg-dark' : 'purple-gradient'}`;
    }

    get navMobileHideUndeline(){
        console.log(this.isMobileToggle);
        return `${!this.isMobileToggle ? 'navbar-slider' : 'navbar-slider-hide'}`
    }

    toggleMobileMenu(){
        this.isMobileToggle = !this.isMobileToggle;
    }

    highlightOption(){
        //get the blue
        
        let selectedOption = document.querySelector('ul ~ div');
        let width;
        let left;

        width = event.target.getBoundingClientRect().width;
        left = event.target.getBoundingClientRect().left;

        let changedStyle = `width: ${width}px; left: ${left}px; display:block; overflow:hidden;`;

        selectedOption.setAttribute('style',changedStyle);
    }

    
    defaultHighlightOption(){
        let selectedOption = document.querySelector('ul ~ div');
        let firstOption = document.querySelector('ul > li > a');
        console.log(firstOption);

        let width = firstOption.getBoundingClientRect().width;
        let left = firstOption.getBoundingClientRect().left;
        console.log(left);

        let changedStyle = `width: ${width}px; left: ${left}px; display:block; overflow:hidden;`;

        selectedOption.setAttribute('style',changedStyle);
    }

}