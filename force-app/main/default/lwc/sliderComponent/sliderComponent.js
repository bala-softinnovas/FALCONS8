import { api, LightningElement } from 'lwc';

export default class SliderComponent extends LightningElement {
    vol;

    changeHandler(event) {
        this.vol = event.target.value;
    }

    @api resetSlider() {
        this.vol = 50;
    }
}