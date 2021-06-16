import { LightningElement,api } from "lwc";

const CARD_VISIBLE = 'custom-card-visible';
const CARD_HIDDEN = 'custom-card-hidden ';

const DOT_VISIBLE = 'dot active';
const DOT_HIDDEN = 'dot';

const DEFAULT_SLIDER_TIMER = 9000;

export default class Carousel extends LightningElement{
    slides = [];

    slideIndex = 1;

    @api slideTimer = DEFAULT_SLIDER_TIMER;

    timer;

    connectedCallback(){
        this.timer = window.setInterval(() => {
            this.slideSelectionHandler(++this.slideIndex);
        },Number(this.slideTimer));
    }

    disconnectedCallback(){
        window.clearInterval(this.timer);
    }

    @api 
    get slidesData(){
        return this.slides;
    }

    set slidesData(data){
        this.slides = data.map((item,index) =>{
            return index === 0 ? {
                ...item,
                slideIndex: index + 1,
                cardClasses: CARD_VISIBLE,
                dotClasses:DOT_VISIBLE
            }:
            {
                ...item,
                slideIndex: index + 1,
                cardClasses: CARD_HIDDEN,
                dotClasses:DOT_HIDDEN
            }
        })
    }

    currentSlide(event){
        let slideIndex = Number(event.target.dataset.id);
        this.slideSelectionHandler(slideIndex);
    }

    slideBack(){
        //let slideIndex = --this.slideIndex % this.slides.length;
        let slideIndex = this.slideIndex - 1;
        this.slideSelectionHandler(slideIndex);
    }

    slideForward(){
        //let slideIndex = (++this.slideIndex % this.slides.length) +1;
        let slideIndex = this.slideIndex + 1;
        this.slideSelectionHandler(slideIndex);
    }

    slideSelectionHandler(index){
        if(index > this.slides.length){
            this.slideIndex = 1;
        }
        else if(index < 1){
            this.slideIndex = this.slides.length;
        }
        else{
            this.slideIndex = index;
        }

        this.slides = this.slides.map(item =>{
            return this.slideIndex === item.slideIndex ? {
                ...item,
                cardClasses: CARD_VISIBLE,
                dotClasses:DOT_VISIBLE
            }:
            {
                ...item,
                cardClasses: CARD_HIDDEN,
                dotClasses:DOT_HIDDEN
            }
        })

    }
}