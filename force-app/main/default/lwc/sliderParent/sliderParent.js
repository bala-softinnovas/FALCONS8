import { LightningElement } from 'lwc';

export default class SliderParent extends LightningElement {
    changeSlider() {
        this.template.querySelector('c-slider-component').resetSlider();
    }
}