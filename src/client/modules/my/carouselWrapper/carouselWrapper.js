import { LightningElement } from "lwc";

export default class CarouselWrapper extends LightningElement{
    slides = [
        {
            image: './resources/Images/Banner_section/home3.jpg',
            heading:'Welcome!',
            description:'Glad to have you here.'
        },
        {
            image: './resources/Images/Banner_section/home2.jpg',
            heading:'Have fun!',
            description:'Enjoy your time being here.'
        }
    ]
}