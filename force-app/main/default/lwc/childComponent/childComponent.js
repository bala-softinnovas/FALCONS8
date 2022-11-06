import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    clickHandler() {
        const showEvent = new CustomEvent(
            'show',
            {
                bubbles: true,
                composed: true
            }
        );
        this.dispatchEvent(showEvent);
    }
}