import { LightningElement } from 'lwc';

export default class RecordDetailComp extends LightningElement {
    recordId = "0035h00000nBDt9AAG";
    objectName = "Contact";
    showModal = false;

    clickHandler() {
        this.showModal = true;
    }

    hideModal() {
        this.showModal = false;
    }
}