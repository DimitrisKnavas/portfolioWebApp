import { LightningElement } from "lwc";
import NAV_DATA from '../../../data/navbarData.js';

export default class Navbar extends LightningElement{
    navList = NAV_DATA;

    isMobileToggle = false;

    get openMobileNav(){
        return `collapse navbar-collapse ${this.isMobileToggle && 'show'}`.replace('false','');
    }

    //change background when menu button is clicked(only in mobile); 
    get navMoblieDesign(){
        return `navbar navbar-expand-lg navbar-dark ${this.isMobileToggle ? 'bg-dark' : 'purple-gradient'}`;
    }

    toggleMobileMenu(){
        this.isMobileToggle = !this.isMobileToggle;
    }
}