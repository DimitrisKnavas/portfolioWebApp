import { LightningElement,api } from "lwc";
import NAV_DATA from '../../../data/navbarData.js';

export default class Article extends LightningElement{
    @api bioIndex;
    @api bioTitle;
    @api bioBody;

    get alignClassTitle (){
        console.log('bioIndex' + this.bioIndex);
        return this.bioIndex % 2 === 0 ? 'wrap-left' : 'wrap-right';
    }

    get alignClassBody (){
        return this.bioIndex % 2 === 0 ? 'wrap-right' : 'wrap-left';
    }
}