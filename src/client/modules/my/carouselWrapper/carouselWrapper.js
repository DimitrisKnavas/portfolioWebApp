import { LightningElement } from "lwc";

export default class CarouselWrapper extends LightningElement{
    slides = [
        {
            image: './resources/Images/Banner_section/home.png',
            heading:'Welcome!',
            description:'Glad to have you here.'
        },
        {
            image: './resources/Images/Banner_section/home2.png',
            heading:'Have fun!',
            description:'Enjoy your time being here.'
        }
    ]
}